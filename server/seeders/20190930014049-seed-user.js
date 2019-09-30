'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'test@test.com',
          password: '123456',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          email: 'test2@test.com',
          password: 'test2123456',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          email: 'test3@test.com',
          password: 'test3123456',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
}
