const express = require("express");
const mongoose = require("mongoose");
const User = require('./models/User')
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

mongoose
  .connect("mongodb://localhost:27017/express-bcrypt-demo")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));




app.post("/api/users",async(req,res)=>{
    const {username,password} = req.body;
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = new User({username,password:hashedPassword});
        await newUser.save();
        res.status(201).json({message:"User registered succesfully"}); 
    }catch(error){res.status(500).json({error:"Server error"});

  };});


  app.post("/api/users/login",async (req,res)=>{

    const {username,password} = req.body;
    
    try{
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({message:"Invalid credentials"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
    
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }
        res.status(200).json({message:"Logged in successfully"});
    }
   catch (error){
       res.status(500).json({error:"Server error"});

   }

  });


