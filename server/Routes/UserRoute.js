//---INTIALIZED IMPORTS
const express = require("express");
const router = express.Router();
const {create} = require('../Controllers/UsersController/AuthController');

//---AUTHORIZATION ROUTES
router.route("/create").post(create);


module.exports = router;