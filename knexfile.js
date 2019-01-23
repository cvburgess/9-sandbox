// Update with your config settings.

module.exports = {
  // development: {
  //   client: "sqlite3",
  //   connection: {
  //     filename: "./test.sqlite3"
  //   },
  // }
  development: {
    client: "pg",
    connection: "postgresql://localhost:5400/test"
  }
};
