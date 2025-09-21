const csv = require('csv-parser');
const fs = require("fs");
const Agent = require('../models/Agent.model');
const Customer = require('../models/Customer.model');

exports.uploadCSV = async (req,res) => {
  try {
    if(!req.file){
      return res.status(400).json({message: "Please upload a file"});
    }

    const results = [];
    fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data",(data)=>{ 
      results.push({
       firstName: data.FirstName || data["FirstName"] || "",
       phoneNumber: data.Phone || data["Phone"] || "",
       notes: data.Notes || ""
      })
    })
    .on("end",async () => {
      const agents = await Agent.find({createdBy: req.user._id});
      if(!agents.length){
        return res.status(400).json({message: "No agents found"})
      }
    

     // distribute customers among agents
     let agentIndex = 0;
     const customersToInsert = results
      .filter(row => row.firstName && row.phoneNumber)
     .map((row)=>{
      const agent = agents[agentIndex];
      agentIndex = (agentIndex+1) % agents.length  //round-robin

      return{
        ...row,
        assignedTo: agent._id, 
        createdBy: req.user._id
      }
     });

     await Customer.insertMany(customersToInsert);

     res.status(201).json({message: "CSV uploaded and customers distributed successfully"})
   })
  } catch (error) {
    res.status(500).json({ message: "Error uploading CSV", error: error.message });
  }
}