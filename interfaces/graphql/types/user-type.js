const userTypeDefs = `
  type User {
    userId: ID!
    email: String!
    firstName: String!
    surname: String!
    dateOfBirth: String!
    gender: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }
`;

export { userTypeDefs };
