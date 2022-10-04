//---INTIALIZED IMPORTS
const express = require("express");
const router = express.Router();

const {create, list, listByVendorAddress, listById} = require("../Controllers/VendorController/ProductController")

//---ROUTES
router.route("/create").post(create);
router.route("/").get(list);
router.route("/vendor/:address").get(listByVendorAddress);
router.route("/:id").get(listById);


module.exports = router;