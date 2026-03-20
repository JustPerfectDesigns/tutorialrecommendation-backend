import express from "express" // first we import express

const router = express.Router() // then we create a router using express.Router()

// then we define a route for user registration
router.post("/register", async (req, res) => {
    res.send("Register");
});

// then we define another route for user login
router.post("/login", async (req, res) => {
    res.send("Login");
});

export default router;