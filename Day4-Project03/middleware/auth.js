const { getUser } = require("../service/auth");

async function restricLoggedInUserOnly(req,res,next) {
    const token = req.cookies.uid;
    if(!token) {
        return res.redirect("/login");
    }
    const user = getUser(token);

    if(!user) {
        return res.redirect("/login");
    }
    req.user = user; 
    next();
}

module.exports = restricLoggedInUserOnly;