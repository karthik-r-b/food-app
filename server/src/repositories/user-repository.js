import { userModel } from '../helpers/models.js';

const userRepository = {
  create: (doc) => {
    return userModel.create(doc);
  },
  findOne: (where, select = null, opts = {}, populate = []) => {
    return userModel.findOne(where, select, opts).populate(populate);
  },
  find: (where, select = null, opts = {}, populate = []) => {
    return userModel.find(where, select, opts).populate(populate);
  },
  update: (where, doc, opts = {}) => {
    return userModel.updateOne(where, doc, opts).exec();
  },
  delete: (where) => {
    return userModel.remove(where).exec();
  },
  count: (where) => {
    return userModel.count(where).exec();
  },
};
export default userRepository;
