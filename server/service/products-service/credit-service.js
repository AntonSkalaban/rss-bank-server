const CreditModel = require('../../models/products-model/credit-model');

class CreditService {
  async create(credit) {
    const createdCredit = await CreditModel.create(credit);
    return createdCredit;
  }

  async getAll(user_id) {
    const credit = await CreditModel.find({ user_id });
    return credit;
  }

  async getOne(id) {
    if (!id) throw new Error('Id не найден');
    const credit = await CreditModel.findById(id);
    return credit;
  }

  async update(id, credit) {
    if (!id) throw new Error('Id не найден');
    const updateCredit = await CreditModel.findByIdAndUpdate(id, credit, { new: true });
    return updateCredit;
  }

  async delete(id) {
    if (!id) throw new Error('Id не найден');
    const credit = await CreditModel.findByIdAndDelete(id);
    return credit;
  }
}

module.exports = new CreditService();
