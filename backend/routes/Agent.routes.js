const express = require('express');
const router = express.Router();
const {protectRoutes} = require("../middleware/Auth.middleware")
const {createAgent,getAgents} = require("../controllers/Agent.controller")  

router.post("/",protectRoutes,createAgent)
router.get("/",protectRoutes,getAgents)

module.exports = router