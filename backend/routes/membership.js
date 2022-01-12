const express = require('express');
const { getAllMemberships, aggregateMembership, resumeAggregation, getConnectWidgetUrl} = require('../controllers/memberships');
const {updateMembershipCredentials, getMemberStatus} = require("../controllers/mxclient");
const router = express.Router();

router.get('/memberships/:userGuid', getAllMemberships);
router.post('/users/:userGuid/members/:memberGuid/aggregate', aggregateMembership);
router.put('/memberships/:userGuid', updateMembershipCredentials);
router.get('/user/:userGuid/members/:memberGuid/status', getMemberStatus);
router.put('/users/:userGuid/members/:memberGuid/aggregate', resumeAggregation);
router.post('/widget/:userGuid', getConnectWidgetUrl)
module.exports = router;
