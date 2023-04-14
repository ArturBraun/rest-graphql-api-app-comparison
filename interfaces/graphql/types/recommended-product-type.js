const recommendedProductTypeDefs = `
    type RecommendedProduct {
        recommendedProductId: ID!
        productId: Int!
        createdAt: String!
        product: Product
    }

    type Query {
        recommendedProducts(limit: Int): [RecommendedProduct]
    }
`;

export { recommendedProductTypeDefs };
