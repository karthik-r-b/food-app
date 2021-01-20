import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const menuItemSchema = new Schema(
  {
    itemName: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    price: {
      type: Number,
    },
    offerPrice: {
      type: Number,
    },
    totalQuantity: {
      type: Number,
    },
  },
  { timestamps: true }
);
export { menuItemSchema };
