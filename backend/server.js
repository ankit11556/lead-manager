const express = require('express');
const app = express();
const dotenv = require('dotenv')
const connectDB = require("./config/Db.config")
const cookieParser = require('cookie-parser')
const cors = require('cors')

dotenv.config()

app.use(cors({
  origin: process.env.CLIENT_URI,
  credentials: true
}))
app.use(express.json())
app.use(cookieParser())

const authRoutes = require('./routes/Auth.routes');
const agentRoutes = require('./routes/Agent.routes')
const customerRoutes = require('./routes/Customer.routes')

app.use("/api/auth", authRoutes)
app.use("/api/agent", agentRoutes)
app.use("/api/customer",customerRoutes)

app.get("/",(req,res)=>{
  res.send("API is running...")
})

app.use((err,req,res,next)=>{
  console.error(err.stack);
  res.status(500).send('Something broke!')
})

const PORT = process.env.PORT || 3000

connectDB().then(()=>{
app.listen(PORT,()=>{
console.log(`server is running at http://localhost:${PORT}`);
})
})
