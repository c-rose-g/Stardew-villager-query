"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Season extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 * Purpose: to keep track of the different names of the season (spring, summer, fall, winter,year-round)
		 * note: year-round is included here to accomodate gifts that can be found year-round, the calendar doesn't need this option
		 */
		static associate(models) {
			// define association here
			Season.hasMany(models.Villager, { foreignKey: "birthdaySeasonId" });
			Season.hasMany(models.Calendar, { foreignKey: 'seasonId' });   // One season has many calendar entries
		}
	}
	Season.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
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
