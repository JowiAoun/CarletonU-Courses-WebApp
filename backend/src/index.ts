// --- Imports
// Modules
import cors from "cors";
import { config } from 'dotenv';
import express, { Request, Response } from "express";
import mongoose from 'mongoose';

// --- App
const app = express(); // Create app object
config();  // Read .env file

// --- Database
const db = await mongoose.connect(process.env.MONGODB_URI!);  // Connect to MongoDB cluster

// --- Middleware
app.use(cors({ origin: "*" })); // Allow cross-origin requests
app.use(express.json()); // Parse JSON from requests

// --- Endpoints
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// --- Expose port
app.listen(5000);
