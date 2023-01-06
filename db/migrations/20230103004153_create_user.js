/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('application_user',function(table){
      table.increments('id');
      table.string('username').notNullable();
      table.string('password').notNullable();
      table.string('first_name', 255).notNullable();
      table.string('last_name', 255).notNullable();
      table.string('email').notNullable();
      table.timeStamp('created_at').defaultTo(knex.fn.now())
      table.timeStamp('updated_at').defaultTo(knex.fn.now())
      table.string('updated_by').defaultTo('admin');
      table.string('created_by').defaultTo('admin');
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
      return knex.schema
      .dropTable("ApplicationUser");
  };
  