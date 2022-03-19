import { config } from "dotenv";
config();

console.log(process.env.MONGODB_URI)
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/spotifydb";
