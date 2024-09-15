"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Schedules", {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			villagerId: {
				type: Sequelize.INTEGER,
				references: {
					key: "id",
					model: "Villagers",
				},
				allowNull: false,
			},
			seasonId: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					model: "Seasons",
					key: "id",
				},
				allowNull: true,
			},
			description: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			startLocationId: {
				type: Sequelize.INTEGER,
				references: {
					model: "Locations",
					key: "id",
				},
				allowNull: false,
			},
			endLocationId: {
				type: Sequelize.INTEGER,
				references: {
					model: "Locations",
					key: "id",
				},
				allowNull: false,
			},
			startBuildingId: {
				type: Sequelize.INTEGER,
				references: {
					key: "id",
					model: "Buildings",
				},
				allowNull: true,
			},
			endBuildingId: {
				type: Sequelize.INTEGER,
				references: {
					key: "id",
					model: "Buildings",
				},
				allowNull: true,
			},
			time: {
				type: Sequelize.TIME,
				allowNull: false,
			},
			weekday: {
				type: Sequelize.STRING,
				validate: {
					isIn: [
						[
							"Monday",
							"Tuesday",
							"Wednesday",
							"Thursday",
							"Friday",
							"Saturday",
							"Sunday",
						],
					],
				},
				allowNull: true,
			},
			weather: {
				type: Sequelize.STRING,
				validate: {
					isIn: [["Sunny", "Rainy", "Snowy"]],
				},
				allowNull: true,
			},
			locationUnlocked: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
				allowNull: false,
			},
			isFestival: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
				allowNull: false,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Schedules");
	},
};
