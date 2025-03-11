const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routes
const userRoutes = require('./routes/api/userRoutes');
const thoughtRoutes = require('./routes/api/thoughtRoutes'); // ✅ Added Thought Routes

// Use Routes
app.use('/api/users', userRoutes); // ✅ Correct base path for users
app.use('/api/thoughts', thoughtRoutes); // ✅ Correct base path for thoughts

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('🌍 Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Error Handling for MongoDB Disconnection
mongoose.connection.on('error', err => {
  console.error('❌ MongoDB disconnected:', err);
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
