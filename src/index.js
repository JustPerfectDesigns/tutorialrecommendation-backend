import express from "express";
import dotenv from "dotenv";
dotenv.config();

// Let's create a basic express app
const app = express();

// Then we define a port
const PORT = process.env.PORT || 3000;

// Finally, we start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});