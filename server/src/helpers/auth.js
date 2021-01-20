import NotAuthenticatedError from '../errors/not-authenticated-error.js';
import fp from 'fastify-plugin';
const authuser = fp(async function (fastify) {
  fastify.decorate('authenticatebackofficeuser', async function (request) {
    try {
      await request.jwtVerify();
    } catch (err) {
      throw new NotAuthenticatedError('Not Authenticated', 403, err);
    }
    const loginUser = await backofficeUserRepository.findOne({
      _id: request.user.userId,
    });
    if (!loginUser) {
      throw new NotFoundError('User does not exist ', 404);
    }
    request.user = loginUser;
  });
});
export { authuser };
