import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import getDest from "./controllers/dest-controller.js";
import swaggerMiddleware from "./middlewares/swg-midl.js";

const app = express();
dotenv.config();
connect();
app.use(cors());
app.use(bodyParser.json());

app.get("/destinations/:name", getDest);
app.use("/", ...swaggerMiddleware());

app.listen(3000);
