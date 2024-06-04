exports.up = function (knex) {
    return knex.schema.createTable('tools', (table) => {
        table.increments('id').primary();
        table.string('tool').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    })
    .createTable("problems", (table) => {
        table.increments('id').primary();
        table.string('presenting_problem').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    })
    .createTable("problem_tools", (table) => {
        table.increments('id').primary();
        table.integer('tool_id').unsigned().notNullable();
        table.integer('problem_id').unsigned().notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        table
            .foreign("tool_id")
            .references("id")
            .inTable("tools")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .foreign("problem_id")
            .references("id")
            .inTable("problems")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('problem_tools')
        .dropTable('problems')
        .dropTable("tools");
  };
  