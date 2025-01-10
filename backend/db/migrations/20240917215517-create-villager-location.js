"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Villager_Locations", {
			villagerId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "Villagers",
					key: "id",
				},
			},
			locationId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "Locations",
					key: "id",
				},
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Villager_Locations");
	},
};
