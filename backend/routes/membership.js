const express = require('express');
const { getAllMemberships, aggregateMembership} = require('../controllers/memberships');
const {requireSignin} = require("../controllers/auth");
const router = express.Router();

router.get('/memberships/:userGuid', getAllMemberships);
router.post('/users/:userGuid/members/:memberGuid/aggregate', aggregateMembership);

module.exports = router;
