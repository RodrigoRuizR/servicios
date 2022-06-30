const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3010;

const app = express();

app.use(bodyParser.json());

// Data
const animals = [
    {id: 1, nameAnimal: 'Perro'},
    {id: 2, nameAnimal: 'Gato'},
    {id: 3, nameAnimal: 'Tortuga'},
    {id: 4, nameAnimal: 'Araña'},
    {id: 5, nameAnimal: 'Perico'},
    {id: 6, nameAnimal: 'Jirafa'},
    {id: 7, nameAnimal: 'Leon'},
    {id: 8, nameAnimal: 'Venado'},
    {id: 9, nameAnimal: 'Lobo'},
    {id: 10, nameAnimal: 'Coyote'},
]

app.get('/', (req, res) => {
    res.send('API de Node JS');
});

app.get('/api/animals', (req, res) => {
    res.send(animals);
});

app.get('/api/:id', (req, res) => {

    const { id } = req.params;
    // console.log(id)
    // console.log(animals[id - 1]);
    const animal = animals[id - 1];
    if (!animal) return res.status(404).send('Animal no encontrado');
    else res.send(animal);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
