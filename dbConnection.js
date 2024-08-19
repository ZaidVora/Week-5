const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ztech003:WEaDJMMuvjGg23GU@cluster0.jcssn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

client.connect();

module.exports = client;