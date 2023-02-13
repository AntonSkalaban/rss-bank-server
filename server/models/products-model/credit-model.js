const { Schema, model } = require('mongoose');

const CreditSchema = new Schema({
  type: { type: String, default: 'credit' },
  user_id: { type: String, required: true },
  name: { type: String, required: true }, //На недвижимость
  date: { type: String, required: true }, // 22.12.12
  term: { type: String, required: true }, // 10 (month)
  rate: { type: Number, required: true },
  currency: { type: String, required: true }, //USD
  totalSum: { type: Number, required: true }, // 40000
  paid: { type: Number, required: true }, // 200ue },
  iban: { type: String, default: 'XX000000000130004020131314563464' }
});

module.exports = model('Credit', CreditSchema);