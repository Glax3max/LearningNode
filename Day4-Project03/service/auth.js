const jwt = require("jsonwebtoken")
const secret = "kdfeeiru823yryhj3"
 function setUser(user) {
    const token =jwt.sign({
        _id:user._id,
        email:user.email
    },secret);
    console.log(token)
    return token;
}

function getUser(token) {
    if(!token) return null;
    try {
        return jwt.verify(token,secret)
    } catch (error) {
        return null;    
    }
}


module.exports = {
    setUser,
    getUser
}