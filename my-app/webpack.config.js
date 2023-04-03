
module.exports = {
  devServer: {
    onAfterSetupMiddleware: function (devServer) {
      devServer.app.use(function (req, res, next) {
        res.setHeader('Cache-Control', 'no-store');
        next();
      });
    },
    onBeforeSetupMiddleware: function (devServer) {
      devServer.app.use(function (req, res, next) {
        res.setHeader('Cache-Control', 'no-store');
        next();
      });
    }
  }
};
