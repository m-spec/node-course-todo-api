const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result)
// })

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('594392b4cfc1f839e6a221e0').then((todo) => {
  console.log(todo)
})
