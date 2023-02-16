const { Schema, model } = require('mongoose');

const DepositSchema = new Schema({
  type: { type: String, default: 'deposit' },
  user_id: { type: String, required: true },
  name: { type: String, required: true }, //Cберегай
  date: { type: String, required: true }, // 22.12.12
  term: { type: String, required: true }, // 10 (month)
  rate: { type: Number, required: true },
  currency: { type: String, required: true }, //USD
  totalSum: { type: Number, required: true }, // 40000
  iban: { type: String, default: 'XX000000000130004020131314563464' }
});

module.exports = model('Deposit', DepositSchema);