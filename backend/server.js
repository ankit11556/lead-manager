const express = require('express');
const app = express();
const dotenv = require('dotenv')
const connectDB = require("./config/Db.config")
const cookieParser = require('cookie-parser')

dotenv.config()

app.use(express.json())
app.use(cookieParser())

const authRoutes = require('./routes/Auth.routes');


app.use("/api/auth",authRoutes)

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
