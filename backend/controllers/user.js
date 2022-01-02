const _ = require('lodash');
const User = require('../models/user');
const formidable = require('formidable');
const fs = require('fs');

exports.userById = (req, res, next, id) => {
    User.findById(id)
        .populate('following', '_id name')
        .populate('followers', '_id name')
        .exec((err, user) => {
        if (err || !user) {
            return res.status(400).json( {
                error: "User not found"
            })
        }
        req.profile = user;
        next();
    })
}

exports.hasAuthorization = (req, res) => {
    const authorized = req.profile && req.auth && req.profile._id === req.auth._id;
    if (!authorized) {
        return res.status(403).json({
            error: "User is not authorized to perform this action."
        })
    }
}

exports.allUsers = (req, res) => {
    User.find((err, users) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(users);
    }).select("name email updated created")
}

exports.getUser = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;

    return res.json(req.profile);
}

exports.updateUser = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (error, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Photo could not be uploaded"
            });
        }
        let user = req.profile
        user = _.extend(user, fields);
        user.upated = Date.now();
        if (files.photo) {
            user.photo.date = fs.readFileSync(files.photo.path)
            user.photo.contentType = files.photo.type
        }

        user.save((err) => {
            if (err) {
                return res.status(400).json({
                    error: err
                })
            }
            user.hashed_password = undefined
            user.salt = undefined
            res.json(user);
        })
    })
}

exports.deleteUser = (req, res) => {
    let user = req.profile;
    user.remove((err) => {
        if (err) {
            return res.status(400).json({
                error: "You are not authorized to perform this action"
            });
        }
        res.json({ message: "User successfully deleted!" });
    })
}
