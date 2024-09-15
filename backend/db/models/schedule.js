"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Schedule extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Schedule.belongsTo(models.Villager,{foreignKey:'villagerId'});
			Schedule.belongsTo(models.Location, {foreignKey:'locationId'});
			Schedule.belongsTo(models.Season,{foreignKey:'seasonId'});
		}
	}
	Schedule.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
			},
			villagerId: {
				type: DataTypes.INTEGER,
				references: {
					key: "id",
					model: "Villagers",
				},
				allowNull: false,
			},
			seasonId:{
				type: DataTypes.INTEGER,
				references:{
					model:'Seasons',
					key:'id'
				},
				allowNull: false,
			},
			locationId: {
				type: DataTypes.INTEGER,
				references: {
					key: "id",
					model: "Locations",
				},
				allowNull: false,
			},
			time: {
				type: DataTypes.TIME,
				allowNull: false,
			},
			weekday: {
				type: DataTypes.STRING,
				validate: {
					isIn: [
						[
							"Monday",
							"Tuesday",
							"Wednesday",
							"Thursday",
							"Friday",
							"Saturday",
							"Sunday"
						],
					],
				},
				allowNull: false,
			},
			weather: {
				type: DataTypes.STRING,
				validate: { isIn: [["Sunny", "Rainy", "Snowy"]] },
			},
			locationUnlocked: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
				allowNull: false,
			},
			isFestival: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
				allowNull: false,
			}
		},
		{
			sequelize,
			timestamps: false, // if you don't want createdAt/updatedAt columns
			modelName: "Schedule",
		}
	);
	return Schedule;
};
