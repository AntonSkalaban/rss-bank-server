const CreditModel = require('../../models/products-model/credit-model');

class CreditService {
  async create(card) {
    const createdCard = await CreditModel.create(card);
    return createdCard;
  }

  async getAll(user_id) {
    const cards = await CreditModel.find({ user_id });
    return cards;
  }

  async getOne(id) {
    if (!id) throw new Error('Id не найден');
    const card = await CreditModel.findById(id);
    return card;
  }

  async update(card) {
    if (!card._id) throw new Error('Id не найден');
    const updateCard = await CreditModel.findByIdAndUpdate(card._id, card, { new: true });
    return updateCard;
  }

  async delete(id) {
    if (!id) throw new Error('Id не найден');
    const card = await CreditModel.findByIdAndDelete(id);
    return card;
  }
}

module.exports = new CreditService();
