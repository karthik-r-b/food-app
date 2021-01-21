const swaggerMenuItemSpec = {
    description: 'Menu Items',
    tags: ['MenuItem'],
    summary: 'MenuItems Endpoint',
    response: {
        200: {
            description: 'successful operation',
            type: 'array',
            properties: {
                itemName: {
                    type: 'string',
                },
                imageUrl: {
                    type: 'string',
                },
                price: {
                    type: 'string',
                },
                totalQuantity: {
                    type: 'number',
                },
            },
        },
    },
};
export { swaggerMenuItemSpec };
