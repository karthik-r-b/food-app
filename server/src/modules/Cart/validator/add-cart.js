import joi from 'joi';
import joiObjectId from 'joi-objectid';
const myJoiObjectId = joiObjectId(joi);

const addCartValidator = joi.object({
    itemId: myJoiObjectId().required(),
    quantity: joi.number().required(),
});
export { addCartValidator };
