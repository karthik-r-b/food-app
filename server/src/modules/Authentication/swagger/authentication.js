const swaggerAuthenticationSpec = {
    description: 'Add to cart',
    tags: ['Cart'],
    summary: 'Cart Endpoint',
    response: {
        200: {
            description: 'successful operation',
            type: 'object',
            properties: {
                token: {
                    type: 'string',
                },
            },
        },
    },
};
export { swaggerAuthenticationSpec };
