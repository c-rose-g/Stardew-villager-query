"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Gift_Categories", {
			giftId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "Gifts",
					key: "id",
				},
			},
			categoryId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "Categories",
					key: "id",
				},
			},
		});
		// Add the composite primary key
		await queryInterface.addConstraint("Gift_Categories", {
			fields: ["giftId", "categoryId"],
			type: "primary key",
			name: "pkGiftCategory",
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Gift_Categories");
	},
};
