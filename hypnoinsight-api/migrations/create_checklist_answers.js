exports.up = function (knex) {
    return knex.schema.createTable('checklist_questions', (table) => {
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
        .dropTable('user_answers')
        .dropTable('checklist_answers')
        .dropTable('checklist_questions');
  };
  