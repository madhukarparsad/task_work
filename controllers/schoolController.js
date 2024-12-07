const db = require('../db');

// Add a new school
const addSchool = (req, res) => {
  const { name, address, city, state, contact, email, image } = req.body;

  const sql = 'INSERT INTO schools (name, address, city, state, contact, email, image) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [name, address, city, state, contact, email, image];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting school:', err.message);
      res.status(500).send('Failed to add school');
    } else {
      res.status(201).send('School added successfully');
    }
  });
};

// Get all schools
const getSchools = (req, res) => {
  const sql = 'SELECT * FROM schools';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching schools:', err.message);
      res.status(500).send('Failed to fetch schools');
    } else {
      res.status(200).json(results);
    }
  });
};

module.exports = { addSchool, getSchools };
