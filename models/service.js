'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Service.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    appId: DataTypes.INTEGER,
    code: DataTypes.STRING,
    stype: DataTypes.STRING,
    name: DataTypes.STRING,
    logoImage: DataTypes.TEXT,
    iconImage: DataTypes.TEXT,
    tags: DataTypes.STRING,
    intro: DataTypes.TEXT,
    info: DataTypes.TEXT,
    content: DataTypes.TEXT,
    weigh: DataTypes.INTEGER,
    useSwitch: DataTypes.INTEGER,
    adminId: DataTypes.INTEGER,
    stypeText: DataTypes.TEXT,
    logoImageUrl: DataTypes.TEXT,
    iconImageUrl: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};