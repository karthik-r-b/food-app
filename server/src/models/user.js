import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        email: {
            type: String,
        },
        password: {
            type: String,
            select: false,
        },
    },
    { timestamps: true }
);
export { userSchema };
