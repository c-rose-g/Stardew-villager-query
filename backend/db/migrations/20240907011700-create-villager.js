"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Villagers", {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			imageURL: {
				type: Sequelize.STRING,
				allowNull: true,
				validate: {
					isUrl: true,
				},
			},
			sex: {
				type: Sequelize.STRING,
				validate: {
					isIn: [["Female", "Male"]],
				},
				allowNull: false,
			},
			marriage: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: true,
			},
			houseId: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					key: "id",
					model: "Houses",
				},
			},
			buildingId: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					key: "id",
					model: "Buildings",
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Villagers");
	},
};
