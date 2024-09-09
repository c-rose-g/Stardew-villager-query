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
    return queryInterface.bulkInsert('Preferences',[
      {name:'Loves'},
      {name:'Likes'},
      {name:'Neutrals'},
      {name:'Dislikes'},
      {name:'Hates'},
      {name:'Universal Loves'},
      {name:'Universal Likes'},
      {name:'Universal Neutrals'},
      {name:'Universal Dislikes'},
      {name:'Universal Hates'}
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Preferences')
  }
};
