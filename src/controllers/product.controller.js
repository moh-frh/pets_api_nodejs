const db = require("../config/database");

// ==> Method responsible for creating a new 'Product':

exports.createProduct = async (req, res) => {
  const { product_name, quantity, price } = req.body;
  const { rows } = await db.query(
    "INSERT INTO products (product_name, quantity, price) VALUES ($1, $2, $3)",
    [product_name, quantity, price]
  );
 
  
  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product: { product_name, quantity, price },
    },
  });
};

// ==> Method responsible for listing all 'Products':
exports.listAllProducts = async (req, res) => {
  const response = await db.query(
    "SELECT * FROM products ORDER BY product_name ASC"
  );
  res.status(200).send(response.rows);
};

// ==> Method responsible for selecting 'Product' by 'Id':
exports.findProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  const response = await db.query(
    "SELECT * FROM products WHERE productid = $1",
    [productId]
  );
  res.status(200).send(response.rows);
};

// ==> Method responsible for updating a 'Product' by 'Id':
exports.updateProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  const { product_name, quantity, price } = req.body;

  const response = await db.query(
    "UPDATE products SET product_name = $1, quantity = $2, price = $3 WHERE productId = $4",
    [product_name, quantity, price, productId]
  );

  res.status(200).send({ message: "Product Updated Successfully!" });
};

// ==> Method responsible for excluding a 'Product' by 'Id':
exports.deleteProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  await db.query("DELETE FROM products WHERE productId = $1", [productId]);

  res.status(200).send({ message: "Product deleted successfully!", productId });
};
