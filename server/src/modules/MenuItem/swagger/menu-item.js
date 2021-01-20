const swaggerMenuItemSpec = {
  description: 'Menu Items',
  tags: ['MenuItem'],
  summary: 'MenuItems Endpoint',
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
export { swaggerMenuItemSpec };
