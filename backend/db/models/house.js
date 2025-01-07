"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class House extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			House.belongsTo(models.Location, { foreignKey: "locationId" });
			House.hasMany(models.Villager, { foreignKey: "houseId" });
		}
	}
	House.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
			},
			address: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			locationId: {
				type: DataTypes.INTEGER,
				references: {
					key: "id",
					model: "Locations",
				},
				allowNull: true,
			},
		},
		{
			sequelize,
			modelName: "House",
			defaultScope:{
				attributes: {
					exclude: ["createdAt", "updatedAt"],
				},
			}
		}
	);
	return House;
};
