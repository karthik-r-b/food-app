import RequestError from '../errors/request-error.js';

async function errorHandlerMiddleware(error, request, reply) {
  //logging error
  request.log.error(error);

  if (error instanceof RequestError) {
    reply
      .code(error.statusCode)
      .send({ success: false, message: error.message, meta: error.meta });
  } else {
    reply.code(500).send({ success: false, message: 'Internal Server Error' });
  }
}
export { errorHandlerMiddleware };
