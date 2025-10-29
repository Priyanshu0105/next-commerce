const {handleCreateProduct , handleGetProduct , handleDelProduct ,handleUpdateProduct , handleSingleProduct } = require("../controller/productController")
const verifyAdmin = require("../middlewares/adminMiddleware")
const verifyAuth = require("../middlewares/authMiddleware")
const express = require("express");

const router = express.Router();
router.post("/",verifyAdmin,verifyAuth,handleCreateProduct);
router.get("/",handleGetProduct);
router.get("/:id", handleSingleProduct);
router.put("/:id",verifyAuth,verifyAdmin, handleUpdateProduct);
router.delete("/:id",verifyAuth,verifyAdmin, handleDelProduct);

module.exports = router;