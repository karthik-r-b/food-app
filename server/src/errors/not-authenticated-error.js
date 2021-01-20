import RequestError from './request-error.js';

class NotAuthenticatedError extends RequestError {
  constructor(message, statusCode, meta = {}) {
    super(message, statusCode, meta);
    Error.captureStackTrace(this, NotAuthenticatedError);
    let proto = Object.getPrototypeOf(this);
    proto.name = 'NotAuthenticatedError';
    this.meta = meta;
  }

  toString() {
    return `${super.toString()} ${JSON.stringify(this.meta)}`;
  }
}

export default NotAuthenticatedError;
