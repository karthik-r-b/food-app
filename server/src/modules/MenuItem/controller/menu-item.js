import { swaggerMenuItemSpec } from '../swagger/menu-item.js';
import menuItemRepository from '../../../repositories/menu-item-repository.js';
const routes = (fastify, opts, next) => {
    fastify.get(
        '/',
        {
            preValidation: [fastify.authenticatefoodappuser],
            schema: { ...swaggerMenuItemSpec },
        },
        menuItem
    );
    next();

    async function menuItem(req, res) {
        const menuItem = await menuItemRepository.find({});
        res.send(menuItem);
    }
};
export default routes;
