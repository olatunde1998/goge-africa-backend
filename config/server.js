module.exports = ({ env }) => ({
  // host: env('HOST', '0.0.0.0'),
  host: env('https://goge-africa-backend-production.up.railway.app', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',["testKey1", "testKey2"]),
  },
});
