// --- Imports
// Modules
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import graphqlHTTP from "express-graphql";
// Files
import { schema, root } from "./graphql";

// --- Config
config(); // Read .env file

// --- Constants
const PORT = 5000; // Port for server
const MONGODB_URI: string = process.env.MONGODB_URI!; // Get URI from .env file
export const TERM_CODE = "202410";

// --- App
const app = express(); // Create app object

// --- Database
mongoose.connect(MONGODB_URI); // Connect to MongoDB cluster

// --- Middleware
app.use(cors({ origin: "*" })); // Allow cross-origin requests
app.use(express.json()); // Parse JSON from requests

// --- GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
  })
);

app.get("/test", async (req, res) => {
  res.send("Hello world!");
});

// --- Expose port
app.listen(PORT, () => {
  console.log("Server is up and running!");
});
