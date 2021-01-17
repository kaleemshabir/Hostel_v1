const express = require('express');
var multer = require('multer');
const {
  createShop,
  getShop,
  getShops,
  updateShop,
  deleteShop,
  uploadItems,
  orderItems
} = require('../controllers/shops');

const Hostel = require('../models/Shop');
const advancedResults = require('../middleware/advancedResults');

// Include other resource routers
const roomRouter = require('./rooms');
const reviewsRouter = require('./reviews');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .post(protect, authorize('publisher', 'admin'), createShop);
router
  .route('/:id')
  .get(getShop)
  // .put(protect, authorize('publisher', 'admin'), updateShop)
  // .delete(protect, authorize('publisher', 'admin'), deleteShop);
// router.put(
//   '/:id/photo',
//   protect,
//   authorize('publisher', 'admin'),
//   upload.single('file'),
//   hostelPhotoUpload
// );

// router.route('/radius/:zipcode/:distance').get(getHostelInRadius);

module.exports = router;
