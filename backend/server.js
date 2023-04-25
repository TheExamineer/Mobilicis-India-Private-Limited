// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://user1:1234@cluster0.aacymnc.mongodb.net/?retryWrites=true&w=majority";

// Import routes
const usersRouter = require('./routes/users');

// Create Express app
const app = express();
const port = process.env.PORT || 3001;

// Set up middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

// Define routes
app.use('/users', usersRouter);

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
