import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connect from "./database/mongodb.js";
import TransactionsApi from "./routes/TransactionsApi.js";
import AuthApi from "./routes/AuthApi.js";

const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/transaction", TransactionsApi);
app.use("/auth", AuthApi);

await connect();

app.listen(PORT, () => {
  console.log("server is running at http://localhost:4000");
});
