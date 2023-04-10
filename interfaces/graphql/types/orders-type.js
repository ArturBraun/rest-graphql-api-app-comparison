const orderTypeDefs = `
    type Order {
        orderId: ID!
        userId: Int!
        createdAt: String!
        totalPrice: Float!
        deliveryMethod: String!
        paymentMethod: String!
        address: String!
        orderPositions: [OrderPosition]!
    }

    type OrderPosition {
        orderPositionId: ID!
        orderId: Int!
        productId: Int!
        quantity: Int!
        price: Float!
        product: Product
    }

    type Query {
        order(orderId: ID!): Order
        userOrders(userId: ID!): [Order]
    }
`;

export { orderTypeDefs };
