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
        products(pageNumber: Int, pageSize: Int): [Product]
        product(id: ID!): Product
    }
`;

export { productTypeDefs };
