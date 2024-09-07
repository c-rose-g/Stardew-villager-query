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
			Gift.belongsTo(models.Category, { foreignKey: "categoryId" });
			Gift.belongsTo(models.Location, { foreignKey: "locationId" });
			Gift.belongsTo(models.Category, { foreignKey: "categoryId" });
			// Many-to-Many relationship with Villager
			Gift.belongsToMany(models.Villager, {
				through: models.Villager_Gift,
				foreignKey: "giftId",
			});
			// Many-to-Many relationship with Location - add later
			// Many-to-Many relationship with Season - add later
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
		},
		{
			sequelize,
			modelName: "Gift",
		}
	);
	return Gift;
};
