var express = require('express')
var app = express()

// "database"
var pets = [
  { id: 1, type: 'cat', name: 'Neo' },
  { id: 2, type: 'dog', name: 'Bud' }
]

// list all the pets
app.get('/pets', function (req, res) {
  res.send(pets)
})

// add a new pet
app.post('/pets', function (req, res) {
  var newPet = {
    id: pets.length + 1,
    type: req.query.type,
    name: req.query.name
  }
  pets.push(newPet)
  res.send(newPet)
})

// get a pet
app.get('/pets/:id', function (req, res) {

  var id = req.params.id -1
  if (id >= pets.length) {
    return res.status(404).send('id not found')
  }

  res.send(pets[id])

})

// update a pet
app.put('/pets/:id', function (req, res) {

  var id = req.params.id -1
  if (id >= pets.length) {
    return res.status(404).send('id not found')
  }

  var pet = pets[id]
  if (req.query.type) pet.type = req.query.type
  if (req.query.name) pet.name = req.query.name
  res.send(pet)

})

app.delete('/pets/:id', function (req, res) {

  var id = req.params.id -1
  if (id >= pets.length) {
    return res.status(404).send('id not found')
  }

  // remove the pet object from the "database"
  pets.splice(id, 1)

  res.send(pets)

})

app.listen(3000, function () {
  console.log('Server listening at http://localhost:3000')
})

/*

LINKS
=====

* [req.params](http://expressjs.com/en/4x/api.html#req.params)
* [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)
* [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS)

*/
