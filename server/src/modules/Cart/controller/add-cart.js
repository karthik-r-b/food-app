import { swaggerAddCartSpec } from '../swagger/add-cart.js';
import { addCartValidator } from '../validator/add-cart.js';
import cartRepository from '../../../repositories/cart-repository.js';
import menuItemRepository from '../../../repositories/menu-item-repository.js';
import BadRequestError from '../../../errors/bad-request-error.js';
const routes = (fastify, opts, next) => {
    fastify.post(
        '/add-cart',
        {
            preValidation: [fastify.authenticatefoodappuser],
            schema: { ...swaggerAddCartSpec, body: addCartValidator },
            attachValidation: true,
            validatorCompiler: ({ schema }) => {
                return (data) => schema.validate(data);
            },
        },
        addCart
    );
    next();

    async function addCart(req, res) {
        if (req.validationError) {
            throw new BadRequestError('Bad Request', 400, req.validationError.details);
        }
        const { itemId, quantity } = req.body;
        const menuItem = await menuItemRepository.findOne({ _id: itemId });
        if (!menuItem) {
            throw new BadRequestError(`Item with ${itemId} is Invalid`, 400);
        }
        const params = {
            item: itemId,
            quantity: quantity,
        };
        await cartRepository.create(params);
        res.send({ success: true });
    }
};
export default routes;
