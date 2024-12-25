const express = require("express");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

// only admin
router.get("/admin", verifyToken, (req,res)=>{
    res.json({message: "Welcome admin"});
});

// both admin and manager
router.get("/manager", verifyToken, (req,res)=>{
    res.json({message: "Welcome manager"});
});

// all
router.get("/user", verifyToken, (req,res)=>{
    res.json({message: "Welcome user"});
});

module.exports = router;