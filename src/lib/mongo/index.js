const express = require('express');
const cors = require('cors');
require("dotenv").config();
const app = express();
const morgan = require('morgan')
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// middleware
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.send("12 server Is Running")
})

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.a5mfktt.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const usersCollection = client.db("taskDB").collection("users")

    app.post("/users", async(req,res)=>{
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result)
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`From 12 server running port is ${port}`)
})








// import { MongoClient } from "mongodb";

// const URI = process.env.MONGODB_URI
// const options = {}

// if(!URI) throw new Error("Please add your Mongo URI to env.local")

// let client = new MongoClient(URI, options);
// let clientPromise

// if(process.env.NODE_ENV !== "production"){
//     if(!global._mongoClientPromise){
//         global._mongoClientPromise = client.connect()
//     }
//     clientPromise = global._mongoClientPromise
// }
// else{
//     clientPromise = client.connect()
// }

// export default clientPromise;