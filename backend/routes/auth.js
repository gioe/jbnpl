const express = require('express');
const {
    signup,
    login,
    logout,
    resetPassword,
} = require('../controllers/auth');
const { userById } = require('../controllers/user');
const { userSignupValidator, passwordResetValidator } = require('../validators')
const router = express.Router();

router.put("/reset-password", passwordResetValidator, resetPassword);

router.post('/signup', userSignupValidator, signup);
router.post('/login', login);
router.get('/logout', logout);

router.param("userId", userById);

module.exports = router;
