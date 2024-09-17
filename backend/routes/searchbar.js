const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

// define search route for /search
router.get('/', searchController.search);

module.exports = router;
