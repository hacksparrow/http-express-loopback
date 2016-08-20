module.exports = function (app) {

  var Pet = app.models.Pet

  var pets = [
    {
      "name": "Neo",
      "type": "cat"
    },
    {
      "name": "Bud",
      "type": "dog"
    }
  ]

  pets.forEach(function (pet) {
    Pet.create(pet, function (err, instance) {
      if (err) return console.log(err)
      console.log('CREATED:')
      console.log(instance)
    })
  })

}
