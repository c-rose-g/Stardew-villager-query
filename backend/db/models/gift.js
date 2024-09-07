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
      Gift.belongsTo(models.Category,{foreignKey:'categoryId'})
		}
	}
	Gift.init(
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
			},
			categoryId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					key: "id",
					model: "Categories",
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
