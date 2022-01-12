const express = require('express');
const { searchInstitutions, getInstitutionCredentials} = require('../controllers/mxclient');
const router = express.Router();

router.get('/mx/institution/:institutionId', searchInstitutions);
router.get('/mx/institution/credentials/:institutionId', getInstitutionCredentials);

module.exports = router;
