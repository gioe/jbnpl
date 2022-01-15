const { Configuration, MxPlatformApi } = require('mx-platform-node');
const Membership = require("../models/membership");
const User = require("../models/user");
const Payment = require("../models/payment");
const {request} = require("express");

const mxConfiguration = new Configuration({
    basePath: 'https://int-api.mx.com',
    username: `${process.env.MX_CLIENT_ID}`,
    password: `${process.env.MX_API_KEY}`,
    baseOptions: {
        headers: {
            Accept: 'application/vnd.mx.api.v1+json',
        }
    }
});

const mxClient = new MxPlatformApi(mxConfiguration);

exports.createMxUser = async (email) => {
    const requestBody = {
        user: {
            email: email,
        }
    };
    const mxResponse = await mxClient.createUser(requestBody);
    return mxResponse
}

exports.searchInstitutions = async (req, res) => {
    const name = req.params.institutionId;
    const page = 1;
    const recordsPerPage = 10;
    const supportsAccountIdentification = true;
    const supportsAccountStatement = true;
    const supportsAccountVerification = true;
    const supportsTransactionHistory = true;
    const mxResponse = await mxClient.listInstitutions(name, page, recordsPerPage, supportsAccountIdentification, supportsAccountStatement, supportsAccountVerification, supportsTransactionHistory);
    res.json({ results: mxResponse.data });
}

exports.getInstitutionCredentials = async (req, res) => {
    const code = req.params.institutionId;
    const page = 1;
    const recordsPerPage = 10;

    const response = await mxClient.listInstitutionCredentials(code, page, recordsPerPage);
    res.json({ response: response.data });
}

// exports.listAccounts = async (req, res) => {
//     const userId = req.params.mxId;
//     const page = 1;
//     const recordsPerPage = 10;
//
//     const response = await getUserAccounts(userId, page, recordsPerPage)
//     res.json({ response: response.data.accounts });
// }

exports.getUserAccounts = async (userId, page, recordsPerPage) => {
    const response = await mxClient.listUserAccounts(userId, page, recordsPerPage);
    return response
}

exports.getAllTransactions = async (req, res) => {
    const memberGuid = req.params.mxId;
    const page = req.params.page;
    const recordsPerPage = 100;

    const response = await mxClient.listTransactions(memberGuid, undefined, page, recordsPerPage, undefined, undefined);
    for (let payment of response.data.transactions) {
        if (isFromBNPLVendor(payment)) {
            console.log(payment)
            storeNewPayment(payment)
        }
    }

    Payment.find((err, payments) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(payments);
    }).select("guid category transacted_at top_level_category amount description original_description type")
}

const storeNewPayment = (payment) => {
    Payment.exists({guid: payment.guid}, async function (err, doc) {
        if (err) {
            console.log(err)
        } else if (!doc && isFromBNPLVendor(payment)) {
            console.log(payment)
            const newPayment = await new Payment(payment)
            await newPayment.save()
        }
    });
}

const isFromBNPLVendor = (transaction) => {
    return transaction.original_description.includes("AFFIRM") ||
        transaction.original_description.includes("KLARNA") ||
        transaction.original_description.includes("AFTERPAY")
        // || transaction.description.includes("Apple")
}

updateMembership = async (membershipGuid, userGuid, requestBody) => {
    const response = await mxClient.updateMember(membershipGuid, userGuid, requestBody);
    return response
}

exports.updateMembershipCredentials = async (req, res) => {
    const userGuid = req.params.userGuid
    const memberGuid = req.body.memberGuid
    const credentials = req.body.credentials

    const requestBody = {
        member: {
            credentials: credentials
        }
    };
    const response = await updateMembership(memberGuid, userGuid, requestBody);
    res.json({ response: response.data });
}

exports.getMemberStatus = async (req, res) => {
    const memberGuid = req.params.memberGuid
    const userGuid = req.params.userGuid

    const response = await mxClient.readMemberStatus(memberGuid, userGuid);
    res.json({ response: response.data });
}


exports.updateTransaction = async (req, res) => {
    const transactionId = req.params.transactionId

    Transaction.findByIdAndUpdate(transactionId, {
        item_name: req.body.itemName,
        apr: req.body.apr,
        first_payment_date: req.body.firstPaymentDate,
        total_payments_required: req.body.totalCost,
        total_cost: req.body.totalCost,

    }, async function (err, docs) {
        if (err) {
            console.log(err)
        } else {
            console.log(docs)
        }
    })
}
