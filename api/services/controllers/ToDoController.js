const ToDo = require("../database/ToDo");

// add todo

exports.addToDo = (req, res, next) => {
  ToDo.save(req.body)
    .then((result) => {
      console.log("ToDo Addded");
      console.log(result);
      res.status(200).json({
        messege: "ToDo Added!",
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        messege: "ToDo Adding Failed",
      });
    });
};

// todo update

exports.todoUpdate = (req, res, next) => {
  ToDo.update(
    {
      _id: req.body._id,
    },
    { $set: req.body }
  )
    .then((result) => {
      console.log("ToDo Updated");
      res.status(200).json({
        messege: "ToDo Updated!",
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        messege: "ToDo Update Failed!",
      });
    });
};

// get one todo
exports.getToDo = (req, res, next) => {
  console.log(req.params.test_no);
  ToDo.getOne({
    test_no: req.params.test_no,
  })
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Get ToDo Failed!",
      });
    });
};

// get all todos

exports.getToDos = (req, res, next) => {
  ToDo.getAll({})
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Get ToDos Failed!",
      });
    });
};

// remove todo

exports.removeToDo = (req, res, next) => {
  ToDo.remove({
    _id: req.body._id,
  })
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Get ToDos Failed!",
      });
    });
};
