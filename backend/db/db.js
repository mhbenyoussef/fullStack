require('dotenv').config();
const mongoose = require('mongoose');

exports.connectToDB = async()=>{
    try {
        await mongoose.connect(process.env.URI_ATLAS)
        console.log("successful connexion DB");
        
    } catch (error) {
        console.error("connexion DB error:", error);
    }
}

// mongoose.connect(process.env.URI_ATLAS).then(() =>
//     console.log("successful connexion DB"));
