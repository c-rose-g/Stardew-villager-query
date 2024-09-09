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
			// One villager may have a birthday event in the calendar
			Villager.belongsTo(models.House, { foreignKey: "houseId" });
			Villager.hasMany(models.Calendar, { foreignKey: "villagerBirthdayId" });
			Villager.hasMany(models.Schedule, { foreignKey: "villagerId" });
			// Creates junction table 'Villager_Gifts'
			Villager.belongsToMany(models.Gift, {
				through: models.Villager_Gift,
				foreignKey: "villagerId",
			});
			// Many-to-Many relationship with locations
			Villager.belongsToMany(models.Location, {
				through: "Villager_Locations",
			});
			// Many-to-Many relationship with Houses - later
		}
	}
	Villager.init(
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
			houseId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					key: "id",
					model: "Houses",
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
