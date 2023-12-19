require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors');
const depart = require('./routes/departRoutes')
const db = require('./db/db');

app.use(cors());
app.use(express.json());
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

//Mongo connection
db.connectToDB();

//Services
app.use('/', depart);

// app.get('/', (req, res) => {
//     res.send('Hello server ...');
// });














// const uriAtlas ="mongodb+srv://medhabibbenyousef:Habib123@mern.keofgta.mongodb.net/societe?retryWrites=true&w=majority";
// mongoose.connect(uriAtlas).then(() =>
//     console.log("successful connexion DB"));













