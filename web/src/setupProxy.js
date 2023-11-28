const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://10000mr.com:8080",
      changeOrigin: true,
    })
  );
};
