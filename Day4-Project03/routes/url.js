const express  = require("express");
const { handleLongUrl, handleReturnShortUrl } = require("../controller/url");
const router = express.Router()

router.post("/",handleLongUrl)
router.get("/analytics/:id",handleReturnShortUrl)


module.exports = router;