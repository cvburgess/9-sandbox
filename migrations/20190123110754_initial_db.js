exports.up = (knex, Promise) =>
  knex.schema.createTable("people", table => {
    table.increments();
    table.string("name");
    table.timestamps();
  });

exports.down = (knex, Promise) => knex.schema.dropTable("people");
