const express = require('express');
const router = express.Router()
const {protectRoutes} = require('../middleware/Auth.middleware');
const { uploadCSV } = require('../controllers/Customer.controller');
const upload = require("../middleware/Upload.middleware")

router.post("/upload",protectRoutes,upload.single("file"),uploadCSV)

module.exports = router

