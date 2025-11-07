const express = require("express");
const { prisma } = require("./config/database");
require("dotenv").config();

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(express.json());

app.get("/",(req,res) => {
    return res.status(200).send("Backend Running")
})

app.use("/users",async (req,res) => {
    const data = await prisma.user.findMany()
    return res.status(200).json(data)
})

app.listen(PORT, () => {
    console.log(`✅ Server started at port ${PORT}`);
}); 
