import mongoose from "mongoose";

async function connect() {
  await mongoose.connect(
    "mongodb+srv://FerroFalcon:jd7999819965@ferro-cluster.epmfm1r.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("MongoDB connection is successful");
}

export default connect;
