const db = require("../config/database");

// ==> Method responsible for creating a new 'Product':

exports.createPet = async (req, res) => {
  const { name, age } = req.body;
  const { rows } = await db.query(
    "INSERT INTO pets (name, age) VALUES ($1, $2)",
    [name, age]
  );

  res.status(201).send({
    message: "Pets added successfully!",
    body: {
      pet: { name, age },
    },
  });
};

// ==> Method responsible for listing all 'pets':
exports.listAllpets = async (req, res) => {
  const response = await db.query("SELECT * FROM pets ORDER BY name ASC");
  res.status(200).send(response.rows);
};

// ==> Method responsible for selecting 'Pet' by 'Id':
exports.findPetById = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await db.query("SELECT * FROM pets WHERE id = $1", [id]);
  res.status(200).send(response.rows);
};

// ==> Method responsible for updating a 'Pet' by 'Id':
exports.updatePetById = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age } = req.body;

  const response = await db.query(
    "UPDATE pets SET name = $1, age = $2 WHERE id = $3",
    [name, age, id]
  );

  res.status(200).send({ message: "Pet Updated Successfully!" });
};

// ==> Method responsible for excluding a 'Pet' by 'Id':
exports.deletePetById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query("DELETE FROM pets WHERE id = $1", [id]);

  res.status(200).send({ message: "Pets deleted successfully!", id });
};
