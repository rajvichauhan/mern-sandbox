const express=require("express");
const User=require("../models/User");
const router=express.Router();
router.post('/register',async (req,res)=>{
    const {uname,pword}=req.body;
    try{
        const existing=await User.findOne({uname});
        if(existing){
            return res.status(400).json({message:'User already exists'});
        }
        else{
            const newUser= new User({uname,pword});
            await newUser.save();
            res.status(200).json({message:'User registered'});
        }
    }
    catch(err){
        console.log(err);
    }
});
router.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    try{
        const user= await User.findOne({username});
        if(!user || user.password!=password) return res.status(400).json({message: 'Invalid username or password'});
        res.status(200).json({message:"Login Successful"});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})
module.exports=router;