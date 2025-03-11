📌 **Connectify - Social Network API**
A NoSQL-based social network API that allows users to share thoughts, react to friends' thoughts, and manage a friend list. Built using Node.js, Express.js, MongoDB, and Mongoose.

🚀 **Table of Contents**
Description
Installation
Usage
API Routes
Technologies Used
Contributing
Questions

📖 Description
Connectify is a backend API for a social network application. It allows users to:

Create, update, and delete accounts.
Add and remove friends.
Create thoughts (like posts).
React to thoughts (like comments).
This project uses a NoSQL database (MongoDB) to efficiently manage large amounts of unstructured data.

🛠 **Installation**
**Clone the repository:**
git clone https://github.com/your-username/Connectify.git

**Navigate to the project directory:**
cd Connectify

**Install dependencies:**
npm install

**Start MongoDB** (Ensure MongoDB is installed and running):
mongod

**Start the server:**
node server.js
or for development (auto-restarts on changes):
npx nodemon server.js

🎯 **Usage**
Start the server and use Insomnia (or Postman) to test the API.
Use the following API routes to interact with the database.
🔗 API Routes
User Routes
Method	Endpoint	Description
GET	/api/users	Get all users
GET	/api/users/:id	Get a user by ID
POST	/api/users	Create a new user
PUT	/api/users/:id	Update a user by ID
DELETE	/api/users/:id	Delete a user by ID
POST	/api/users/:id/friends/:friendId	Add a friend
DELETE	/api/users/:id/friends/:friendId	Remove a friend
Thought Routes
Method	Endpoint	Description
GET	/api/thoughts	Get all thoughts
GET	/api/thoughts/:id	Get a thought by ID
POST	/api/thoughts	Create a new thought
PUT	/api/thoughts/:id	Update a thought by ID
DELETE	/api/thoughts/:id	Delete a thought by ID
POST	/api/thoughts/:thoughtId/reactions	Add a reaction
DELETE	/api/thoughts/:thoughtId/reactions/:reactionId	Remove a reaction
🛠 Technologies Used
Node.js - JavaScript runtime environment.
Express.js - Framework for handling routes and API requests.
MongoDB - NoSQL database for storing user and thought data.
Mongoose - ODM (Object Data Modeling) library for MongoDB.
dotenv - To manage environment variables.
nodemon - For auto-reloading during development.

🎥 **Video**
📌 A walkthrough video demonstrating the API functionality is available here: https://youtu.be/MNnurUwl0qk

🤝 **Contributing**
Contributions are welcome! Follow these steps to contribute:

❓ **Questions**
If you have any questions, feel free to contact me:

**GitHub:** (https://github.com/Khalilnusradinov)
**Email:** nusradinov04@icloud.com
