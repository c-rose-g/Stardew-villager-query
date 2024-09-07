'use strict';

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
    */
    return queryInterface.bulkInsert('Villagers',[
      {name:'Abigail',sex:'Female',marriage:true},
      {name:'Alex',sex:'Male',marriage:true},
      {name:'Caroline',sex:'Female',marriage:false},
      {name:'Clint',sex:'Male',marriage:true},
      {name:'Demetrius',sex:'Male',marriage:false},
      {name:'Drawf',sex:'Male',marriage:false},
      {name:'Emily',sex:'Female',marriage:true},
      {name:'Elliot',sex:'Male',marriage:true},
      {name:'Evelyn',sex:'Female',marriage:false},
      {name:'George',sex:'Male',marriage:false},
      {name:'Gus',sex:'Male',marriage:false},
      {name:'Haley',sex:'Female',marriage:true},
      {name:'Harvey',sex:'Male',marriage:true},
      {name:'Jas',sex:'Female',marriage:false},
      {name:'Jodi',sex:'Female',marriage:false},
      {name:'Kent',sex:'Male',marriage:false},
      {name:'Krobus',sex:'Male',marriage:false},
      {name:'Leah',sex:'Female',marriage:true},
      {name:'Leo',sex:'Male',marriage:false},
      {name:'Lewis',sex:'Male',marriage:false},
      {name:'Linus',sex:'Male',marriage:false},
      {name:'Marnie',sex:'Female',marriage:false},
      {name:'Maru',sex:'Female',marriage:true},
      {name:'Pam',sex:'Female',marriage:false},
      {name:'Penny',sex:'Female',marriage:true},
      {name:'Pierre',sex:'Female',marriage:false},
      {name:'Robin',sex:'Female',marriage:false},
      {name:'Sam',sex:'Male',marriage:true},
      {name:'Sandy',sex:'Female',marriage:false},
      {name:'Sebastian',sex:'Male',marriage:true},
      {name:'Shane',sex:'Male',marriage:true},
      {name:'Vincent',sex:'Male',marriage:false},
      {name:'Willy',sex:'Male',marriage:false},
      {name:'Wizard',sex:'Male',marriage:false}
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Villagers',null)
  }
};
