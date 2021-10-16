var MongoClient = require("mongo").MongoClient;

var url  = "";
MongoClient.connect(url, function(err, con) {
    if (err) throw err;
    console.log("Connected Successfull");
    
    var db = con.db("mydb"); // Database
    var record = {usr_name : "SDWORLLD", role : "mentor"}; // Record

    // Select Collection And Store Record on That
    db.collection("prime_member").insertOne(record, function(err_0, res) {
        if(err_0) throw err_0;
        con.close();
        
    });
});

/*
insertOne() => Function Is Used To Store Record in database

Note:
    If you try to insert documents in a collection that do not exist,
    MongoDB will create the collection automatically.

=====> Here Structure <=======
mydb =>> is Database
prime_member =>> is Table/Collection
record =>> is Document/record

*/