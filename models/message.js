'use strict';
module.exports = function(sequelize, DataTypes) {
  var message = sequelize.define('message', {
    title: DataTypes.STRING,
    text: DataTypes.STRING(140)
  }, {});
  message.associate =
  function(models) {
    message.belongsTo(models.user, {  as: 'users', foreignKey: 'userId'})
    message.hasMany(models.like, {as: 'likes', foreignKey: 'messageId'})
  }

  return message;
};
