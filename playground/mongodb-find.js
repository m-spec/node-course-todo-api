const {MongoClient, ObjectID} = require('mongodb')

const obj = new ObjectID()
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect MongoDB server.')
  }
  console.log('Connected to MongoDB server.')

  // db.collection('Todos').find({
  //   _id: new ObjectID('59352c6ff2c1c411a0abba0f')
  // }).toArray().then((docs) => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('Unable to fetch todos.', err)
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`)
  // }, (err) => {
  //   console.log('Unable to fetch todos.', err)
  // })

  db.collection('Users').find({name: 'Markus'}).toArray().then((docs) => {
    console.log('Users')
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log('Unable to fetch users', err)
  })

  // db.close()
})
