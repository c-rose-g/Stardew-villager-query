const express = require("express");
const router = express.Router();
const { op } = require("sequelize");

const { gift_building, gift_category, gift_location, gift_season} = require('../../db/models')
// *** Search gifts by building, category, location, season, and villager



module.exports = router;
