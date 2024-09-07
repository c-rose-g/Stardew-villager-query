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
			birthdaySeasonId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					key: "id",
					model: "Seasons",
				},
				onUpdate: "CASCADE",
				onDelete: "SET NULL",
			},
			birthdayDay: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					min: 1,
					max: 28,
				},
			},
		},
		{
			sequelize,
			modelName: "Villager",
		}
	);
	return Villager;
};
