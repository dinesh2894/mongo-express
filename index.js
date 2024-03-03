const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");

main().then(() => {
    console.log("Connection Successful")
}).catch((err) => {
    console.log(err)
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


// root
app.get("/", (req, res) => {
    res.send("root working...");
});

// server listening
app.listen(port, () => {
    console.log(`Server is listening port ${port}`);
});