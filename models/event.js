'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    datetime: DataTypes.STRING,
    nowLocation: DataTypes.STRING,
    explain: DataTypes.TEXT,
    emotionName: DataTypes.STRING,
    event: DataTypes.TEXT,
    influence: DataTypes.TEXT,
    improvement: DataTypes.TEXT,
    tag: DataTypes.TEXT,
    reason: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};