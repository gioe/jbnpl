const _ = require("lodash");

const jwt = require('jsonwebtoken');
require('dotenv').config();
const expressJwt = require('express-jwt');
const User = require("../models/user");
const { createMxUser } = require("./mxclient")

exports.signup = async (req, res) => {
    const userExists = await User.findOne({
        email: req.body.email
    });

    if (userExists) return res.status(403).json({
        error: "User already exists"
    });

    const mxUser = await createMxUser(req.body.email);
    const user = await new User(req.body);
    user.mxId = mxUser.data.user.guid;
    await user.save()
    res.json({ message: "Signup success! Please login." });
}

exports.login = (req, res) => {
    // find the user based on the email
    const { email, password } = req.body;
    User.findOne({email}, (err, user) => {
        // no user or error
        if (err || !user) {
            return res.status(401).json({
                error: 'User with that email does not exist.'
            });
        }

        // does email and password match
        if(!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email and password do not match.'
            });
        }

        // generate a token with userId and secret
        const token = jwt.sign({_id : user._id}, process.env.JWT_SECRET);
        // persist token as 't' in cookie with expiry date
        res.cookie("t", token, {expire: new Date() + 9999});
        // return response with user and token to frontend
        const {_id, name, email } = user;
        return res.json({token, user: { _id, name, email} });
    });
}

exports.logout = (req, res) => {
    res.clearCookie("t");
    return res.json({
        message: "Logout Successsful"
    });
};

exports.requireSignin = expressJwt({
    // if the token is valid, express-jwt appends verified user id
    // in an auth key to the request object
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"], // added later
    userProperty: "auth",
});

exports.resetPassword = (req, res) => {
    const { resetPasswordLink, newPassword } = req.body;

    User.findOne({ resetPasswordLink }, (err, user) => {
        // if err or no user
        if (err || !user)
            return res.status("401").json({
                error: "Invalid Link!"
            });

        const updatedFields = {
            password: newPassword,
            resetPasswordLink: ""
        };

        user = _.extend(user, updatedFields);
        user.updated = Date.now();

        user.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.json({
                message: `Great! Now you can login with your new password.`
            });
        });
    });
};
