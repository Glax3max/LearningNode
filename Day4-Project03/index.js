require('dotenv').config();
const express = require("express")
const app = express();
const path = require("path")
const connectDB  = require("./DBConnect")
const urlRouter = require("./routes/url.js")
const userRouter = require("./routes/user.js");
const staticRouter = require("./routes/static.js")
const url = require('./models/url.js');
const restricLoggedInUserOnly = require('./middleware/auth.js');
const cookieParser = require('cookie-parser');

// connecting DB
connectDB(process.env.MONGO_URL);

// middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

// router
app.use("/",staticRouter);
app.use("/api/url",restricLoggedInUserOnly,urlRouter);
app.get("/u/:id",restricLoggedInUserOnly,async (req,res)=> {
    const id = req.params.id;
    console.log(id)
    const data = await url.findOne({
        shortUrl:id
    })

    console.log(data)
    return res.redirect(data.longUrl)
})
app.use("/api/user",userRouter);

app.listen(process.env.PORT,()=> {
    console.log(`Successfully connected to the server 8000`)
})

