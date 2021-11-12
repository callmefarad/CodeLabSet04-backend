const express = require('express');
const router = express.Router();
const imageUploader = require('../config/multer')
const {newMarket,} = require('../controller/marketController')

// new market
router.post('/market', imageUploader, newMarket)

module.exports = router;