import { sql } from "../config/db.js";

export const getProducts = async (req, res) => {
  try {
    const products = await sql`
        SELECT id, name, price, image, description
        FROM products
        ORDER BY created_at DESC
    `;

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error in getProducts function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const { name, image, price, description } = req.body;
  if (!image || !price || !name) {
    return res
      .status(400)
      .json({ success: false, message: "Name, image, and price are required" });
  }

  try {
    const newProduct = await sql`
      INSERT INTO products (name, price, image, description)
      VALUES (${name}, ${price}, ${image}, ${description})
      RETURNING *
    `;

    res.status(201).json({ success: true, data: newProduct[0] });
  } catch (error) {
    console.log("Error in createProduct function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await sql`
      SELECT id, name, price, image, description
      FROM products
      WHERE id = ${id}
    `;

    res.status(200).json({ success: true, data: product[0] });
  } catch (error) {
    console.log("Error in getProduct function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, image, price, description } = req.body;

  try {
    const updateProduct = await sql`
      UPDATE products
      SET 
        name = ${name}, 
        price = ${price}, 
        image = ${image},
        description = ${description}
      WHERE id = ${id}
      RETURNING *
    `;

    if (updateProduct.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({ success: true, data: updateProduct[0] });
  } catch (error) {
    console.log("Error in updateProduct function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await sql`
    DELETE FROM products WHERE id=${id} RETURNING *
  `;

    if (deletedProduct.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({ success: true, data: deletedProduct[0] });
  } catch (error) {
    console.log("Error in deleteProduct function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
