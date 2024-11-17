import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import 'dotenv/config'

const app = express();
const port = process.env.PORT;

await mongoose.connect(process.env.DB_CONNECT);
const db = mongoose.connection;

db.once("open", () => console.log("Connected to assignment database"));
db.on("error", (error) => console.error(error));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
