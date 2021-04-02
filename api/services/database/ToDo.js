const ToDo_Entity = require("../entity/ToDo_Entity");
const mongoose = require("mongoose");

exports.save = (todo_object) => {
  return new Promise((resolve, reject) => {
    ToDo_Entity.create(todo_object)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.search = (todo_no) => {
  return new Promise((resolve, reject) => {
    ToDo_Entity.findOne(todo_no)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.getOne = (query1) => {
  return new Promise((resolve, reject) => {
    ToDo_Entity.findOne(query1)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    ToDo_Entity.find({})
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.update = (query1, todo_object) => {
  return new Promise((resolve, reject) => {
    ToDo_Entity.findOneAndUpdate(query1, todo_object)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.remove = (query1) => {
  return new Promise((resolve, reject) => {
    ToDo_Entity.remove(query1)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
