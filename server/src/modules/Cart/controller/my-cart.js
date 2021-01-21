import { swaggerMyCartSpec } from '../swagger/add-cart.js';
import config from '../../../../config.js';
import cartRepository from '../../../repositories/cart-repository.js';
const routes = (fastify, opts, next) => {
    fastify.get(
        '/my-cart',
        {
            preValidation: [fastify.authenticatefoodappuser],
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
        let responseMyCart = {};
        responseMyCart.details = [];
        responseMyCart.totalItems = 0;
        responseMyCart.totalPrice = 0;
        responseMyCart.gst = 0;
        responseMyCart.deliveryPrice = 0;
        responseMyCart.grandTotal = 0;
        const cart = await cartRepository.find(
            {},
            {},
            { lean: true },
            { path: 'item', select: 'itemName imageUrl price' }
        );
        if (cart.length) {
            let details = {};
            let totalAmount = 0;
            for (let index = 0; index < cart.length; index++) {
                details.itemName = cart[index].item.itemName;
                details.imageUrl = cart[index].item.imageUrl;
                details.price = cart[index].item.price;
                details.quantity = cart[index].quantity;
                details.cartItemId = cart[index]._id;
                totalAmount += cart[index].item.price;
            }
            responseMyCart.details.push(details);
            responseMyCart.totalPrice = totalAmount;
            responseMyCart.deliveryPrice = config.charges.deliveryPrice;
            responseMyCart.gst = (totalAmount * config.charges.gst) / 100;
            responseMyCart.totalItems = cart.length;
            responseMyCart.grandTotal = totalAmount + responseMyCart.gst;
        }
        res.send(responseMyCart);
    }
};
export default routes;
