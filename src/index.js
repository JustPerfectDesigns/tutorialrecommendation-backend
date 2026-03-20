import express from "express";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/authRoutes.js";

// Let's create a basic express app
const app = express();

// Then we define a port
const PORT = process.env.PORT || 3000;

// Now, let's add a route
app.use("/api/auth", authRoutes);

// Finally, we start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});