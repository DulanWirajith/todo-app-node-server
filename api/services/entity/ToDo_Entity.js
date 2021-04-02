const mongoose = require("mongoose");

const ToDoEntity = mongoose.Schema({
  todo_name: {
    type: String,
    required: true,
    // unique: true,
  },
  // int_val1: {
  //   type: Number,
  //   required: true,
  //   unique: true,
  // },
  // mail_test: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  // },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("todoEntity", ToDoEntity);
