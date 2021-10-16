// A collection in MongoDB is the same as a table in MySQL

var MongoClient = require("mongodb").MongoClient;

// i am creating a collection so i will not write
// table name
url = "";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    console.log("Database Connected Successfully!");
    // Now Which Database I Have To Connect    
    var table = db.db("");

    // Now Which Table I Have To Connect
    db.createCollection("new_table", function(err_0, coll) {
        if(err_0) throw err_0;
        db.close()
    });
});