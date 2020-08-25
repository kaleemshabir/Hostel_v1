const express = require('express');
const {
  getHostels,
  getHostel,
  createHostel,
  updateHostel,
  deleteHostel,
} = require('../controllers/hostels');

const router = express.Router();
router.route('/').get(getHostels).post(createHostel);
router.route('/:id').get(getHostel).put(updateHostel).delete(deleteHostel);

module.exports = router;
