const categoryTypeDefs = `
    type Category {
        categoryId: ID!
        name: String!
        products: [Product]
    }
    
    type Query {
        categories: [Category]
    }
`;

export { categoryTypeDefs };
