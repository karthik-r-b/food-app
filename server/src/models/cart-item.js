import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const cartItemSchema = new Schema(
    {
        item: {
            type: Schema.ObjectId,
            ref: 'menuItem',
        },
        quantity: {
            type: Number,
        },
        userId: {
            type: Schema.ObjectId,
            ref: 'user',
        },
    },
    { timestamps: true }
);
export { cartItemSchema };
