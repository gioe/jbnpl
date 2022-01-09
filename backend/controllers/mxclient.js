const { Configuration, MxPlatformApi } = require('mx-platform-node');
const Membership = require("../models/membership");
const User = require("../models/user");
const Transaction = require("../models/transaction");
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

exports.establishMembership = async (req, res) => {
    const userGuid = req.body.userGuid
    const credentials = req.body.credentials
    const institutionCode = req.body.institutionCode

    const userId = req.params.userId;
    const requestBody = {
        member: {
            credentials,
            institution_code: institutionCode,
        },
    };
    const mxResponse = await mxClient.createMember(userGuid, requestBody);
    const statusResponse = await mxClient.readMemberStatus(mxResponse.data.member.guid, userGuid);
    const membership = await new Membership(mxResponse.data.member);
    membership.is_authenticated = statusResponse.data.member.is_authenticated
    await membership.save()
    const idRequestBody = {
        member: {
            id: membership._id
        }
    };
    await updateMembership(membership.guid, membership.user_guid, idRequestBody)

    User.findByIdAndUpdate(userId, {$push: {memberships: membership._id}}, (err) => {
        if (err) {
            return res.status(400).json({error: err})
        }
    })

    Membership.find((err, memberships) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json({response: memberships});
    }).select("is_authenticated connection_status successfully_aggregated_at is_being_aggregated aggregated_at name institution_code guid")
}

exports.listAccounts = async (req, res) => {
    const userId = req.params.mxId;
    const page = 1;
    const recordsPerPage = 10;

    const response = await mxClient.listUserAccounts(userId, page, recordsPerPage);
    res.json({ response: response.data.accounts });
}

exports.getAllTransactions = async (req, res) => {
    const memberGuid = req.params.mxId;
    const page = req.params.page;
    const recordsPerPage = 100;

    const response = await mxClient.listTransactions(memberGuid, undefined, page, recordsPerPage, undefined, undefined);
    let filteredTransactions = []
    for (let transaction of response.data.transactions) {
        if (isFromBNPLVendor(transaction)) {
            const storedTransaction = await new Transaction(transaction)
            await storedTransaction.save()
            filteredTransactions.push(transaction)
        }
    }
    res.json({ response: response.data.transactions });
}

const isFromBNPLVendor = (transaction) => {
    return transaction.original_description.includes("AFFIRM") ||
        transaction.original_description.includes("KLARNA") ||
        transaction.original_description.includes("AFTERPAY")
}

updateMembership = async (membershipGuid, userGuid, requestBody) => {
    const response = await mxClient.updateMember(membershipGuid, userGuid, requestBody);
    return response
}

exports.updateMembershipCredentials = async (req, res) => {
    const userGuid = req.body.userGuid
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
    const memberGuid = req.body.memberGuid
    const userGuid = req.body.userGuid

    const response = await mxClient.readMemberStatus(memberGuid, userGuid);
    res.json({ response: response.data });
}
