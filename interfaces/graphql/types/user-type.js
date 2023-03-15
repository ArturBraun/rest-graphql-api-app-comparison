const userTypeDefs = `
  type User {
    id: ID
    firstName: String
    surname: String
    dateOfBirth: String
    gender: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }
`;

export { userTypeDefs };
