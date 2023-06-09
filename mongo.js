const MongoClient = require("mongodb").MongoClient;
const url = 'mongodb+srv://AlFareed:Oyl1MxjZiH5FY96l@cluster0.urwkxxh.mongodb.net/product_test?retryWrites=true&w=majority';
const client  = new MongoClient(url);
const createProduct = async (req, res, next) => {
    const newProduct = {
        name : req.body.name,
        price : req.body.price
    };

    try {
        await client.connect();
        const db = client.db();
        const result = db.collection('products').insertOne(newProduct);
    } catch (error) {
        return res.json({message : "Could not store the data"})
    };
    // client.close();

    res.json(newProduct);
};

const getProducts = async (req, res, next) => {
    const client = new MongoClient(url);
    let products;
    try {
        await client.connect();
        const db = client.db();
         products= await db.collection('products').find().toArray();
    } catch (error) {
        return res.json({message:"Could not retrieve product"})
    };
    res.json(products)
};
client.close();

exports.createProduct = createProduct;
exports.getProducts = getProducts;

