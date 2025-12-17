const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    longUrl:{
        type:String,
        require:true
    },
    shortUrl:{
        type:String,
        required:true,
        unique:true
    },
    visitHistory:[
        {
            timestamp:{
                type:Number
            }
        }
    ],
},{
    timestamps:true
})

const url = mongoose.model("url",urlSchema);

module.exports = url;