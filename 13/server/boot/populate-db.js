module.exports = function (app) {

  var Pet = app.models.Pet
  var User = app.models.User

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

  var users = [
    {
      "username": "hacksparrow",
      "email": "captain@hacksparrow.com",
      "password": "hello"
    },
    {
      "username": "neo",
      "email": "neo@hacksparrow.com",
      "password": "meow"
    }
  ]

  pets.forEach(function (pet) {
    Pet.create(pet, function (err, instance) {
      if (err) return console.log(err)
      console.log('Added:')
      console.log(instance)
    })
  })

  users.forEach(function (user) {
    User.create(user, function (err, instance) {
      if (err) return console.log(err)
      console.log('Added:')
      console.log(instance)
    })
  })

}
