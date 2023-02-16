const DepositdModel = require('../../models/products-model/deposit-model');

class DepositService {
  async create(deposit) {
    const createdDeposit = await DepositdModel.create(deposit);
    return createdDeposit;
  }

  async getAll(user_id) {
    const deposits = await DepositdModel.find({ user_id });
    return deposits;
  }

  async getOne(id) {
    if (!id) throw new Error('Id не найден');
    const deposit = await DepositdModel.findById(id);
    return deposit;
  }

  async update(deposit) {
    if (!card._id) throw new Error('Id не найден');
    const updateDeposit = await DepositdModel.findByIdAndUpdate(deposit._id, deposit, { new: true });
    return updateDeposit;
  }

  async delete(id) {
    if (!id) throw new Error('Id не найден');
    const deposit = await DepositdModel.findByIdAndDelete(id);
    return deposit;
  }
}

module.exports = new DepositService();
