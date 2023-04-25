const express = require('express');
const router = express.Router();

// Define route for GET request
router.get('/', (req, res) => {
  res.send('Hello, users!');
});

// Define route for POST request
router.post('/make the chart', (req, res) => {
  res.send('User created!');
});

module.exports = router;
