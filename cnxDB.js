var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb+srv://mangeonsensemble:projet_pim_estiam@cluster0.svlza.mongodb.net/test",

  async function (err, client) {
    if (err) throw err;
    var db = client.db("test");

    var users = db.collection("test");

    const count = await users.countDocuments({});

    console.log(`Nombre de documents : ${count}`);

    db.collection("test")
      .find({})
      .toArray(function (err, docs) {
        if (err) throw err;
        else console.log(docs);
        client.close();
      });
  }
);
