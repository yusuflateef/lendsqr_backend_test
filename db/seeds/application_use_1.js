/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('application_user').del()
  await knex('application_user').insert([
    {id: 1, username: 'admin1',password:'password1',first_name:"lateef1",last_name:"test_user1",email:"tesy1@gmail.com",created_at:knex.fn.now(),updated_at:knex.fn.now(),updated_by:"admin",created_by:"admin"},
    {id: 2, username: 'admin2',password:'password2',first_name:"lateef2",last_name:"test_user2",email:"tesy2@gmail.com",created_at:knex.fn.now(),updated_at:knex.fn.now(),updated_by:"admin",created_by:"admin"},
    {id: 3, username: 'admin',password:'password',first_name:"lateef",last_name:"test_user",email:"tesy@gmail.com",created_at:knex.fn.now(),updated_at:knex.fn.now(),updated_by:"admin",created_by:"admin"}
  ]);
};
