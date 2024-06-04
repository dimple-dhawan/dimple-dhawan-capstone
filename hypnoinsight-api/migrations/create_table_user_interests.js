exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    })
    .createTable("interests", (table) => {
        table.increments('id').primary();
        table.string('interest').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    })
    .createTable("user_interests", (table) => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.integer('interest_id').unsigned().notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        table
            .foreign("user_id")
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .foreign("interest_id")
            .references("id")
            .inTable("interests")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    })
    .createTable('checklist_questions', (table) => {
        table.increments('id').primary();
        table.string('question').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    })
    .createTable("checklist_answers", (table) => {
        table.increments('id').primary();
        table.integer('question_id').unsigned().notNullable();
        table.string('answer').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
        table
            .foreign("question_id")
            .references("id")
            .inTable("checklist_questions")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    })
    .createTable("user_answers", (table) => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.integer('question_id').unsigned().notNullable();
        table.integer('answer_id').unsigned().notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        table
            .foreign("user_id")
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .foreign("question_id")
            .references("id")
            .inTable("checklist_questions")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .foreign("answer_id")
            .references("id")
            .inTable("checklist_answers")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('user_interests')
        .dropTable('interests')
        .dropTable('user_answers')
        .dropTable('checklist_answers')
        .dropTable('checklist_questions')
        .dropTable("users");
  };
  