const express = require ('express');
const mongoose  = require("mongoose");
require("dotenv").config();
const movieRoutes = require("./routes/movie");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', movieRoutes);


//rutas
app.get('/', (req, res) => {
    res.send ("Bienvenido a la API");
});

//coneccion a mongobd
mongoose
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log("Conected"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('server running on port', port));