const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/purchases",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );
};
