import mongoose from 'mongoose';
import { menuItemSchema } from '../models/menu-item.js';
import { cartItemSchema } from '../models/cart-item.js';
import { userSchema } from '../models/user.js';

const userModel = mongoose.model('user', userSchema);
const cartModel = mongoose.model('cart', cartItemSchema);
const menuItemModel = mongoose.model('menuitem', menuItemSchema);
export { userModel, cartModel, menuItemModel };
