const Thought = require("../models/Thought");
const User = require("../models/User");

// Get all thoughts
const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving thoughts", details: err.message });
  }
};

// Get thought by ID
const getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) return res.status(404).json({ message: "Thought not found" });
    res.json(thought);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving thought", details: err.message });
  }
};

// Create a new thought
const createThought = async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    res.status(201).json(thought);
  } catch (err) {
    res.status(400).json({ error: "Error creating thought", details: err.message });
  }
};

// Update a thought
const updateThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!thought) return res.status(404).json({ message: "Thought not found" });
    res.json(thought);
  } catch (err) {
    res.status(500).json({ error: "Error updating thought", details: err.message });
  }
};

// Delete a thought
const deleteThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.id);
    if (!thought) return res.status(404).json({ message: "Thought not found" });
    res.json({ message: "Thought deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting thought", details: err.message });
  }
};

// Add a reaction
const addReaction = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } },
      { new: true }
    );
    if (!thought) return res.status(404).json({ message: "Thought not found" });
    res.json(thought);
  } catch (err) {
    res.status(500).json({ error: "Error adding reaction", details: err.message });
  }
};

// Remove a reaction
const removeReaction = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { new: true }
    );
    if (!thought) return res.status(404).json({ message: "Thought not found" });
    res.json(thought);
  } catch (err) {
    res.status(500).json({ error: "Error removing reaction", details: err.message });
  }
};

// Export all functions
module.exports = {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
};
