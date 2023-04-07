const orderTypeDefs = `
    type Order {
        orderId: ID!
        userId: Int!
        createdAt: String!
        totalPrice: Float!
        deliveryMethod: String!
        paymentMethod: String!
        address: String!
    }

    type OrderPosition {
        orderPositionId: ID!
        orderId: Int!
        productId: Int!
        quantity: Int!
        price: Float!
    }

    type Query {
        order(orderId: Int!): Order
        userOrders(userId: Int!): [Order]
    }
`;

export { orderTypeDefs };
