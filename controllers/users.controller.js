const model = require("../models/users.model");

function getUsers(req, res) {
  res.send(model);
}

function getUser(req, res) {
  const userId = Number(req.params.userId);
  console.log(userId);
  const user = model[userId];
  console.log(user);

  if (user) {
    res.status(200).json(user);
  } else {
    res.send(404).end();
  }
}

function postUser(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing user name",
    });
  }
  const newUser = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newUser);
  res.json(model);
}

module.exports = {
  getUsers,
  getUser,
  postUser,
};
