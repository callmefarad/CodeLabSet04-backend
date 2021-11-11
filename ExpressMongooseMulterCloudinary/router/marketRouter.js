const express = require('express');
const router = express.Router();
const fileUpload = require('../config/multer')
const {allMarket, newMarket, deleteMarket, singleMarket, updateMarket} = require('../controller/marketController');

// all market
router.get('/market', allMarket);
// add a market
router.post('/market', fileUpload, newMarket);
// delete a market
router.delete('/market/:id', deleteMarket);
// single market
router.get('/market/:id', singleMarket);
// update a market
router.patch('/market/:id', fileUpload, updateMarket);

module.exports = router;