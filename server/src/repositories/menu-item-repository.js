import { menuItemModel } from '../helpers/models.js';

const menuItemRepository = {
  create: (doc) => {
    return menuItemModel.create(doc);
  },
  findOne: (where, select = null, opts = {}, populate = []) => {
    return menuItemModel.findOne(where, select, opts).populate(populate);
  },
  find: (where, select = null, opts = {}, populate = []) => {
    return menuItemModel.find(where, select, opts).populate(populate);
  },
  update: (where, doc, opts = {}) => {
    return menuItemModel.updateOne(where, doc, opts).exec();
  },
  delete: (where) => {
    return menuItemModel.remove(where).exec();
  },
  count: (where) => {
    return menuItemModel.count(where).exec();
  },
};
export default menuItemRepository;
