//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//deconstruct object



//var obj = new ObjectID();
//console.log(obj);

//var user = {name: 'John', age: 25};
//var {name} = user; //destruct the user property;
//console.log(name);




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected to MongoDB server');
//db.collection('Todos').find({
//    _id: new ObjectID('5bf958642c5bb9d48b10eb0b')
//}).toArray().then((docs) => {
//    console.log('Todos');
//    console.log(JSON.stringify(docs, undefined, 2));
//}, (err) => {
//    console.log('Unable to fetch todos', err);
//});



//db.collection('Todos').find().count().then((count) => {
//    console.log(`Todos: ${count} `); // count how many ids by promise
//}, (err) => {
//    console.log('Unable to fetch todos', err);
//});

    db.collection('Users').find({
        name: 'Jen'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }) 
    
    //db.close();


});