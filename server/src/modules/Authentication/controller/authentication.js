import { swaggerAuthenticationSpec } from '../swagger/authentication.js';

const routes = (fastify, opts, next) => {
  fastify.get(
    '/add-cart',
    { schema: { ...swaggerAuthenticationSpec }, logLevel: 'warn' },
    getHealth
  );
  next();

  async function getHealth() {
    return { status: 'ok' };
  }
};
export default routes;
