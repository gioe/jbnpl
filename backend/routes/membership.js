const express = require('express');
const { getAllMemberships, aggregateMembership} = require('../controllers/memberships');
const {updateMembershipCredentials} = require("../controllers/mxclient");
const router = express.Router();

router.get('/memberships/:userGuid', getAllMemberships);
router.post('/users/:userGuid/members/:memberGuid/aggregate', aggregateMembership);
router.put('/memberships/:userGuid', updateMembershipCredentials);

module.exports = router;
