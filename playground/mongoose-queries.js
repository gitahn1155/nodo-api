const {MongoClient, ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c0144fd58de7d0fe27866b9';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

 Todo.findById('5c0144fd58de7d0fe27866b9').then((todo) => {
   if (!todo) {
     return console.log('Id not found');
   }
   console.log('Todo By Id', todo);
 }).catch((e) => console.log(e));



