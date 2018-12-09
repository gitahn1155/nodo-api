const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
//Delete multiple record
//Todo.remove({}).then((result) => {
//    console.log(result);
//});

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5c07dda20c4a6623428f5aa0').then((todo) => {
    console.log(todo);
});