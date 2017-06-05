const {MongoClient, ObjectID} = require('mongodb')

const obj = new ObjectID()
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect MongoDB server.')
  }
  console.log('Connected to MongoDB server.')

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result)
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result)
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result)
  // })

  // db.collection('Users').deleteMany({name: 'Markus'}).then((result) => {
  //   console.log(result)
  // })

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('59352c6ff2c1c411a0abba0f')
  }).then((result) => {
    console.log(result)
  })


  // db.close()
})
