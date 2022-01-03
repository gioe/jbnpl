const { Configuration, MxPlatformApi } = require('mx-platform-node');

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

const mxclient = new MxPlatformApi(mxConfiguration);

exports.createMxUser = async (email) => {
    const requestBody = {
        user: {
            email: email,
        }
    };
    const mxresponse = await mxclient.createUser(requestBody);
    return mxresponse
}

exports.searchInstitutions = async (req, res) => {
    const name = req.params.institutionId;
    const page = 1;
    const recordsPerPage = 10;
    const supportsAccountIdentification = true;
    const supportsAccountStatement = true;
    const supportsAccountVerification = true;
    const supportsTransactionHistory = true;
    const mxresponse = await mxclient.listInstitutions(name, page, recordsPerPage, supportsAccountIdentification, supportsAccountStatement, supportsAccountVerification, supportsTransactionHistory);
    res.json({ results: mxresponse.data });
}
