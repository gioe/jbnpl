const express = require('express');
const { requireSignin } = require('../controllers/auth');
const { userById,
        getUser,
        updateUser,
        deleteUser} = require('../controllers/user');
const { getAllTransactions, getMemberStatus, updateMembershipCredentials} = require('../controllers/mxclient');

const router = express.Router();

router.get('/user/:userId', requireSignin, getUser);
router.get('/user/:mxId/transactions/:page', getAllTransactions);
router.get('/user/:userGuid/members/:memberGuid/status', getMemberStatus);

router.put('/user/:userId', requireSignin, updateUser);
router.put('/user/:userGuid/members/:memberGuid', updateMembershipCredentials);

router.delete('/user/:userId', requireSignin, deleteUser);

router.param("userId",  userById);

module.exports = router;
