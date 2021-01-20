import { cartModel } from '../helpers/models.js';

const cartRepository = {
    create: (doc) => {
        return cartModel.create(doc);
    },
    findOne: (where, select = null, opts = {}, populate = []) => {
        return cartModel.findOne(where, select, opts).populate(populate);
    },
    find: (where, select = null, opts = {}, populate = []) => {
        return cartModel.find(where, select, opts).populate(populate);
    },
    update: (where, doc, opts = {}) => {
        return cartModel.updateOne(where, doc, opts).exec();
    },
    delete: (where) => {
        return cartModel.remove(where).exec();
    },
    count: (where) => {
        return cartModel.count(where).exec();
    },
};
export default cartRepository;
