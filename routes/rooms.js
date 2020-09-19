const express = require('express');
const {
  getrooms,
  getroom,
  addRoom,
  updateRoom,
  deleteRoom,
} = require('../controllers/rooms');

const Room = require('../models/Room');
const advancedResults = require('../middleware/advancedResults');

const router = express.Router({ mergeParams: true });

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(
    advancedResults(Room, {
      path: 'hostel',
      select: 'name description',
    }),
    getrooms
  )
  .post(protect, authorize('publisher', 'admin'), addRoom);

router
  .route('/:id')
  .get(getroom)
  .put(protect, authorize('publisher', 'admin'), updateRoom)
  .delete(protect, authorize('publisher', 'admin'), deleteRoom);

module.exports = router;
