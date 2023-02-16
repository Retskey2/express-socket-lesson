const userRoute = require("./user/user");

const allRoutes = [userRoute];

const initializeRoutes = (app) => {
    app.get('/api/v1/', (req, res) => {
      res.send('Hello World!')
    })

    allRoutes.forEach((router) => {
      app.use(`/api/v1/${router.name}`, router.route);
    });
    return app;
  };

  module.exports = { initializeRoutes };