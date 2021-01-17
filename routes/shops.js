const express = require('express');
var multer = require('multer');
const {
  createShop,
  getShop,
  orderItems,
  getShops,
  updateShop,
  deleteShop,
getShopInRadius
} = require('../controllers/shops');

const Hostel = require('../models/Shop');
const advancedResults = require('../middleware/advancedResults');

// Include other resource routers
const roomRouter = require('./rooms');
const reviewsRouter = require('./reviews');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');
const Shop = require('../models/Shop');
router.route('/:id/order-item').post(protect, orderItems);

router
  .route('/')
  .get(advancedResults(Shop), getShops)
  .post(protect, authorize('publisher', 'admin'), createShop);
router
  .route('/:id')
  .get(getShop)
  .put(protect, authorize('publisher', 'admin'), updateShop)
  .delete(protect, authorize('publisher', 'admin'), deleteShop);
// router.put(
//   '/:id/photo',
//   protect,
//   authorize('publisher', 'admin'),
//   upload.single('file'),
//   hostelPhotoUpload
// );

router.route('/radius').get(getShopInRadius);

module.exports = router;
