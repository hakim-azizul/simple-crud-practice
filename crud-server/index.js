import express from "express";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

// middleware's
app.use(cors()); // for data share between ports
app.use(express.json()); // to parse data

console.log(process.env.DB_USER);

const client = new MongoClient(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-vwgi4dy-shard-00-00.yleslu4.mongodb.net:27017,ac-vwgi4dy-shard-00-01.yleslu4.mongodb.net:27017,ac-vwgi4dy-shard-00-02.yleslu4.mongodb.net:27017/?ssl=true&replicaSet=atlas-ydwn0o-shard-0&authSource=admin`,
);

export const connectToMongoDB = async () => {
  try {
    await client.connect();
    console.log("MongoDB connected successfully!");
    return client;
  } catch (err) {
    console.log(err);
  }
};
const connectedClient = await connectToMongoDB();
const database = connectedClient.db("simpleCrudDB");
const users = database.collection("users");

app.get("/", (req, res) => {
  res.send("CRUD Operation Server Is started succecfully");
});

app.get("/users", async (req, res) => {
  const cursor = users.find({});
  const allUsers = await cursor.toArray();
  res.send(allUsers);
});

app.get('/users/:id', async(req, res) =>{
    const id = req.params.id;
    const query = {_id: new ObjectId(id)}
    const result = await users.findOne(query);
    res.send(result);
});

app.post("/users", async (req, res) => {
  const newUser = req.body;
  const result = await users.insertOne(newUser);
  res.send(result);

  console.log("adding new user:", newUser);
});

app.delete('/users/:id', async(req, res)=>{
  const {id} = req.params;
  const query = {_id: new ObjectId(id) };
  const result = await users.deleteOne(query)
  res.send(result);
})

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
