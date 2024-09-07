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
			Villager.hasMany(models.Calendar, { foreignKey: 'villagerBirthdayId' });                   // One villager may have a birthday event in the calendar

		}
	}
	Villager.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			sex: {
				type: DataTypes.STRING,
				validate: {
					isIn: [["Female", "Male"]],
				},
				allowNull: false,
			},
			marriage: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: true,
			},
		},
		{
			sequelize,
			modelName: "Villager",
		}
	);
	return Villager;
};
