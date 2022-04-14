const mongoose = require("mongoose");

const connectionDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectionDB;
