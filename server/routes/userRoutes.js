const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

// Protected routes
// These will be implemented in the next phase
router.get('/', protect, authorize('admin'), (req, res) => {
  res.status(200).json({
    success: true,
    message: 'User routes will be implemented in the next phase'
  });
});

module.exports = router;