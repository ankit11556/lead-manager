const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const agentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
},{timestamps: true})

agentSchema.pre('save', async function (next) {
  if (!this.isModified("password")) {
    return next()
  }
  try {
    this.password = await bcrypt.hash(this.password,10);
    next()
  } catch (error) {
    next(error)
  }
})

const Agent = mongoose.model('Agent',agentSchema);

module.exports = Agent