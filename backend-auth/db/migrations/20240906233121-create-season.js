"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
    // Check if we're using SQLite or a database that supports ENUM
		const isSQLite = queryInterface.sequelize.options.dialect === 'sqlite';

		await queryInterface.createTable("Seasons", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: isSQLite ? Sequelize.STRING : Sequelize.ENUM('Spring','Summer','Fall','Winter','Year-Round'),  // Conditional ENUM
        allowNull:false
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Seasons");
    
    // Drop the ENUM type only if the database is not SQLite
    if (queryInterface.sequelize.options.dialect !== 'sqlite') {
			await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Seasons_name";');
		}
  },
};
