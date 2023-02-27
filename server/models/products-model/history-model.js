const { Schema, model } = require('mongoose');

const HistorySchema = new Schema({
  type: { type: String, default: 'history' },
  user_id: { type: String, required: true },
  cardNumber: { type: Number, required: true },
  cardName:  { type: String, required: true },
  paymentName: {  type: String, required: true },
  sum: { type: Number, required: true },
  data: { type: String, required: true },
});

module.exports = model('History', HistorySchema);