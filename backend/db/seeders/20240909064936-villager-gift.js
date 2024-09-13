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
    return queryInterface.bulkInsert('Villager_Gifts',[
      {villagerId: 1, giftId: 200, preferenceId: 1},
      {villagerId: 1, giftId: 109, preferenceId: 1},
      {villagerId: 1, giftId: 95, preferenceId: 1},
      {villagerId: 1, giftId: 62, preferenceId: 1},
      {villagerId: 1, giftId: 179, preferenceId: 1},
      {villagerId: 1, giftId: 253, preferenceId: 1},
      {villagerId: 1, giftId: 68, preferenceId: 1},
      {villagerId: 1, giftId: 211, preferenceId: 2},
      {villagerId: 1, giftId: 129, preferenceId: 3},
      {villagerId: 1, giftId: 116, preferenceId: 3},
      {villagerId: 1, giftId: 117, preferenceId: 3},
      {villagerId: 1, giftId: 118, preferenceId: 3},
      {villagerId: 1, giftId: 150, preferenceId: 3},
      {villagerId: 1, giftId: 130, preferenceId: 3},
      {villagerId: 1, giftId: 119, preferenceId: 3},
      {villagerId: 1, giftId: 151, preferenceId: 3},
      {villagerId: 1, giftId: 120, preferenceId: 3},
      {villagerId: 1, giftId: 147, preferenceId: 3},
      {villagerId: 1, giftId: 135, preferenceId: 3},
      {villagerId: 1, giftId: 136, preferenceId: 3},
      {villagerId: 1, giftId: 19, preferenceId: 4},
      {villagerId: 1, giftId: 123, preferenceId: 4},
      {villagerId: 1, giftId: 189, preferenceId: 5},
      {villagerId: 1, giftId: 134, preferenceId: 5},
      {villagerId: 2, giftId: 41, preferenceId: 1},
      {villagerId: 2, giftId: 52, preferenceId: 1},
      {villagerId: 2, giftId: 269, preferenceId: 2},
      {villagerId: 2, giftId: 129, preferenceId: 3},
      {villagerId: 2, giftId: 116, preferenceId: 3},
      {villagerId: 2, giftId: 117, preferenceId: 3},
      {villagerId: 2, giftId: 118, preferenceId: 3},
      {villagerId: 2, giftId: 150, preferenceId: 3},
      {villagerId: 2, giftId: 130, preferenceId: 3},
      {villagerId: 2, giftId: 119, preferenceId: 3},
      {villagerId: 2, giftId: 151, preferenceId: 3},
      {villagerId: 2, giftId: 120, preferenceId: 3},
      {villagerId: 2, giftId: 147, preferenceId: 3},
      {villagerId: 2, giftId: 135, preferenceId: 3},
      {villagerId: 2, giftId: 136, preferenceId: 3},
      {villagerId: 2, giftId: 121, preferenceId: 4},
      {villagerId: 2, giftId: 123, preferenceId: 4},
      {villagerId: 2, giftId: 134, preferenceId: 5},
      {villagerId: 2, giftId: 211, preferenceId: 5},

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
