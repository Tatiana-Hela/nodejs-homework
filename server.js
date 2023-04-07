const mongoose = require("mongoose");

const app = require("./app");
// 1NuxOB2h0rvbYrVJ

const DB_HOST =
  "mongodb+srv://Tetiana:1NuxOB2h0rvbYrVJ@cluster0.uocrh1w.mongodb.net/contacts_store?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000))
  .catch((error) => console.log(error.message));
