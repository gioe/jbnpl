const express = require('express');
const { searchInstitutions, getInstitutionCredentials, updateTransaction} = require('../controllers/mxclient');
const router = express.Router();

router.get('/mx/institution/:institutionId', searchInstitutions);
router.get('/mx/institution/credentials/:institutionId', getInstitutionCredentials);
router.put('/transaction/:transactionId', updateTransaction);

module.exports = router;
