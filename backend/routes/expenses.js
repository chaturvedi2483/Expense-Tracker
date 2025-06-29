 const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/add', auth, (req, res) => {
  // Your expense logic here
  res.json({ message: 'Expense added for user ' + req.user.id });
});

module.exports = router;
