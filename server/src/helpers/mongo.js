import mongoose from 'mongoose';
import config from '../../config.js';

const runDB = () => {
  return mongoose.connect(config.db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default runDB;
