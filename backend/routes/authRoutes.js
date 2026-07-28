const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser); // <-- Add this line

module.exports = router;