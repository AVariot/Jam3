const express = require("express");
const cors = require("cors")
const app = express();
const PORT = 1080;

app.use(cors());

app.get("/user/", async (req, res) => {
});

app.post("/user/", async (req, res) => {
});

app.listen(PORT, () => {
    console.log("Server");
});
