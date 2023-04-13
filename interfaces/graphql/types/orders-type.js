const orderTypeDefs = `
    type Order {
        orderId: ID!
        userId: Int!
        createdAt: String!
        totalPrice: Float!
        deliveryMethod: String!
        paymentMethod: String!
        address: String!
        postalCode:  String!  
        city: String! 
        country: String!  
        phone: String!
        orderPositions: [OrderPosition]
    }

    type OrderPosition {
        orderPositionId: ID!
        orderId: Int!
        productId: Int!
        quantity: Int!
        price: Float!
        product: Product
    }

    input OrderInput {
        userId: Int!
        deliveryMethod: String!
        paymentMethod: String!
        address: String!
        postalCode:  String!  
        city: String! 
        country: String!  
        phone: String!
        orderPositions: [OrderPositionInput]!
    }

    input OrderPositionInput {
        productId: Int!
        quantity: Int!
    }

    type Query {
        order(orderId: ID!): Order
        userOrders(userId: ID!): [Order]
    }

    type Mutation {
        placeOrder(order: OrderInput!): Order
    }
`;

export { orderTypeDefs };
