const db = require('../config/db');

const User = {
  getAllUsers: (callback) => {
    db.query('SELECT * FROM users', callback);
  },

  getUserById: (id, callback) => {
    db.query('SELECT * FROM users WHERE id = ?', [id], callback);
  },

  createUser: (user, callback) => {
    const { name, dob, contact, email, description } = user;
    db.query(
      'INSERT INTO users (name, dob, contact, email, description) VALUES (?, ?, ?, ?, ?)',
      [name, dob, contact, email, description],
      callback
    );
  },

  updateUser: (id, user, callback) => {
    const { name, dob, contact, email, description } = user;
    db.query(
      'UPDATE users SET name = ?, dob = ?, contact = ?, email = ?, description = ? WHERE id = ?',
      [name, dob, contact, email, description, id],
      callback
    );
  },

  deleteUser: (id, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [id], callback);
  },
};

module.exports = User;
