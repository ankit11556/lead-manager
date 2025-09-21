const Agent = require("../models/Agent.model");
const Customer = require("../models/Customer.model");

exports.getDashboardData = async (req, res) => {
  try {
    // Total counts
    const totalAgents = await Agent.countDocuments({ createdBy: req.user._id });
    const totalCustomers = await Customer.countDocuments({ createdBy: req.user._id });

    // Recent 5 customers
    const recentCustomers = await Customer.find({ createdBy: req.user._id })
      .sort({ createdAt: -1 })
      .limit(5)
      .select("firstName phoneNumber notes");

    // Customers per agent
    const customersPerAgent = await Customer.aggregate([
      { $match: { createdBy: req.user._id } },
      { $group: { _id: "$assignedTo", count: { $sum: 1 } } },
      {
        $lookup: {
          from: "agents",
          localField: "_id",
          foreignField: "_id",
          as: "agent",
        },
      },
      { $unwind: "$agent" },
      { $project: { agentName: "$agent.name", count: 1 } },
    ]);

    res.status(200).json({
      totalAgents,
      totalCustomers,
      recentCustomers,
      customersPerAgent,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching dashboard", error: error.message });
  }
};
