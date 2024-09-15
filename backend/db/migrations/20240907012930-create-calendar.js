"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Calendars", {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			villagerBirthdayId: {
				type: Sequelize.INTEGER,
				references: {
					key: "id",
					model: "Villagers",
				},
				allowNull: true,
			},
			seasonId: {
				type: Sequelize.INTEGER,
				references: {
					key: "id",
					model: "Seasons",
				},
				allowNull: false,
			},
			date: {
				type: Sequelize.INTEGER,
				// validate: {
				// 	min: 1,
				// 	max: 28,
				// },
				allowNull: false,
			},
			eventName: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			isFestival: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
			isBirthday: {
				type: Sequelize.BOOLEAN, // Marks if this event is a birthday
				allowNull: false,
				defaultValue: false, // Default is not a birthday unless specified
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
		// Add unique constraint for seasonId and date

		await queryInterface.addConstraint("Calendars", {
			fields: ["seasonId", "date"],
			type: "unique",
			name: "seasonDateUnique"
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Calendars");
	},
};
