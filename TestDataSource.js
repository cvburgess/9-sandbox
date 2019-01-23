const Knex = require("knex");
const { SQLDataSource } = require("datasource-sql");

const MINUTE = 60 * 1000;

// const knex = Knex({
//   client: "sqlite3",
//   connection: {
//     filename: "./test.sqlite3"
//   }
// });

const knex = Knex({
  client: "pg",
  connection: "postgresql://localhost:5400/test"
});

class TestDataSource extends SQLDataSource {
  constructor() {
    super();
    // Add your instance of Knex to the DataSource
    this.knex = knex;
  }

  getPeople() {
    // This can be any valid Knex query
    const query = this.db.select().from("people");
    // knex.raw(query.toString()).then(console.log)

    // A promise without any caching or batching
    return query;

    // Batch the query with DataLoader
    // return this.getBatched(query);

    // Cache the result for 1 minute
    // return this.getCached(query, MINUTE).then(console.log);

    // Batch the query and cache the result for 1 minute
    return this.getBatchedAndCached(query, MINUTE);
  }
}

module.exports = TestDataSource;
