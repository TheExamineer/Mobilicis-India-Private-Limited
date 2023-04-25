const express = require('express');
const router = express.Router();

router.get('/users/bmw-mercedes-income', async (req, res) => {
    try {
      const users = await User.find({
        income: { $lt: 5 },
        $or: [{ car: 'BMW' }, { car: 'Mercedes' }]
      });
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });
  