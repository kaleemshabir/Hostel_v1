const mongoose = require('mongoose');

const HostelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters'],
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },

  phone: {
    type: String,
    maxlength: [20, 'Phone number cannot be longer than 20 characters'],
  },
  email: {
    type: String,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please add a valid email',
    ],
  },
  address: {
    type: String,
    required: [true, 'Please add an address'],
  },
  location: {
    // GeoJSON Point
    type: {
      type: String,
      enum: ['Point'],
      //required: true,
    },
    coordinates: {
      type: [Number],
      //required: true,
      index: '2dsphere',
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be atleat 1'],
    max: [10, 'Rating must can not be more than 10'],
  },
  photo: {
    type: String,
    default: 'no-photo.jpg',
  },
  mess: {
    type: String,
    default: true,
  },
  typeOfMealServed: {
    type: [String],
    enum: ['Breakfast', 'Lunch', 'Dinner'],
  },
  hostelType: {
    type: String,
    required: [true, 'Please add Hostel type i.e Male hostel or Female hostel'],
    enum: ['maleHostel', 'femaleHostel'],
  },
  guestEntrance: {
    type: Boolean,
    default: false,
  },
  advanceSecurity: Number,
  wifi: {
    type: Boolean,
    default: true,
  },

  laundary: {
    type: Boolean,
    default: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Hostel', HostelSchema);
