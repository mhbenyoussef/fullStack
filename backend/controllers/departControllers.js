const Depart = require('../models/departModel');

//Afficher departements
exports.getDeparts = async(req, res)=>{
    Depart.find()
        .then(
            (result) => {
                res.send(result);
            })
}

//Ajouter departements
exports.addDeparts = async (req, res) => {
    let newDepart = new Depart(req.body);
    try {
        await newDepart.save();
        res.status(200).send({
            message: `${newDepart.nom} is succussffully added`
        });
    }
    catch (err) {
        res.status(400).send({ error: `error adding newDepart ${err}` })
    }
}

//Supprimer un departement
exports.deleteDepart = async (req, res) => {
    try {
        const depart = await Depart.findByIdAndDelete(req.params.id);
        res.status(200).send({
            message: `${depart.nom} is succussffully deleted` });
    }
    catch (err) {
        res.status(400).send({
            error: `error deleting department ${err}`
        })
    }
}

//Modifier un departement
exports.updateDepart = async (req, res) => {
    try {
        const depart = await Depart.findByIdAndUpdate(req.params.id, req.body);
        await depart.save();
        res.status(200).send({
            message: `${depart.nom} is succussffully
    updated` });
    }
    catch (err) {
        res.status(400).send({
            error: `error updating department ${err}`
        })
    }
}