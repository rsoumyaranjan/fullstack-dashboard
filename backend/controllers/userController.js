const User = require('../models/User');

exports.getAllUsers = (req, res) => {
  User.getAllUsers((err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  User.getUserById(id, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results[0]);
    }
  });
};

exports.createUser = (req, res) => {
  const newUser = req.body;
  User.createUser(newUser, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json({ id: results.insertId, ...newUser });
    }
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  User.updateUser(id, updatedUser, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ id, ...updatedUser });
    }
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  User.deleteUser(id, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).send();
    }
  });
};
