const express = require("express")
const router = express.Router()

router.get("/",(req,res)=> {
    const body2 = req.body;
    return res.send(body2)
})


module.exports = router