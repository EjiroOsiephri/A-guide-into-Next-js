import mongoose from "mongoose";

export async function connect() {
  mongoose.connect(process.env.mongo_url!);
  const connection = mongoose.connection;
  connection.on("connected", () => {
    console.log("mongo db connected succesfully");
  });
  connection.on("error", (err) => {
    console.log("Error found" + err);
    process.exit();
  });
}
