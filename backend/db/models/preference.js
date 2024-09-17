"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Preference extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			// a preference can have many gifts
			// a villager gift can have one preference
			// a villager can have many gifts, associated by preference
			// a Many-to-Many relationship with gift through Gift_Preference
			Preference.belongsToMany(models.Gift, {
				through: models.Gift_Preference,
			});
			Preference.hasMany(models.Gift_Preference);
			// this one below is questionable
			// Preference.belongsToMany(models.Villager, {through:models.Villager_Gift, foreignKey:'preferenceId'})
			Preference.hasMany(models.Villager_Gift, {foreignKey:'preferenceId'});
		}
	}
	Preference.init(
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			timestamps: false, // if you don't want createdAt/updatedAt columns
			modelName: "Preference",
		}
	);
	return Preference;
};
