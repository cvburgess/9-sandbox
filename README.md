# Intro to GraphQL

This repository has a trivial example of a GraphQL server that we can use to
understand basic concepts like schemas, resolvers, queries, and mutations.

This code was originally part of the [Intro to GraphQL] workshop.

**NOTE:** Most of this code is taken from the [Apollo Server docs].

## Getting started

1. Install the latest version of [Node JS]
2. Run `npm install` in the terminal
3. Run `npm start` to create the server
4. Open your browser to the [GraphQL Playground] created by the server

[apollo server docs]: https://www.apollographql.com/docs/apollo-server/getting-started.html
[intro to graphql]: https://www.meetup.com/GraphQL-Tampa-Bay/events/257668133/
[node js]: https://nodejs.org/en/
[graphql playground]: http://localhost:4000
[nodemon]: https://nodemon.io/

## About this server

This server uses [Nodemon] to automatically restart the server as you make
changes to the code, so play around and see what happens!

A production GraphQL has many more layers of complexity added, like
authentication, authorization, data sources, caching, batching, and more.

The point of this server is to give you a starting point to see how a simple
GraphQL server functions and grow our knowledge over time.
