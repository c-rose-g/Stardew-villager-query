"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Gift_Preferences", {
			giftId: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				references: {
					model: "Gifts",
					key: "id",
				},

			},
			preferenceId: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				references: {
					model: "Preferences",
					key: "id",
				},

			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Gift_Preferences");
	},
};
