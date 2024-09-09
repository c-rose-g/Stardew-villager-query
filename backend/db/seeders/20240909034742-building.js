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
    */
    return queryInterface.bulkInsert('Buildings',[
      {name:'Blacksmith',locationId:1},
      {name:'Community Center',locationId:1},
      {name:"Harvey's Clinic",locationId:1},
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
