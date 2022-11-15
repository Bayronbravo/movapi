const express = require ("express");
const movieSchema = require ("../models/movie");

const router = express.Router();

//Crear pelicula
router.post("/movies", (req, res) => {
    const movie = movieSchema(req.body);
    movie
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({}));
});

//Obtener peliculas
router.get("/movies", (req, res) => {
    movieSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Obtener peliculas por id
router.get("/movies/:id", (req, res) => {
    const {} = req.params;
    movieSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//editar pelicula
router.put("/movies/:id", (req, res) => {
    const { id } = req.params;
    const { title, director, year, ratingIMDB, url} = req.body;
    movieSchema
        .updateOne({ _id: id },{ $set: { title, director, year, ratingIMDB, url } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//eliminar pelicula
router.delete("/movies/:id", (req, res) => {
    const { id } = req.params;
    movieSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router;