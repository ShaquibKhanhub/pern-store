import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/create", createProduct);
router.put("/update/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
