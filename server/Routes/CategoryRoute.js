//---INTIALIZED IMPORTS
const express = require("express");
const router = express.Router();

const {create, update, fetchAll} = require('../Controllers/AdminController/CategoriesController')

//---ROUTES
router.route("/create").post(create);
router.route("/update/:id").put(update);
router.route("/").get(fetchAll);

module.exports = router;