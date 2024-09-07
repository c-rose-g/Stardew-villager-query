'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const isSQLite = queryInterface.sequelize.options.dialect === 'sqlite';

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
        type: isSQLite ? Sequelize.STRING : Sequelize.ENUM('Female', 'Male'),  // Conditional ENUM
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
        type: Sequelize.INTEGER,
        allowNull:false,
        validate:{
          min:1,
          max:28
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
    // Drop ENUM type for PostgreSQL if using it (not necessary for SQLite)
    if (queryInterface.sequelize.options.dialect !== 'sqlite') {
      await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Villagers_sex";');
    }
  }
};
