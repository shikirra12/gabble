'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salt: DataTypes.STRING
  }, {});
    user.associate =
    function(models) {
      user.hasMany(models.message, {
        as: 'messages',
        foreignKey: 'userId'
      })
      user.hasMany(models.like, {
        as: 'likes',
        foreignKey: 'userId'
      })
    }

  return user;
};
