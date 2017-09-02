'use strict';
module.exports = function(sequelize, DataTypes) {
  var like = sequelize.define('like', {
    userId: DataTypes.INTEGER,
    messageId: DataTypes.INTEGER
  }, {});

  like.associate = function(models) {
    like.belongsTo(models.message, {as: 'message', foreignKey:'messageId'})
    like.belongsTo(models.user, {as: 'user', foreignKey: 'userId'})
  }
  return like;
};
