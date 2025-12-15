const express = require('express')
// const users = require("./MOCK_DATA.json");
const { route } = require('./routes/route');
const fs = require("fs")
const mongoose  = require("mongoose")
// import fs from "fs";
const app = express();
const PORT = 7878;

// conneting DB
mongoose.connect("mongodb://127.0.0.1:27017/UsersData").then((data,err)=> {
    console.log("Connection success full")
})


// schema for my model

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    gender: {
        type:String,
        required:true
    },
    ip_address: {
        type:String,
        required:true
    }
})

const User = mongoose.model('User',userSchema)
// middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use("/api/users/:id", (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    if (id == 23) {
        console.log(users[id].first_name)
    }
    next();
});



// Get all users
app.get("/api/users",(req,res)=> {
    return res.send(users);
})
app.route("/api2/users/lname").get(
    (req,res)=> {
    const userList = `
    <ul>
        ${users.map((u)=>`<li>${u.last_name}</li>`).join("")}
    </ul>
    `
    return res.send(userList);
})

app.route("/api2/users/fname").get((req,res)=> {
    const userList = `
    <ul>
        ${users.map((u)=>`<li>${u.first_name}</li>`).join("")}
    </ul>
    `
    return res.send(userList);
})


app.post("/api/users",(req,res)=> {
    // Create new todo
    const data = req.body;

    if(!data || !data.first_name || !data.last_name || !data.email || !data.gender || !data.ip_address) {
        return res.status(400).json({status:"All fields are required"})
    } 
    // const user = {
    //     firstName:data.first_name,
    //     lastName:data.last_name,
    //     email:data.email,
    //     gender:data.gender,
    //     ip_address:data.ip_address
    // }
    console.log(data)
    User.create({
        firstName:data.first_name,
        lastName:data.last_name,
        email:data.email,
        gender:data.gender,
        ip_address:data.ip_address
    });
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data)=> {
    //     return res.status(201).json({status:"pending post"})
    // });

    return res.end("done")
})

app.route("/api/users/:id").get((req,res)=> {
    const data = req.params.id;
    // const foundUser = users.find((u)=> u.id == data);
    return res.send(data);
})


app.listen(PORT,()=> {
    console.log(`Server startred on port ${PORT}`)
})