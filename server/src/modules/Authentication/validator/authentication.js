import joi from 'joi';

const authenticationValidator = joi.object({
    tokenId: joi.string().required(),
});
export { authenticationValidator };
