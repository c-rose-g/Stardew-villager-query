'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Villagers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      sex: {
        type: queryInterface.sequelize.options.dialect === 'sqlite' ? Sequelize.STRING : Sequelize.ENUM('Female', 'Male'),  // Conditional ENUM
        allowNull:false
      },
      marriage: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:true
      },
      birthdaySeasonId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          key:'id',
          model:'Seasons'
        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL'
      },
      birthdayDay: {
        type: Sequelize.INTEGER
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
   // IMPORTANT: Drop ENUM type in PostgreSQL if you're using it
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Villagers_sex";');
  }
};
