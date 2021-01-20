import fs from 'fs';
import modules from '../modules/index.js';

const registerRoutes = (fastify) => {
  Object.keys(modules).forEach((key) => {
    try {
      const module = modules[key];
      if (!module.enable || !module.url) return;
      let moduleName = module.name;
      let controllers = fs.readdirSync(
        `./src/modules/${moduleName}/controller`
      );
      controllers.forEach((controller) => {
        const routers = import(
          `../modules/${moduleName}/controller/${controller}`
        );
        fastify.register(routers, { prefix: `/api/v1/${module.url}` });
      });
    } catch (e) {
      fastify.log.error(e);
    }
  });
};

export default registerRoutes;
