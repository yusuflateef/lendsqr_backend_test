/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_account').del()
  await knex('user_account').insert([
    {id: 1, balance: 5000, user_id:1,created_at:knex.fn.now(),updated_at:knex.fn.now(),updated_by:'admin',created_by:'admin'},
    {id: 2, balance: 5000, user_id:1,created_at:knex.fn.now(),updated_at:knex.fn.now(),updated_by:'admin',created_by:'admin'},
    {id: 3,balance: 5000, user_id:1,created_at:knex.fn.now(),updated_at:knex.fn.now(),updated_by:'admin',created_by:'admin'}
  ]);
};
