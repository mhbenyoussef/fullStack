const mongoose = require('mongoose');

//Model schema    
const Schema = mongoose.Schema;
let departSchema = new Schema({
    id: Number,
    nom: String,
}, { versionKey: false });

let Depart = mongoose.model("departements", departSchema);


module.exports = Depart;