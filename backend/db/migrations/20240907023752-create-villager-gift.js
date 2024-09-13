'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Villager_Gifts', {
      villagerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Villagers',
          key: 'id',
        },
      },
      giftId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Gifts',
          key: 'id',
        },
      },
      preferenceId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Preferences',
          key:"id"
        }
      }
    });
    // Add the composite primary key
    await queryInterface.addConstraint('Villager_Gifts', {
      fields: ['villagerId', 'giftId'],
      type: 'primary key',
      name: 'pkVillagerGift'  // Name of the composite primary key constraint
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Villager_Gifts');
  }
};
