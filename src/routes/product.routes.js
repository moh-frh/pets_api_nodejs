/**
 * File: src/routes/product.routes.js
 * Description: file responsible for the api routes related to the 'Product' class.
 */

const router = require("express-promise-router")();
const productController = require("../controllers/product.controller");
const petController = require("../controllers/pet.controller");

// =====> Defining CRUD routes - 'Product': ===================================================================================

// ==> creating a new 'Product': (POST): localhost:3000/api/products
router.post("/products", productController.createProduct);
// ==> listing all the 'Products': (GET): localhost:3000/api/products
router.get("/products", productController.listAllProducts);
// ==> selecting 'Product' by 'Id': (GET): localhost:3000/api/products/:id
router.get("/products/:id", productController.findProductById);
// ==> updating 'Product' by 'Id': (PUT): localhost: 3000/api/products/:id
router.put("/products/:id", productController.updateProductById);
// ==> deleting 'Product' by 'Id': (DELETE): localhost:3000/api/products/:id
router.delete("/products/:id", productController.deleteProductById);

// =====> Defining CRUD routes - 'Pets': ===================================================================================
// ==> creating a new 'Product': (POST): localhost:3000/api/pets
router.post("/pets", petController.createPet);
// ==> listing all the 'Pets': (GET): localhost:3000/api/Pets
router.get("/pets", petController.listAllpets);
// ==> selecting 'Pet' by 'Id': (GET): localhost:3000/api/Pets/:id
router.get("/pets/:id", petController.findPetById);
// ==> updating 'Pet' by 'Id': (PUT): localhost: 3000/api/Pets/:id
router.put("/pets/:id", petController.updatePetById);
// ==> deleting 'Pet' by 'Id': (DELETE): localhost:3000/api/Pets/:id
router.delete("/pets/:id", petController.deletePetById);

module.exports = router;
