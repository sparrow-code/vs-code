/*
 Database > Collection > document
 Database > Table > Record
*/

/*
  to Connect the database
  To Create A Database
*/

var MongoClient = require("mongodb").MongoClient;

// URL Will Be
url = "protocol://url:port/database_name";

MongoClient.connect(url, function (err, db) {
    if(err) throw err;
    console.log("Database Connected Succesfully!");
    // Important: In MongoDB, a database is not created until it gets content!
    db.close();
});


/*
MongoDB waits until you have created a collection (table),
with at least one document (record) before 
it actually creates the database (and collection).
*/