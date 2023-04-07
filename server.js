const mongoose = require("mongoose");
const {DB_HOST} = require("./config")
const app = require("./app");
// 1NuxOB2h0rvbYrVJ

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000))
  .catch((error) => console.log(error.message));
