import { swaggerMenuItemSpec } from '../swagger/menu-item.js';

const routes = (fastify, opts, next) => {
  fastify.get(
    '/add-cart',
    { schema: { ...swaggerMenuItemSpec }, logLevel: 'warn' },
    getHealth
  );
  next();

  async function getHealth() {
    return { status: 'ok' };
  }
};
export default routes;
