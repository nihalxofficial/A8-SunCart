import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

let client;
let db;

function getDb() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URI ?? "mongodb://placeholder");
    db = client.db("suncart_db");
  }
  return { db, client };
}

const { db: database, client: mongoClient } = getDb();

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(database, {
    client: mongoClient,
  }),
  baseURL: process.env.BETTER_AUTH_URL ?? "http://localhost:3000",
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  user: {
        deleteUser: { 
            enabled: true
        } 
    }
});