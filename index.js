var client = require('mongodb').MongoClient;

var dbConUrl = process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017';

console.log('db server: ', dbConUrl);

client.connect(dbConUrl, {}, funtion(err, db) {
   console.log("error: ", err);
   db.listCollections().toArray(function(err, collections) {
      console.log("error: ", err);
      console.log("collections: ", colelctions);
      db.close()
   });
});
