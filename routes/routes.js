const express = require('express');
const router = express.Router();
const fs = require("fs");


// Recibe los datos correspondientes a una canción y la agrega al repertorio.
router.post('/canciones', (req, res) => {
    const cancion = req.body;
    console.log(cancion)
    const canciones = JSON.parse(fs.readFileSync("./canciones.json"))
    canciones.push(cancion);
    fs.writeFileSync("./canciones.json", JSON.stringify(canciones));
    res.send("Cancion agregada correctamente");

});

// Devuelve un html
router.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

// Devuelve un JSON con las canciones registradas en el repertorio
router.get('/canciones', (req, res) => {
    canciones = JSON.parse(fs.readFileSync("canciones.json"))
    res.json(canciones)
});

// Recibe los datos de una canción que se desea editar y la actualiza manipulando el JSON local.
router.put('/canciones/:id', (req, res) => {
    const { id } = req.params
    const cancion = req.body
    const canciones = JSON.parse(fs.readFileSync("./canciones.json"))
    const index = canciones.findIndex(p => p.id == id)
    canciones[index] = cancion
    fs.writeFileSync("./canciones.json", JSON.stringify(canciones))
    res.send("Canción modificada con éxito")
});

// Recibe por queryString el id de una canción y la elimina del repertorio.
router.delete('/canciones/:id', (req, res) => {
    const { id } = req.params
    const canciones = JSON.parse(fs.readFileSync("./canciones.json"))
    const index = canciones.findIndex(p => p.id == id)
    canciones.splice(index, 1)
    fs.writeFileSync("./canciones.json", JSON.stringify(canciones))
    res.send("Canción eliminada con éxito")
});

module.exports = router;
