const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fName: {
        type:String,
        require:true
    },
    lName:{
        type:String,
        require:true
    }
})