'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Villagers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      sex: {
        type: Sequelize.STRING,
        validate:{
          isIn:[['Female', 'Male']]
        },
        allowNull:false
      },
      marriage: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:true
      },
      houseId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          key:'id',
          model:"Houses"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Villagers');
  }
};
