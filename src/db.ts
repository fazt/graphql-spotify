import mongoose from "mongoose";
import { MONGODB_URI } from "./config";

export const connectionDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.error(error);
  }
};

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${MONGODB_URI}`);
})