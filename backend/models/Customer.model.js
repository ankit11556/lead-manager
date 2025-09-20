const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    firstName: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    notes: {
      type: string
    },
     assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agent",
      required: true
     },
     createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
     }
  }
},{timestamps: true})

const Customer = mongoose.model("Customer",customerSchema);

module.exports = Customer