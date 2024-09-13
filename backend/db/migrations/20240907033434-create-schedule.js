'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      villagerId: {
        type: Sequelize.INTEGER,
        references:{
          key:'id',
          model:'Villagers'
        },
        allowNull:false
      },
      locationId: {
        type: Sequelize.INTEGER,
        references:{
          model:'Locations',
          key:'id'
        },
        allowNull: false
      },
      time: {
        type: Sequelize.TIME,
        allowNull:false
      },
      weekday: {
        type: Sequelize.STRING,
        validate:{
          isIn:[["Monday",
							"Tuesday",
							"Wednesday",
							"Thursday",
							"Friday",
							"Saturday",
							"Sunday"]]
        }
      },
      weather: {
        type: Sequelize.STRING,
        validate:{
          isIn:[["Sunny", "Rainy", "Snowy"]]
        }
      },
      locationUnlocked: {
        type: Sequelize.BOOLEAN,
        defaultValue:false,
        allowNull:false
      },
      isFestival: {
        type: Sequelize.BOOLEAN,
        defaultValue:false,
        allowNull:false
      },
      isRegular: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
				allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Schedules');
  }
};
