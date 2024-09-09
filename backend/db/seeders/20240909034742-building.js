'use strict';

const { QueryTypes, QueryInterface } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 1: Pelican TOWN
     * 2: Cindersap Forest
     * 3: Beach
     * 4: Mountain
     * 5: Witch's Swamp
     * 6: Farm
     * 7: Desert
     * 8: Ginger Island
     * 9: Sewers
     * 
     * buildings
     * 1: blacksmith
     * 2: community center
     * 3: medical clinic
     * 4: jojamart
     * 5: museum
     * 6: pierres
     * 7:saloon
     * 8:sewers
     * 9: marnies
     * 10: ruined house
     * 11: secret woods
     * 12: traveling cart
     * 13: wizard's tower
     * 14:fish shop
     * 15:adventures guild
     * 16:carpenters shop
     * 17: mines
     * 18: railraod
     * 19: spa
     * 20: quarry
     * 21: quarry mine
     * 22: witchs hut
     * 23: casino
     * 24: desert trader
     * 25: oasis
     * 26: skull office
     * 27: field office
     * 28: island trader
     * 29: walnut room
     * 30: volcano dungeon
     * 31: mutant bug lair
    */
    return queryInterface.bulkInsert('Buildings',[
      {name:'Blacksmith',locationId:1},
      {name:'Community Center',locationId:1},
      {name:"Medical Clinic",locationId:1},
      {name:'JojaMart',locationId:1},
      {name:'Museum',locationId:1},
      {name:"Pierre's",locationId:1},
      {name:'Saloon',locationId:1},
      {name:'Sewers',locationId:1},
      {name:"Marnie's Ranch",locationId:2},
      {name:'Ruined House',locationId:2},
      {name:'Secret Woods',locationId:2},
      {name:'Traveling Cart',locationId:2},
      {name:"Wizard's Tower",locationId:2},
      {name:'Fish Shop',locationId:3},
      {name: "Adenture's Guild",locationId:4},
      {name:"Carpenter's Shop",locationId:4},
      {name:"Mines",locationId:4},
      {name:'Railroad',locationId:4},
      {name:'Spa',locationId:4},
      {name:'Quarry',locationId:4},
      {name:'Quarry Mine',locationId:4},
      {name:"Witch's Hut",locationId:5},
      {name:'Casino', locationId:7},
      {name:'Desert Trader', locationId:7},
      {name:'Oasis', locationId:7},
      {name:'Skull Cavern', locationId:7},
      {name:'Field Office', locationId:8},
      {name:'Island Trader', locationId:8},
      {name:'Walnut Room', locationId:8},
      {name:'Volcano Dungeon', locationId:8},
      {name:"Mutant Bug Lair",locationId:9}
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Buildings')
  }
};
