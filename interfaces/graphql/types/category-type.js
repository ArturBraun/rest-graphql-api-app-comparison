const categoryTypeDefs = `
    type Category {
        categoryId: ID
        name: String
    }
    
    type Query {
        categories: [Category]
    }
`;

export { categoryTypeDefs };
