const Product = require("../models/Product")

async function handleGetProduct(req , res) {
    try{
        const product = await Product.find();
        res.json(product);
    } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function handleSingleProduct(req,res){
    try{
        const product = await Product.findById(req.params.id);
        res.json(product);

    }catch(err){
        return res.status(404).json({error: "product not found"})
    }
}
async function handleUpdateProduct(req,res){
    try{
        const product = await Product.findByIdAndUpdate(req.params.id , req.body, { new: true , runValidators: true })
            res.json(product);
    }catch(err){
       res.status(500).json({ error: err.message });
    }
}
async function handleDelProduct(req, res){
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product deleted" });
    }catch (err) {
        res.status(500).json({ error: err.message });
  }
}
async function handleCreateProduct(req,res){
    const { title, description, price, images, inventory } = req.body;
    try{
        const newProduct = await Product.create({
            title,
            description,
            price,
            images,
            inventory,
            createdAt: Date.now()
        });
        res.status(201).json(newProduct);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
  handleGetProduct,
  handleSingleProduct,
  handleUpdateProduct,
  handleDelProduct,
  handleCreateProduct
};