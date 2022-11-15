const express = require ('express');
const mongoose  = require("mongoose");
require("dotenv").config();
const movieRoutes = require("./routes/movie");

const app = express();
const port = process.env.PORT || 9000;
console.log("====================");
console.log("Database_URL", process.env.MONGODB_URI);
console.log("====================");
//coneccion a mongobd
mongoose
    mongoose.connect("mongodb+srv://bayron:clave1234@cluster0.guapwn5.mongodb.net/?retryWrites=true&w=majority")
    .then(()=> console.log("Conected"))
    .catch((error) => console.error(error));

//middleware
app.use(express.json());
app.use('/api', movieRoutes);




app.listen(port, () => console.log('server running on port', port));