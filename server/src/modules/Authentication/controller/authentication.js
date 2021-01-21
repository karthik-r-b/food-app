import { swaggerAuthenticationSpec } from '../swagger/authentication.js';
import { authenticationValidator } from '../validator/authentication.js';
import userRepository from '../../../repositories/user-repository.js';
import NotFoundError from '../../../errors/not-found-error.js';
import BadRequestError from '../../../errors/bad-request-error.js';
import config from '../../../../config.js';
import { verifyToken } from '../../../utils/verify-google-token.js';
const routes = (fastify, opts, next) => {
    fastify.post(
        '/google-login',
        {
            schema: { ...swaggerAuthenticationSpec, body: authenticationValidator },
            attachValidation: true,
            validatorCompiler: ({ schema }) => {
                return (data) => schema.validate(data);
            },
        },
        authentication
    );
    next();

    async function authentication(req, res) {
        try {
            if (req.validationError) {
                throw new BadRequestError('Bad Request', 400, req.validationError.details);
            }
            const { tokenId } = req.body;
            const response = await verifyToken(tokenId);
            const { email_verified, email } = response.payload;
            if (!email_verified) {
                throw new BadRequestError('Email Not Authenticated', 400);
            } else {
                const user = await userRepository.findOne({ email });
                if (user) {
                    const accessToken = fastify.jwt.sign(
                        {
                            userId: user._id,
                            email: user.email,
                        },
                        { expiresIn: config.jwt.expiresIn }
                    );
                    res.send({ token: accessToken });
                } else {
                    throw new NotFoundError('User does not exist', 404);
                }
            }
        } catch (err) {
            throw new BadRequestError('Bad Request', 400, err);
        }
    }
};
export default routes;
