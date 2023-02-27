const CardModel = require('../../models/products-model/card-model');

class CardService {
  async create(card) {
    const createdCard = await CardModel.create(card);
    return createdCard;
  }

  async getAll(user_id) {
    const cards = await CardModel.find({ user_id });
    return cards;
  }

  async getOne(id) {
    if (!id) throw new Error('Id не найден');
    const card = await CardModel.findById(id);
    return card;
  }

  async update(id, card) {
    if (!id) throw new Error('Id не найден');
    const updateCard = await CardModel.findByIdAndUpdate(id, card, { new: true });
    return updateCard;
  }

  async delete(id) {
    if (!id) throw new Error('Id не найден');
    const card = await CardModel.findByIdAndDelete(id);
    return card;
  }
}

module.exports = new CardService();
