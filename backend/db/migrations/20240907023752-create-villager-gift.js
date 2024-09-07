'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Villager_Gifts', {
      villager_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Villagers', 
          key: 'id',
        },
      },
      gift_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Gifts',
          key: 'id',
        },
      },
      preferenceLevel: {
        type: Sequelize.STRING,
        validate:{
          isIn:[['loves', 'likes', 'neutrals', 'dislikes', 'hates']]
        },
        allowNull:false
      }
    });
    // Add the composite primary key
    await queryInterface.addConstraint('Villager_Gifts', {
      fields: ['villager_id', 'gift_id'],
      type: 'primary key',
      name: 'pk_villager_gift'  // Name of the composite primary key constraint
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Villager_Gifts');
  }
};
