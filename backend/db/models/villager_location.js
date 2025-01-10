"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Villager_Location extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Villager_Location.belongsTo(models.Villager, { foreignKey: "villagerId" });
			Villager_Location.belongsTo(models.Location, { foreignKey: "locationId" });
		}
	}
	Villager_Location.init(
		{
			villagerId: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
					model: "Villagers",
					key: "id",
				},
			},
			locationId: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
					model: "Locations",
					key: "id",
				},
			},
		},
		{
			sequelize,
			modelName: "Villager_Location",
      primaryKey: ["villagerId", "locationId"], // Composite primary key
			timestamps: false,
		}
	);
	return Villager_Location;
};
