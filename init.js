const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main().then(() => {
    console.log("Connection Successful")
}).catch((err) => {
    console.log(err)
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats = [{
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
}, {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
}, {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
}, {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
},
];


// chat1.save().then(r => {
//     console.log(r)
// }).catch((err) => {
//     console.log(err)
// });

Chat.insertMany(allChats);