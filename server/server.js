import express from "express";
import mongoose from "mongoose";

const PORT = 4000;
const app = express();

await mongoose.connect(
  "mongodb+srv://FerroFalcon:jd7999819965@ferro-cluster.epmfm1r.mongodb.net/?retryWrites=true&w=majority"
);
console.log("MongoDB connection is successful");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("server is running at http://localhost:4000");
});
