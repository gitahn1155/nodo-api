//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//deconstruct object

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bf95961bae0ead4f8d5c64d') //(filter, update, options, callback)  
    }, {
        $set: {
            name: 'Jennifer'
            
        },
        $inc: { //increment age by 1
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result)=> {
            console.log(result);
    });
    //db.close();


});