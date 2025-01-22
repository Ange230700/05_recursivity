// server\application\utils\allowedOrigins.cjs

const allowedOrigins = [
  // eslint-disable-next-line no-undef
  process.env.CLIENT_URL,
  "https://05-recursivity-client.vercel.app",
];

module.exports = allowedOrigins;
