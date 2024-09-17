"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Location extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Location.hasMany(models.Building, { foreignKey: "locationId" });
			Location.hasMany(models.Schedule, { foreignKey: "locationId" });
			Location.hasMany(models.House, { foreignKey: "locationId" });

			// Many-to-Many relationship with Villager
			Location.belongsToMany(models.Villager, {
				through: "Villager_Locations",
			});
			// many-to-many relationship with Gift
			Location.belongsToMany(models.Gift, {
				through: models.Gift_Location,
				foreignKey: "locationId",
			});
		}
	}
	Location.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Location",
			defaultScope: {
				attributes: {
					exclude: ["createdAt", "updatedAt"],
				},
			},
		}
	);
	return Location;
};
