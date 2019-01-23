exports.seed = (knex, Promise) =>
  // Deletes ALL existing entries
  knex("people")
    .del()
    .then(() =>
      knex("people").insert([
        { id: 1, name: "alfred", created_at: new Date() },
        { id: 2, name: "barbra", created_at: new Date() },
        { id: 3, name: "colby", created_at: new Date() }
      ])
    );
