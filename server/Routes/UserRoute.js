//---INTIALIZED IMPORTS
const express = require("express");
const router = express.Router();
const {create, isUser, isWallet, login} = require('../Controllers/UsersController/AuthController');

//---AUTHORIZATION ROUTES
router.route("/create").post(create);
router.route("/exist").post(isUser);
router.route("/wallet").post(isWallet);
router.route("/login").post(login);


module.exports = router;