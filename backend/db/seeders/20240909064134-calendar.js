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
     * eventName and villagerBirthdayId are nullable
    */
    return queryInterface.bulkInsert('Calendars',[
      {villagerBirthdayId:0, seasonId:0, date:06:00, eventName:'nullable',isFestival:false, isBirthday:false}
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
