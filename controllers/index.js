const router = require('express').Router();

const apiRoutes = require('./api');

// homeRoutes = require('./home-routes.js.js')

//const dashboardRoutes = require('./dashboard-routes.js.js');

router.use('/api', apiRoutes);

// router.use('/', homeRoutes);

// router.use('/dashboard', dashboardRoutes)

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;