import config from './config.js';
import runDB from './src/helpers/mongo.js';
import registerRoutes from './src/helpers/routes.js';
import registerSwagger from './src/helpers/register-swagger.js';
import { errorHandlerMiddleware } from './src/helpers/error-handler.js';
import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import fastifyJwt from 'fastify-jwt';
import { authuser } from './src/helpers/auth.js';
import './src/helpers/models.js';
import multer from 'fastify-multer';

const env = process.env.NODE_ENV;

const app = fastify({
  logger: true,
});

app.register(multer.contentParser);

app.register(fastifyJwt, {
  secret: config.jwt.salt,
});

app.register(fastifyCors, {
  origin: '*',
});
app.setErrorHandler(errorHandlerMiddleware);
app.register(authuser);

registerSwagger(app);
registerRoutes(app);

// Run the server!
app.listen(config.port, config.host, function (err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  if (env !== 'test') {
    runDB();
  }
  app.log.info(`server listening on ${address}`);
});

export default app;
