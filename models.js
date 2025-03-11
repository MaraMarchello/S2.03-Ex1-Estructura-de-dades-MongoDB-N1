const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  postalAddress: {
    street: String,
    city: String,
    postalCode: String,
    country: String
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  registrationDate: {
    type: Date,
    default: Date.now
  },
  recommendedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  }
});

const glassesSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  mountingType: {
    type: String,
    enum: ['floating', 'paste', 'metal'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  provider: {
    type: String,
    required: true
  }
});

const saleSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  glasses: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Glasses',
    required: true
  },
  saleDate: {
    type: Date,
    default: Date.now
  },
  recommendedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  }
});

const Customer = mongoose.model('Customer', customerSchema);
const Glasses = mongoose.model('Glasses', glassesSchema);
const Sale = mongoose.model('Sale', saleSchema);

module.exports = { Customer, Glasses, Sale };