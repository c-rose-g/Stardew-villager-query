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
			Gift.belongsTo(models.Category, { foreignKey: "categoryId" });
			Gift.belongsTo(models.Location, { foreignKey: "locationId" });
			Gift.belongsTo(models.Building, { foreignKey: "buildingId" });
			// Many-to-Many relationship with Villager
			Gift.belongsToMany(models.Villager, {
				through: models.Villager_Gift,
				foreignKey: "giftId",
			});
			// Many-to-Many relationship with building - add later
			// Many-to-Many relationship with Location - add later
			// Many-to-Many relationship with Season - add later
			// Many-to-Many relationship with category - add later
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
			categoryId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					key: "id",
					model: "Categories",
				},
			},
			locationId: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					key: "id",
					model: "Locations",
				},
			},
			seasonId: {
				type: DataTypes.INTEGER,
				allowNull: true,
				references: {
					key: "id",
					model: "Seasons",
				},
			},
			buldingId: {
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
			modelName: "Gift",
		}
	);
	return Gift;
};
