const express = require("express");
const router = express.Router();
const { protectRoutes } = require("../middleware/Auth.Middleware");
const { getDashboardData } = require("../controllers/Dashboard.controller");

router.get("/", protectRoutes, getDashboardData);

module.exports = router;
