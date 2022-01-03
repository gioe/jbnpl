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
