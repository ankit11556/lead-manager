const express = require('express');
const router = express.Router();
const {protectRoutes} = require("../middleware/Auth.middleware")
const {createAgent,getAgents,getCustomersByAgent} = require("../controllers/Agent.controller")  

router.post("/",protectRoutes,createAgent)
router.get("/",protectRoutes,getAgents)
router.get("/:agentId",protectRoutes,getCustomersByAgent)
module.exports = router