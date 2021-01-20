import { swaggerGetSpec } from '../swagger/health.js';

const routes = (fastify, opts, next) => {
  fastify.get(
    '/',
    { schema: { ...swaggerGetSpec }, logLevel: 'warn' },
    getHealth
  );
  next();

  async function getHealth() {
    return { status: 'ok' };
  }
};

export default routes;
