// server\application\utils\allowedOrigins.cjs

// eslint-disable-next-line no-undef
const allowedOrigins = [
  process.env.CLIENT_URL,
  "https://05-recursivity-client.vercel.app",
];

module.exports = allowedOrigins;
