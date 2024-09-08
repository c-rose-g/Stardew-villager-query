"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Gifts", {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			categoryId: {
				type: Sequelize.INTEGER,
				references: {
					key: "id",
					model: "Categories",
				},
				allowNull: false,
				onUpdate: "CASCADE",
				onDelete: "SET NULL",
			},
			locationId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					key: "id",
					model: "Locations",
				},
				onUpdate: "CASCADE",
				onDelete: "SET NULL",
			},
			seasonId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					key: "id",
					model: "Seasons",
				},
				onUpdate: "CASCADE",
				onDelete: "SET NULL",
			},
			buildingId: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					key: "id",
					model: "Buildings",
				},
				onUpdate: "CASCADE",
				onDelete: "SET NULL",
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
		await queryInterface.dropTable("Gifts");
	},
};
