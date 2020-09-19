const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  img: {
    data: Buffer,
    contentType: String,
  },
  roomNumber: {
    type: Number,
    // required: [true, 'Please add  RoomNumber'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
  floor: {
    type: String,
    required: [true, 'Please add flour of room'],
  },

  ac: {
    type: Boolean,
    default: false,
  },
  tv: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },

  hostel: {
    type: mongoose.Schema.ObjectId,
    ref: 'Hostel',
    // required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Room', RoomSchema);
