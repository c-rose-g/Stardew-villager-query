'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Gift_Seasons', {
      giftId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Gifts',
          key:'id'
        }
      },
      seasonId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Seasons',
          key:'id'
        }
      }
    });
    // Add the composite primary key
    await queryInterface.addConstraint('Gift_Seasons',{
      fields:['giftId', 'seasonId'],
      type: 'primary key',
      name: 'pkGiftSeason'
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Gift_Seasons');
  }
};
