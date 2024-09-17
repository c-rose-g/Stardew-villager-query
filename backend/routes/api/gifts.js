const express = require("express");
const router = express.Router();
const { Gift, Gift_Building, Gift_Category, Gift_Location, Gift_Season, Villager_Gift} = require('../../db/models')
const { op } = require("sequelize");
// *** Search gifts by building, category, location, season, and villager

router.get('/all', async (req, res) =>{
  /*
  return all gifts
   */
  const gifts = await Gift.findAll()
  res.status(200).send({Gift:gifts})
})

module.exports = router;
