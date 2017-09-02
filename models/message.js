'use strict';
module.exports = function(sequelize, DataTypes) {
  var message = sequelize.define('message', {
    title: DataTypes.STRING,
    text: DataTypes.STRING(140)
  }, {});
  message.associate =
  function(models) {
    message.belongsTo(models.user, {
      foreignKey: 'userId'
    })
    message.hasMany(models.like, {
      // foreignKey: 'messageId',
      // otherKey: 'userId',
      // through: 'messages'
      as: 'likes',
      foreignKey: 'userId'
    })
  }

  return message;
};
