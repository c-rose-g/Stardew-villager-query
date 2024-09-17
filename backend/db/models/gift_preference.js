'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gift_Preference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gift_Preference.init({
    giftId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Gifts',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    preferenceId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Preferences',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Gift_Preference',
    timestamps:false,
  });
  return Gift_Preference;
};
