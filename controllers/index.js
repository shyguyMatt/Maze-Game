const router = require('express').Router();

const homeRoutes = require('./homeRoutes.js')
const apiRoutes = require('./apiRoutes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;