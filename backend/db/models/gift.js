"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Gift extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			/**
			 * for simplicity - I'm only associating gifts to one Category,location, and building.
			 * I know gifts can be found in different locations, and that categories have subcategories,
			 * which would change the layout of my database.
			 * I will go back in to revise my models to include more complex associations,
			 * but for now this will satisfy the purpose of the search bar query
			 */
			Gift.belongsToMany(models.Season, {
				through: models.Gift_Season,
				foreignKey: "seasonId",
			});
			Gift.belongsToMany(models.Category, {
				through: models.Gift_Category,
				foreignKey: "categoryId",
			});
			Gift.belongsToMany(models.Location, {
				through: models.Gift_Location,
				foreignKey: "giftId",
			});
			Gift.belongsToMany(models.Building, {
				through: models.Gift_Building,
				foreignKey: "buildingId",
			});
			// Many-to-Many relationship with Villager
			Gift.belongsToMany(models.Villager, {
				through: models.Villager_Gift,
				foreignKey: "giftId",
			});
			// Super Many-to-Many relationship with Preference
			Gift.belongsToMany(models.Preference, {
				through: models.Gift_Preference,
			});
			Gift.hasMany(models.Gift_Preference);
			Gift.hasMany(models.Villager_Gift, {
				as: "VillagerGifts",
				foreignKey: "giftId",
			});
		}
	}
	Gift.init(
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
		},
		{
			sequelize,
			modelName: "Gift",
			defaultScope: {
				attributes: {
					exclude: ["createdAt", "updatedAt"],
				},
			},
		}
	);
	return Gift;
};
