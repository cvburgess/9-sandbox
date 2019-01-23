const { ApolloServer, gql } = require("apollo-server");
const TestDataSource = require("./TestDataSource");

const typeDefs = gql`
  type Person {
    id: ID!
    name: String!
  }

  type Query {
    people: [Person]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    people: (parent, args, context) => context.dataSources.test.getPeople().then(v => {
      console.log(v)
      return v
    })
  }
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    test: new TestDataSource()
  })
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen(4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
