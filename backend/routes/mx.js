const express = require('express');
const { searchInstitutions } = require('../controllers/mxclient');
const { requireSignin } = require("../controllers/auth");
const router = express.Router();

router.get('/mx/institution/:institutionId', searchInstitutions);

module.exports = router;
