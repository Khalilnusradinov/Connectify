const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// ✅ Route to get all users & create a new user
router.route('/users').get(getUsers).post(createUser);

// ✅ Route to get, update, and delete a user by ID
router.route('/users/:id').get(getUserById).put(updateUser).delete(deleteUser);

// ✅ Route to add and remove friends
router.route('/users/:id/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
