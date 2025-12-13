const express = require('express')
const users = require("./MOCK_DATA.json");
const { route } = require('./routes/route');
const fs = require("fs")
// import fs from "fs";
const app = express();
const PORT = 7878;

app.use(express.json())
app.use(express.urlencoded({extended:false}))


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
    console.log(data)
    users.push({id: users.length + 1,...data});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data)=> {
        return res.json({status:"pending post"})
    });
})

// app.route("/api/users/:id")


app.listen(PORT,()=> {
    console.log(`Server startred on port ${PORT}`)
})