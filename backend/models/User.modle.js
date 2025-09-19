const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema({
  name: {
   type: String,
   required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["admin", "agent"],
    default: "admin"
  }
},{timestamps: true})

//password hash before save user data
userSchema.pre('save', async function (next) {
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

const User = mongoose.model("User",userSchema)

module.exports = User