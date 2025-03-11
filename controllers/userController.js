const User = require('../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate('friends').populate('thoughts'); // Populating friends and thoughts
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving users", details: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('friends').populate('thoughts');
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving user", details: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    // Validation: Ensure username & email are provided
    if (!username || !email) {
      return res.status(400).json({ error: "Username and Email are required" });
    }

    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Error creating user", details: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: "Error updating user", details: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting user", details: err.message });
  }
};

const addFriend = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const friend = await User.findById(req.params.friendId);

    if (!user || !friend) {
      return res.status(404).json({ error: "User or Friend not found" });
    }

    // Check if already friends
    if (user.friends.includes(req.params.friendId)) {
      return res.status(400).json({ error: "User is already friends with this person" });
    }

    user.friends.push(req.params.friendId);
    await user.save();

    res.status(200).json({ message: "Friend added successfully", user });
  } catch (err) {
    res.status(500).json({ error: "Error adding friend", details: err.message });
  }
};

const removeFriend = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const friend = await User.findById(req.params.friendId);

    if (!user || !friend) {
      return res.status(404).json({ error: "User or Friend not found" });
    }

    // Remove friend if they exist
    user.friends = user.friends.filter(friendId => friendId.toString() !== req.params.friendId);
    await user.save();

    res.status(200).json({ message: "Friend removed successfully", user });
  } catch (err) {
    res.status(500).json({ error: "Error removing friend", details: err.message });
  }
};

// Export all functions!
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
};