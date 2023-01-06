/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('transactions', function(table){
    table.increments('id',255).primary().unique();
    table.enum('txn_type', knex.Value['CREDIT','DEBIT'])
    table.enum('purpose',Value['deposit', 'transfer', 'withdrawal']).notNullable();
    table.decimal('amount');
    table.integer('account_id',255).references('id').inTable('user_account').notNullable();
    table.uuid('reference').notNullable();
    table.integer('user_id',255).references('id').inTable('application_user').notNullable();
    table.timeStamp('created_at').defaultTo(knex.fn.now());
    table.timeStamp('updated_at').defaultTo(knex.fn.now());
    table.decimal('prev_balance');
    table.decimal('current_balance');
    table.string('updated_by').defaultTo('admin');
    table.string('created_by').defaultTo('admin');

  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('transactions')
};
