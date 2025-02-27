"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Villager_Gift extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			// a villager gift has one preference
			Villager_Gift.belongsTo(models.Preference, {
				foreignKey: "preferenceId",
			});
			Villager_Gift.belongsTo(models.Gift, {
				foreignKey: "giftId",
			});
			Villager_Gift.belongsTo(models.Villager, {
				foreignKey: "villagerId",
			});
		}
	}
	Villager_Gift.init(
		{
			villagerId: {
				type: DataTypes.INTEGER,
				references: {
					key: "id",
					model: "Villagers",
				},
				allowNull: false,
				field: "villagerId",
			},
			giftId: {
				type: DataTypes.INTEGER,
				references: {
					key: "id",
					model: "Gifts",
				},
				allowNull: false,
				field: "giftId",
			},
			preferenceId: {
				type: DataTypes.INTEGER,
				references: {
					key: "id",
					model: "Preferences",
				},
				allowNull: false,
				field: "preferenceId",
			},
		},
		{
			sequelize,
			modelName: "Villager_Gift",
			tableName: "Villager_Gifts",
			timestamps: false, // if you don't want createdAt/updatedAt columns
			primaryKey: ["villagerId", "giftId"], // Composite primary key
			defaultScope: {
				attributes: {
					exclude: ["villagerId", "PreferenceId", "preferenceId"],
				},
			},
			scopes: {
				withPreferenceName: {
					include: [
						{
							model: sequelize.models.Preference,
							attributes: ["name"],
						},
					],
				},
			},
		}
	);
	return Villager_Gift;
};
