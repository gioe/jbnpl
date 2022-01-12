const _ = require("lodash");

require('dotenv').config();
const Membership = require("../models/membership");
const {Configuration, MxPlatformApi} = require("mx-platform-node");
const User = require("../models/user");
const {runInContext: memberships} = require("lodash");

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

exports.getAllMemberships = async (req, res) => {
    const userGuid = req.params.userGuid;
    const page = 1;
    const recordsPerPage = 30;

    const response = await mxClient.listMembers(userGuid, page, recordsPerPage);
    await getMembershipStatuses(response.data.members)
    Membership.find({user_guid: userGuid}, function (err, memberships) {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json({response: memberships});
    }).select("guid institution_code name aggregated_at successfully_aggregated_at connection_status is_authenticated user_guid")
}

const getMembershipStatuses = async (memberships) => {
    await Promise.all(memberships.map(async (membership) => {
        const response = await mxClient.readMemberStatus(membership.guid, membership.user_guid);
        Membership.findByIdAndUpdate(membership.id, {
            aggregated_at: response.data.member.aggregated_at,
            successfully_aggregated_at: response.data.member.successfully_aggregated_at,
            is_authenticated: response.data.member.is_authenticated,
            connection_status: response.data.member.connection_status
        }, function (err, docs) {
            if (err) {
                console.log(err)
            }
        })
    }));
}

exports.aggregateMembership = async (req, res) => {
    const memberGuid = req.params.memberGuid
    const userGuid = req.params.userGuid

    const response = await mxClient.aggregateMember(memberGuid, userGuid);
    res.json({response: response.data});
}

exports.resumeAggregation = async (req, res) => {
    const memberGuid = req.params.memberGuid
    const userGuid = req.params.userGuid

    const requestBody = {
        member: {
            challenges: req.body
        }
    };

    const response = await mxClient.resumeAggregation(memberGuid, userGuid, requestBody);
    console.log(response)
    const statusResponse = await mxClient.readMemberStatus(memberGuid, userGuid);
    console.log(statusResponse)
    res.json({response: statusResponse.data })
}
