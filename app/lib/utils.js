import mongoose from "mongoose";
export const connectToDB = async () => {
  const connection = {};
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(
      "mongodb+srv://fardeenclan:fardeenclan@cluster0.nuidffa.mongodb.net/dashboard?retryWrites=true&w=majority"
    );
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new error();
  }
};
