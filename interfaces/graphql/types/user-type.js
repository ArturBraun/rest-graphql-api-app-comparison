const userTypeDefs = `
  type User {
    userId: ID!
    email: String!
    firstName: String!
    lastName: String!
    postalCode:  String!  
    city: String! 
    country: String!  
    phone: String!
    dateOfBirth: String!
    gender: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }
`;

export { userTypeDefs };
