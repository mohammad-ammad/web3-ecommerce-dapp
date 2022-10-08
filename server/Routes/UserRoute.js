//---INTIALIZED IMPORTS
const express = require("express");
const router = express.Router();
const {create, isUser, isWallet, login, createShop, checkShop} = require('../Controllers/UsersController/AuthController');

//---AUTHORIZATION ROUTES
router.route("/create").post(create);
router.route("/exist").post(isUser);
router.route("/wallet").post(isWallet);
router.route("/login").post(login);
router.route("/shop/:address").put(createShop);
router.route("/shop/:address").get(checkShop);


module.exports = router;