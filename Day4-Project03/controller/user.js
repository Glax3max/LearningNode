const user = require("../models/user");
const bcrypt = require("bcrypt");
const {v4: uuidv4} = require("uuid");
const { setUser } = require("../service/auth");

async function handleSignup(req,res) {
    const {name,email,password} = req.body;
    if(!email.includes("@",1)) {
        return res.send("Enter a valid email");
    }

    await user.create({
        name,
        email,
        password
    })

    return res.render("home")
}


async function handleSignin(req,res) {
      const {email,password} = req.body;
      const User = await user.findOne({
        email,
        password
      })
    
    if(!User) {
        return res.render("signin",{
            message:"Password or email wrong"
        })
    }

    const token =  setUser(User)
    // console.log(token)
    res.cookie('uid',token);
    return res.redirect("/")
}

module.exports = {
    handleSignup,
    handleSignin
}