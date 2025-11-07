const express = require("express");
require("dotenv").config();

const PORT = process.env.SERVER_PORT;
const app = express();

app.use(express.json());

app.get("/",(req,res) => {
    return res.status(200).send("Backend Running")
})

app.listen(PORT, () => {
    console.log(`✅ Server started at port ${PORT}`);
});
