"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Villager extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Villager.belongsTo(models.Season, { foreignKey: "birthdaySeasonId" });
		}
	}
	Villager.init(
		{
			name: { type: DataTypes.STRING, allowNull: false },
			sex: { type: DataTypes.STRING, allowNull: false },
			marriage: { type: DataTypes.BOOLEAN, allowNull: false },
			birthdaySeasonId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: { key: "id", model: "Seasons" },
			},

			birthdayDay: { type: DataTypes.INTEGER, allowNull: false },
		},
		{
			sequelize,
			modelName: "Villager",
		}
	);
	return Villager;
};
