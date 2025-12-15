import User from "../models/User.js";

export const getAllUser = async (req,res) => {
    const users = await User.find({})
    return res.status(200).send(users);
}


export const createUser = async(req,res) => {
     const {fname,lname,email,jobtitle,gender} = req.body;
    if(fname && lname && email && jobtitle && gender) {
        await User.create({
            fname,
            lname,
            email,
            jobtitle,
            gender
        })

        return res.status(200).send("User SuccessFully created")
    }else{
        return res.status(404).send("All fields are required")
    }
}
