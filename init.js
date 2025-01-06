const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "A",
    to: "B",
    msg: "Send me the marks",
    created_at: new Date(),
  },
  {
    from: "Anu",
    to: "Bibek",
    msg: "Send me the exam details please!",
    created_at: new Date(),
  },
  {
    from: "Anshu",
    to: "Yash",
    msg: "All the best for you test!",
    created_at: new Date(),
  },
  {
    from: "Priya",
    to: "Deepak",
    msg: "Let me cross check the files again",
    created_at: new Date(),
  },
  {
    from: "Asish",
    to: "Anup",
    msg: "Let me debug the code for you",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
