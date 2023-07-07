const { default: client } = require("./db_config");


const db = client.db("taskDB");
const users = async (req,res) =>{
    const usersCollection = db.collection("users")

    if (req.method === "GET"){
        res.send({channelName: "cluster0"});
    }
    else if(req.method === "POST"){
        const user = req.body;
        const result = await usersCollection.insertOne(user);
        res.status(201).send(result)
    }
}

export default users;