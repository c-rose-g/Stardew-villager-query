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
			Schedule.belongsTo(models.Villager, { foreignKey: "villagerId" });
			// Schedule.belongsTo(models.Location, {foreignKey:'locationId'});
			Schedule.belongsTo(models.Location, { foreignKey: "startLocationId" });
			Schedule.belongsTo(models.Location, { foreignKey: "endLocationId" });
			Schedule.belongsTo(models.Building, { foreignKey: "startBuildingId" });
			Schedule.belongsTo(models.Building, { foreignKey: "endBuildingId" });
			Schedule.belongsTo(models.Season, { foreignKey: "seasonId" });
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
			seasonId: {
				type: DataTypes.INTEGER,
				references: {
					model: "Seasons",
					key: "id",
				},
				allowNull: true,
			},
			startLocationId: {
				type: DataTypes.INTEGER,
				references: {
					key: "id",
					model: "Locations",
				},
				allowNull: true,
			},
			endLocationId: {
				type: DataTypes.INTEGER,
				references: {
					key: "id",
					model: "Locations",
				},
				allowNull: true,
			},
			startBuildingId: {
				type: DataTypes.INTEGER,
				references: {
					key: "id",
					model: "Buildings",
				},
				allowNull: true,
			},
			endBuildingId: {
				type: DataTypes.INTEGER,
				references: {
					key: "id",
					model: "Buildings",
				},
				allowNull: true,
			},
			time: {
				type: DataTypes.TIME,
				allowNull: true,
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
							"Sunday",
						],
					],
				},
				allowNull: true,
			},
			weather: {
				type: DataTypes.STRING,
				validate: { isIn: [["Sunny", "Rainy", "Snowy"]] },
				allowNull: true,
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
			},
		},
		{
			sequelize,
			timestamps: false, // if you don't want createdAt/updatedAt columns
			modelName: "Schedule",
		}
	);
	return Schedule;
};
