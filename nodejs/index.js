const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

dbConnect();
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 7002;
app.listen(PORT,()=>{
    console.log(`Server is running at: ${PORT}`);
})


