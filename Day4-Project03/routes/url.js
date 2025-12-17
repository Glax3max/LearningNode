const express  = require("express");
const { handleLongUrl, handleReturnShortUrl } = require("../controller/url");
const router = express.Router()

router.get("/",handleLongUrl)
router.get("/:id",handleReturnShortUrl)


module.exports = router;