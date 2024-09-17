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
			// A villager can live in a house or a building
			Villager.belongsTo(models.House, { foreignKey: "houseId" });
			Villager.belongsTo(models.Building, { foreignKey: "buildingId" });

			// One villager may have a birthday event in the calendar
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
			// below one is questionable
			Villager.belongsToMany(models.Preference, {through: models.Villager_Gift, foreignKey:"preferenceId"})
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
				allowNull: true,
				references: {
					key: "id",
					model: "Houses",
				},
			},
			buildingId: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					key: "id",
					model: "Buildings",
				},
			},
		},
		{
			sequelize,
			modelName: "Villager",
			defaultScope:{
        attributes:{
          exclude: ['createdAt','updatedAt']
        }
      },
		}
	);
	return Villager;
};
