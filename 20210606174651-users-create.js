'use strict';
var faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   var t=[]
   for(var i=1;i<=20;++i)
   {
      t.push({
        id:i,
        username: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      role:faker.random.arrayElement(['admin','author','guest']),
      createdAt: new Date(),
      updatedAt: new Date()
      }
      )
   }
   return queryInterface.bulkInsert('users',t,{});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('users', null, {});
  }
};
