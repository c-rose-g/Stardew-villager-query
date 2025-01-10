"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Gift_Seasons", {
			giftId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "Gifts",
					key: "id",
				},
				field: "giftId",
			},
			seasonId: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					model: "Seasons",
					key: "id",
				},
				field: "seasonId",
			},
		});
		// Add the composite primary key
		await queryInterface.addConstraint("Gift_Seasons", {
			fields: ["giftId", "seasonId"],
			type: "primary key",
			name: "pkGiftSeason",
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Gift_Seasons");
	},
};
