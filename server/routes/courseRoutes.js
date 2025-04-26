const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

// Protected routes
// These will be implemented in the next phase
router.get('/', protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Course routes will be implemented in the next phase'
  });
});

module.exports = router;