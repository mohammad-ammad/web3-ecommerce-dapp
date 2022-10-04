//---INTIALIZED IMPORTS
const express = require("express");
const router = express.Router();

const {create, list} = require("../Controllers/VendorController/ProductController")

//---ROUTES
router.route("/create").post(create);
router.route("/").get(list);


module.exports = router;