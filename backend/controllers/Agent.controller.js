const Agent = require("../models/Agent.model");
const Customer = require("../models/Customer.model");

exports.createAgent = async (req,res) => {
  try {
    const {name, email, mobileNumber, password} = req.body;
    const existAgent = await Agent.findOne({email});
    if (existAgent) {
      return res.status(400).json({message: "Agent already exist"})
    }

    const agent = await Agent.create({name, email, mobileNumber, password, createdBy: req.user._id})
    res.status(201).json({message:"Agent created successfully", 
      agent: {
        id: agent._id,
        name: agent.name,
        email: agent.email,
        mobileNumber: agent.mobileNumber,
      }
    })
  } catch (error) {
    res.status(500).json({message: "Agent not created",error:error.message})
  }
}

exports.getAgents = async (req,res) => {
  try {
    const agents = await Agent.find({createdBy: req.user._id}).select("-password")
    res.status(200).json(agents)
  } catch (error) {
    res.status(500).json({message: "Error fetching agent",error: error.message});
  }
}

exports.getCustomersByAgent = async (req, res) => {
  try {
    const { agentId } = req.params;
    const customers = await Customer.find({ assignedTo: agentId });  
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching customers", error: error.message });
  }
};
