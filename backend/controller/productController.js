const Product = require("../models/Product");

// GET all products
async function handleGetProduct(req, res) {
    console.log("get");
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// GET single product
async function handleSingleProduct(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(404).json({ error: "Product not found" });
  }
}

// UPDATE product (admin only)
async function handleUpdateProduct(req, res) {
    console.log("REQ BODY =>", req.body);
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    delete req.body.price;

    // discount = percentage (force number)
    if (req.body.discount !== undefined) {
      req.body.discount = Number(req.body.discount);
    }

    Object.assign(product, req.body);

    await product.save(); // price auto recalculated in pre-save hook
    res.json(product);

  } catch (err) {
      console.error("ERROR >>>", err);
        res.status(500).json({ error: err.message });
  }
}

// DELETE product
async function handleDelProduct(req, res) {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// CREATE product (admin only)
async function handleCreateProduct(req, res) {
  try {
    
    delete req.body.price;

    const product = new Product({
      name: req.body.name,
      slug: req.body.slug,
      description: req.body.description,
      mrp: Number(req.body.mrp),
      discount: Number(req.body.discount) || 0,
      images: req.body.images,
      categories: req.body.categories,
      inventory: Number(req.body.inventory) || 0
    });

    await product.save(); // price auto calculated
    res.status(201).json(product);

  } catch (err) {
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
