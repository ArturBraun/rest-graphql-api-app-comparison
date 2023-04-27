const userTypeDefs = `
  type User {
    userId: ID!
    email: String!
    firstName: String!
    lastName: String!
    dateOfBirth: String!
    gender: String!
  }

  input UserInput {
    email: String!
    firstName: String!
    lastName: String!
    dateOfBirth: String!
    gender: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createNewUser(newUser: UserInput!): User
  }
`;

export { userTypeDefs };
