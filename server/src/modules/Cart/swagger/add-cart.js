const swaggerAddCartSpec = {
    description: 'Add to cart',
    tags: ['Cart'],
    summary: 'Cart Endpoint',
    response: {
        200: {
            description: 'successful operation',
            type: 'object',
            properties: {
                success: { type: 'boolean' },
            },
        },
    },
};
const swaggerMyCartSpec = {
    description: 'Add to cart',
    tags: ['Cart'],
    summary: 'Cart Endpoint',
    response: {
        200: {
            description: 'successful operation',
            type: 'object',
            properties: {
                details: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            itemName: { type: 'string' },
                            price: { type: 'number' },
                            quantity: { type: 'number' },
                            cartItemId: { type: 'string' },
                            imageUrl: { type: 'string' },
                        },
                    },
                },
                totalItems: { type: 'number' },
                totalPrice: { type: 'number' },
                gst: { type: 'number' },
                deliveryPrice: { type: 'number' },
                grandTotal: { type: 'number' },
            },
        },
    },
};
export { swaggerAddCartSpec, swaggerMyCartSpec };
