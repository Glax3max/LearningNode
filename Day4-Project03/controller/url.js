const shortid = require("shortid")
const url = require("../models/url")
async function handleLongUrl(req,res) {   
    const shortId = shortid.generate()
    const body = req.body;
    console.log(body)
    if(!body) {
        return res.status(400).json({err:`Url is required`})
    }
    await url.create({
        shortUrl:shortId,
        longUrl:body.url,
        visitedHistory:[]
    })

    return res.render("home",{
        id:shortId
    })
}

async function handleReturnShortUrl(req,res) {
    const id = req.params.id;
    const data = await url.findOne({
        shortUrl:id
    })
    return res.json({   
        totalClicks:data.visitHistory.length,
        analytics:data.visitHistory
    })
}

module.exports = {handleLongUrl,handleReturnShortUrl}