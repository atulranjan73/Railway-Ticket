const express = require('express');
const router = express.Router();
const { signup, Login, reset, getall } = require('../controller/AuthController');


router.post('/login', Login);   // Login (POST)
router.post('/signup', signup); // Signup (POST)
router.get('/getAll', getall);  // Get all users (GET)

// ✅ If you have a reset password route, define it properly
router.post('/reset', reset);  // Reset Password (POST)

module.exports = router;
