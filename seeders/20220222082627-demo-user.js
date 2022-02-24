'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
    'user',
    [
      {
        id:1,
        name:'dilan',
        email:'gihozo@gmail.com',
        created_at:new Date(),
        update_at:new Date()
      },
      {
        id:2,
        name:'dodo',
        email:'gihozo10@gmail.com',
        created_at:new Date(),
        update_at:new Date()
      },
      {
        id:3,
        name:'gigi',
        email:'gihozo20@gmail.com',
        created_at:new Date(),
        update_at:new Date()
      }
    ],
    {},
   )

   await queryInterface.bulkInsert(
    'channel',
    [
      {
        id:1,
        name:'channel1',
        user_id:1,
        created_at:new Date(),
        update_at:new Date()
      },
      {
        id:2,
        name:'channel2',
        user_id:2,
        created_at:new Date(),
        update_at:new Date()
      },
      {
        id:3,
        name:'channel3',
        user_id:3,
        created_at:new Date(),
        update_at:new Date()
      }
    ],
    {},
   )

   await queryInterface.bulkInsert(
    'video',
    [
      {
        id:1,
        title:'video1ByUser1',
        channel_id:1,
        created_at:new Date(),
        update_at:new Date()
      },
      {
        id:2,
        title:'video2ByUser1',
        channel_id:1,
        created_at:new Date(),
        update_at:new Date()
      },
      {
        id:3,
        title:'video3ByUser2',
        channel_id:2,
        created_at:new Date(),
        // update_at:new Date()
      }
    ],
    {},
   )
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
