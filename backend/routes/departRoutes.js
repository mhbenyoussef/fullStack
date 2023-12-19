const express = require('express');
const router = express.Router();
const depart = require("../controllers/departControllers");

//Ajouter departements
router.post("/add", depart.addDeparts);

//Afficher departements
router.get("/departements", depart.getDeparts);

//Modifier un departement
router.put("/update/:id", depart.updateDepart);

//Supprimer un departement
router.delete("/delete/:id", depart.deleteDepart);

module.exports = router;