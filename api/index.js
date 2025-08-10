const { createServer, proxy } = require('vercel-http-proxy');
const appModule = require('../dist/main');

module.exports = async (req, res) => {
  // Jalankan NestJS app sebagai serverless handler
  await appModule.bootstrapServer(req, res);
};
