"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Building extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
      Building.belongsTo(models.Location,{foreignKey:'locationId'});
			Building.hasMany(models.Gift,{foreignKey:'buildingId'})
		}
	}
	Building.init(
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
			locationId: {
				type: DataTypes.INTEGER,
				references: {
					key: "id",
					model: "Locations",
				},
				onUpdate:'CASCADE',
        onDelete:'SET NULL'
			},
		},
		{
			sequelize,
			modelName: "Building",
		}
	);
	return Building;
};
