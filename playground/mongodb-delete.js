//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//deconstruct object

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected to MongoDB server');

    //deleteMany
    //db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //    console.log(result);
    //});
    //deleteOne - delete only the first one
    //db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //    console.log(result);
    ////findOneAndDelete - delete specific first one
         db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result); });
    //db.close();


});