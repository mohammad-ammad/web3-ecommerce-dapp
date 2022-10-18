//---INTIALIZED IMPORTS
const express = require("express");
const router = express.Router();
const {create, isUser, isWallet, login, createShop, checkShop} = require('../Controllers/UsersController/AuthController');
const {createMessage} = require('../Controllers/UsersController/ContactController')

//---AUTHORIZATION ROUTES
router.route("/create").post(create);
router.route("/exist").post(isUser);
router.route("/wallet").post(isWallet);
router.route("/login").post(login);
router.route("/shop/:address").put(createShop);
router.route("/shop/:address").get(checkShop);

//---CONTACT
router.route("/create-message").post(createMessage);

module.exports = router;