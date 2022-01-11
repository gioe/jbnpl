const express = require('express');
const { searchInstitutions, getInstitutionCredentials, establishMembership} = require('../controllers/mxclient');
const router = express.Router();

router.get('/mx/institution/:institutionId', searchInstitutions);
router.get('/mx/institution/credentials/:institutionId', getInstitutionCredentials);
router.post('/mx/membership/:userGuid', establishMembership);

module.exports = router;
