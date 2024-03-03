const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");

// models
const Chat = require("./models/chat.js");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

// ------------- Mongo connection
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

// Index Routes
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render('index.ejs', {chats});
})

// server listening
app.listen(port, () => {
    console.log(`Server is listening port ${port}`);
});