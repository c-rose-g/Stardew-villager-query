"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Gift_Locations", {
			giftId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "Gifts",
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
			},
		});
		// add the composite primary key
		await queryInterface.addConstraint("Gift_Locations", {
			fields: ["giftId", "locationId"],
			type: "primary key",
			name: "pkGiftLocation",
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Gift_Locations");
	},
};
