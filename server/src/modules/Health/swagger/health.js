const swaggerGetSpec = {
  description: 'To get the health status',
  tags: ['Health'],
  summary: 'Health Endpoint',
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        status: { type: 'string', example: 'Ok' },
      },
    },
  },
};

export { swaggerGetSpec };
