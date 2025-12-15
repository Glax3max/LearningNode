import Product from "../models/Product.js";


export const createProduct = async(req,res)=> {
     const {name,price,category} = req.body;

    if(name && price && category) {
        await Product.create({
            name,
            price,
            category
        })
        return res.status(200).send("Product created successfully!")
    }else{
        return res.status(404).send("All fields are required")
    }
}

export const getAllProduct = async(req,res)=> {
     const products = await Product.find({});
    return res.send(products);
}

export const getProductByName = async(req,res)=> {
    const name = req.params.name;
        const products = await Product.find({name:name});
        return res.send(products);
}

