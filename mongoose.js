const mongoose = require('mongoose');

const Product = require('./models/product');
mongoose.connect('mongodb+srv://AlFareed:Oyl1MxjZiH5FY96l@cluster0.urwkxxh.mongodb.net/product_test?retryWrites=true&w=majority')
.then(()=>{
    console.log('Connected to database');
    
}).catch(()=>{
    console.log('Connection failed');
})
;

 
const createProduct = async (req,res,next) =>{
    const createdProduct = new Product({
        name :req.body.name,
        price : req.body.price
    });
    const result =await createdProduct.save();
    res.json(result);
}

const getProduct = async(req,res,next)=>{
    const product =await Product.find().exec();
    res.json(product);
}
exports.createProduct = createProduct;
exports.getProduct = getProduct;