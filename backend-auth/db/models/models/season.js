'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Season extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Season.hasMany(models.Villager,{foreignKey:'seasonId'})
    }
  }
  Season.init({
    name:{
      type: DataTypes.ENUM('Spring', 'Summer', 'Fall', 'Winter', 'Year-Round'),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Season',
  });
  return Season;
};
