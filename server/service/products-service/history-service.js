const HistoryModel = require('../../models/products-model/history-model');

class HistoryService {
  async create(card) {
    const createdCard = await HistoryModel.create(card);
    return createdCard;
  }

  async getAll(user_id) {
    const history = await HistoryModel.find({ user_id });
    return history;
  }

  async getOne(id) {
    if (!id) throw new Error('Id не найден');
    const history = await HistoryModel.findById(id);
    return history;
  }

  async update(id, card) {
    if (!id) throw new Error('Id не найден');
    const updateHistory = await HistoryModel.findByIdAndUpdate(id, card, { new: true });
    return updateHistory;
  }

  async delete(id) {
    if (!id) throw new Error('Id не найден');
    const history = await HistoryModel.findByIdAndDelete(id);
    return history;
  }
}

module.exports = new HistoryService();
