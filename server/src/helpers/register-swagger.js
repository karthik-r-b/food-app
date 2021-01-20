import fastifySwagger from 'fastify-swagger';
import convert from 'joi-to-json';

import joi from 'joi';

const registerSwagger = (fastify) => {
  fastify.register(fastifySwagger, {
    routePrefix: '/documentation',
    swagger: {
      info: {
        title: 'Lead IAS Api',
        description: 'Lead IAS swagger api spec',
        version: '1.0.0',
      },
      host: 'localhost',
      schemes: ['https', 'http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
    exposeRoute: process.env.NODE_ENV !== 'prod',
    transform: (schema) =>
      Object.keys(schema).reduce((o, key) => {
        if (
          ['params', 'body', 'query', 'querystring'].includes(key) &&
          joi.isSchema(schema[key])
        ) {
          o[key] = convert(schema[key], false);
        } else {
          o[key] = schema[key];
        }
        return o;
      }, {}),
  });
};

export default registerSwagger;
