/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
 return knex.schema.createTable('user_account',function(table)
 {
    table.increments('id');
    table.integer('user_id').references('id').inTable('application_user').notNullable();
    table.decimal('balance').unsigned().notNullable();
    table.dateTime('created_at').defaultTo(knex.fn.now());
    table.dateTime('updated_at').defaultTo(knex.fn.now());
    table.string('updated_by').defaultTo('admin');
    table.string('created_by').defaultTo('admin');
 });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('user_accounts')
};
