// using the mini project as a reference!

// INPUT TYPE TO HANDLE A LOT OF PARAMETERS
// Input types are special object types that allow you to provide hierarchical data as arguments to fields
// https://www.apollographql.com/docs/apollo-server/schema/schema/

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCountL Int
    savedBooks: [Book]
  }
  
  type Book {
      bookId: ID!
      authors: [String!]
      description: String!
      title: String!
      image: String!
      link: String!
  }

  type Auth {
      token: Int
      user: User
  }

  input BookInput {
      authors: [String!]
      description: String!
      title: String!
      bookId: ID!
      image: String!
      link: String!
  }

  type Query {
      me: User
  }

  type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      saveBook(savedBook: BookInput!): User
      removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
