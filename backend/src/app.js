import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";
// import { connect } from "node:http2";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: true}));
app.use("/api/v1/users", userRoutes);

const start = async () => {
    const connectionDb = await mongoose.connect("mongodb://rharshal398_db_user:rharshal398_db_Harshal@ac-hbptifb-shard-00-00.okn8uwo.mongodb.net:27017,ac-hbptifb-shard-00-01.okn8uwo.mongodb.net:27017,ac-hbptifb-shard-00-02.okn8uwo.mongodb.net:27017/?ssl=true&replicaSet=atlas-suwsz7-shard-0&authSource=admin&appName=Cluster0");
    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("LISTENING ON PORT 8000");
    });
};

start();