"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Season extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Season.hasMany(models.Villager, { foreignKey: "birthdaySeasonId" });
		}
	}
	Season.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				// Add validation to allow only specific values
				validate: {
					isIn: [["Spring", "Summer", "Fall", "Winter", "Year-Round"]],
				},
			},
		},
		{
			sequelize,
			modelName: "Season",
		}
	);
	return Season;
};
