const productTypeDefs = `
    type Product {
        productId: ID!
        name: String!
        description: String!
        price: Float!
        categoryId: Int!
    }

    type Query {
        products(pageNumber: Int, pageSize: Int): [Product]
        product(id: ID!): Product
    }
`;

export { productTypeDefs };
