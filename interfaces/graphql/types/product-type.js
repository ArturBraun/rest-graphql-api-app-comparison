const productTypeDefs = `
    type Product {
        productId: ID!
        name: String!
        description: String!
        price: Float!
        categoryId: Int!
        category: Category
    }

    type Query {
        products(categoryId: Int, pageNumber: Int, pageSize: Int): [Product]
        product(id: ID!): Product
    }
`;

export { productTypeDefs };
