"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Calendar extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 * Purpose: keep track of events and birthdays that happen with each season(spring,summer,fall,winter)
		 */
		static associate(models) {
			// define association here
			// Each calendar entry may have a villager's birthday
			Calendar.belongsTo(models.Villager, {
				foreignKey: "villagerBirthdayId",
				allowNull: true,
			}); // Optional villager birthday
			// Each calendar entry belongs to a season
			Calendar.belongsTo(models.Season, { foreignKey: "seasonId" }); // Each calendar entry belongs to one season
		}
	}
	Calendar.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
			},
			villagerBirthdayId: {
				type: DataTypes.INTEGER,
				references: {
					key: "id",
					model: "Villagers",
				},
				allowNull: true,
			},
			seasonId: {
				type: DataTypes.INTEGER,
				references: {
					key: "id",
					model: "Seasons",
				},
				allowNull: false,
			},
			date: {
				type: DataTypes.INTEGER,
				// validate: {
				// 	min: 1,
				// 	max: 28,
				// },
				allowNull: false,
			},
			eventName: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			isFestival: {
				type: DataTypes.BOOLEAN, // Marks if this event is a festival
				allowNull: false,
				defaultValue: false, // Default is not a festival unless specified
			},
			isBirthday: {
				type: DataTypes.BOOLEAN, // Marks if this event is a birthday
				allowNull: false,
				defaultValue: false, // Default is not a birthday unless specified
			},
		},
		{
			sequelize,
			modelName: "Calendar",
			indexes: [
				{
					unique: true,
					fields: ["seasonId", "date"],
					name: "seasonDateUnique"
				},
			],
		}
	);
	return Calendar;
};
