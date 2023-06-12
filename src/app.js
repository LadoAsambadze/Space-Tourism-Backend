import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
connect();
app.use(cors());

app.listen(3000);
