'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Villager_Gift extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // a villager gift has one preference
      Villager_Gift.belongsTo(models.Preference, {foreignKey:'preferenceId'})
    }
  }
  Villager_Gift.init({
    villagerId: {
      type:DataTypes.INTEGER,
      references:{
        key:'id',
        model:'Villagers'
      },
      allowNull:false,
    },
    giftId: {
      type:DataTypes.INTEGER,
      references:{
        key:'id',
        model:'Gifts'
      },
      allowNull:false,
    },
    preferenceId: {
      type:DataTypes.INTEGER,
      references:{
        key:'id',
        model:'Preferences'
      },
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Villager_Gift',
    timestamps: false, // if you don't want createdAt/updatedAt columns
    primaryKey: ['villagerId', 'giftId'], // Composite primary key


  });
  return Villager_Gift;
};
