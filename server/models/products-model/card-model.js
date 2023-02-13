const { Schema, model } = require('mongoose');

const CardSchema = new Schema({
  type: { type: String, default: 'card' },
  user_id: { type: String, required: true },
  cardType: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: String, required: true },
  currency: { type: String, required: true },
  balance: { type: Number, required: true },
  moneyback: { type: Number },
  cvv: { type: String, required: true },
  iban: { type: String, default: 'XX000000000130004020131314563464' }
});

module.exports = model('Card', CardSchema);
