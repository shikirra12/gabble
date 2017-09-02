'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
      name: 'Tim',
      username: 'timmy22',
      password: 'cat',
      salt: 'cat',
      createdAt: 'now',
      updatedAt: 'now'
    },
    {
      name: 'Sally',
      username: 'sallymae',
      password: 'sal',
      salt: 'sal',
      createdAt: 'now',
      updatedAt: 'now'
    },
    {
      name: 'Bonquita',
      username: 'quiqui',
      password: 'quita',
      salt: 'quita',
      createdAt: 'now',
      updatedAt: 'now'
    },
    {
      name: 'Cornelia',
      username: 'corn',
      password: 'corny',
      salt: 'corny',
      createdAt: 'now',
      updatedAt: 'now'
    }
  ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', [
      {
      name: 'Tim',
      username: 'timmy22',
      password: 'cat',
      salt: 'cat',
      createdAt: 'now',
      updatedAt: 'now'
    },
    {
      name: 'Sally',
      username: 'sallymae',
      password: 'sal',
      salt: 'sal',
      createdAt: 'now',
      updatedAt: 'now'
    },
    {
      name: 'Bonquita',
      username: 'quiqui',
      password: 'quita',
      salt: 'quita',
      createdAt: 'now',
      updatedAt: 'now'
    },
    {
      name: 'Cornelia',
      username: 'corn',
      password: 'corny',
      salt: 'corny',
      createdAt: 'now',
      updatedAt: 'now'
    }
  ])
  }
};
