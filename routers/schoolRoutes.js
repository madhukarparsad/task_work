const express = require('express');
const { addSchool, getSchools } = require('../controllers/schoolController');

const router = express.Router();

// Route to add a school
router.post('/add', addSchool);

// Route to get all schools
router.get('/list', getSchools);

module.exports = router;
