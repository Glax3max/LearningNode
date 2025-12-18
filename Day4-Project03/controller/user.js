const user = require("../models/user");
const bcrypt = require("bcrypt");
const {v4: uuidv4} = require("uuid");
const { setUser } = require("../service/auth");

async function handleSignup(req,res) {
    const {name,email,password} = req.body;
    if(!email.includes("@",1)) {
        return res.send("Enter a valid email");
    }
    let hashPass1 = "73";

    console.log("Hello")
    await bcrypt.hash(password,9).then((hash)=> {
        hashPass1 = hash
    })

    await user.create({
        name,
        email,
        password:hashPass1
    })

    return res.render("home")
}


async function handleSignin(req,res) {
      const {email,password} = req.body;
      const User = await user.findOne({
        email
      })
      const match = await bcrypt.compare(password,User.password)

    if(!match) {
        console.log("not found")
        return res.render("signin",{
            message:"Password or email wrong"
        })
    }

    const sessionId = uuidv4();

    setUser(sessionId,User.name);
    res.cookie('uid',sessionId);
    return res.redirect("/")
}

module.exports = {
    handleSignup,
    handleSignin
}