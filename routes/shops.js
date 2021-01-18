const express = require('express');
var multer = require('multer');
const {
  createShop,
  getShop,
  orderItems,
  getShops,
  updateShop,
  deleteShop,
getShopInRadius,
getProducts
} = require('../controllers/shops');

const Shop = require('../models/Shop');
const advancedResults = require('../middleware/advancedResults');

// Include other resource routers
const productRouter = require('./products');


const router = express.Router();

const { protect, authorize } = require('../middleware/auth');
router.use('/:shopId/products', productRouter);
router.route('/:id/order-item').post(protect, orderItems);
router.route('/search')
.post( getShops);
router
  .route('/') 

  .post(protect, authorize('publisher', 'admin'), createShop);
router
  .route('/:id')
  .get(getShop)
  .put(protect, authorize('publisher', 'admin'), updateShop)
  .delete(protect, authorize('publisher', 'admin'), deleteShop);

  router.route("/products")
  .get(getProducts);

// router.put(
//   '/:id/photo',
//   protect,
//   authorize('publisher', 'admin'),
//   upload.single('file'),
//   hostelPhotoUpload
// );

router.route('/radius').get(getShopInRadius);

module.exports = router;
