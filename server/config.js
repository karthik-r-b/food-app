const env = process.env.NODE_ENV || 'local';
const config = {
  local: {
    port: 8585,
    host: 'localhost',
    db: 'mongodb://localhost:27017/food-app',
    jwt: {
      expiresIn: '365 days',
      salt: '!@#$%^&*(',
    },
  },
  test: {
    port: 8585,
    host: 'localhost',
    db: 'mongodb://localhost:27017/lead-ias',
    jwt: {
      expiresIn: '365 days',
      salt: '!@#$%^&*(',
    },
  },
};
export default config[env];
