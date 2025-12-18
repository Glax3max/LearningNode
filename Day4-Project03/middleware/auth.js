const { getUser } = require("../service/auth");

async function restricLoggedInUserOnly(req,res,next) {
    const body = req.cookies.uid;
    if(!body) {
        return res.redirect("/login");
    }
    const user = getUser(body);

    if(!user) {
        return res.redirect("/login");
    }

    req.user = user; 
    next();
}

module.exports = restricLoggedInUserOnly;