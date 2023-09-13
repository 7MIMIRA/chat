const express = require('express');
const router = express.Router();

router.use(require('./get/index.js'))
router.use(require('./post/index.js'))

module.exports = router;