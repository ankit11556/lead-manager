const jwt = require("jsonwebtoken");
const User = require("../models/User.modle");

const protectRoutes = async (req,res,next) => {
  const token = req.cookies.token ||
  (req.headers.authorization &&
    req.headers.authorization.startsWith("Beared") &&
    req.headers.authorization.split("")[1]
  );

  if (!token) {
    return res.status(401).json({message: "Not authorized, token missing"})
  }

  try {
    const decoded = jwt.verify(token,process.env.TOKEN_KEY);
    req.user = await User.findById(decoded.userId).select("-password");

    if (!req.user) {
     return res.status(401).json({message: "User not found. Please register"});
    }

    next()
  } catch (error) {
     if(error.name === "TokenExpiredError"){
     return res.status(401).json({message: "Session expired. Please login again"})
  }
     return res.status(401).json({message: "Invalid token. Please login."})

  }
}

module.exports = {protectRoutes}