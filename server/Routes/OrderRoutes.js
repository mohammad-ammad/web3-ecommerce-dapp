//---INTIALIZED IMPORTS
const express = require("express");
const router = express.Router();

const {create, listForUser, listForVendor, update} = require('../Controllers/VendorController/OrderController')

//---ROUTES
router.route("/create").post(create);
router.route("/list/:address").get(listForUser);
router.route("/vendor/:vendor").get(listForVendor);
router.route("/update/:id").put(update);

module.exports = router;