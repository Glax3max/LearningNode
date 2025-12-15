import  mongoose, { trusted } from "mongoose"

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true
    },
    jobtitle:{
        type:String,
        rquired:true
    },
    gender:{
        type:String,
        required:true
    },

},
{
    timestamps:true
})

const User = mongoose.model("user",userSchema);
export default User;