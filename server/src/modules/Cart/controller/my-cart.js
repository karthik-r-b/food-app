import { swaggerMyCartSpec } from '../swagger/add-cart.js';
import { addCartValidator } from '../validator/add-cart.js';
import cartRepository from '../../../repositories/cart-repository.js';
import menuItemRepository from '../../../repositories/menu-item-repository.js';
import BadRequestError from '../../../errors/bad-request-error.js';
const routes = (fastify, opts, next) => {
    fastify.get(
        '/my-cart',
        {
            preValidation: [fastify.authenticatebackofficeuser],
            schema: { ...swaggerMyCartSpec },
            attachValidation: true,
            validatorCompiler: ({ schema }) => {
                return (data) => schema.validate(data);
            },
        },
        myCart
    );
    next();

    async function myCart(req, res) {
        const useer = req.user;
        const menuItem = await menuItemRepository.findOne({ _id: itemId });
        if (!menuItem) {
            throw new BadRequestError(`Item with ${itemId} is Invalid`, 400);
        }
        const params = {
            item: itemId,
            quantity: quantity,
        };
        await cartRepository.save(params);
        res.send({ success: true });
    }
};
export default routes;
