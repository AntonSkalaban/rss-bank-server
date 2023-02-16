const DepositService = require('../../service/products-service/deposit-service');

class DepositController {
  async create(req, res) {
    try {
      const deposit = await DepositService.create(req.body);
      res.json(deposit);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const deposits = await DepositService.getAll(req.params.user_id);
      console.log(req.params.user_id)
      return res.json(deposits);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const deposit = await DepositService.getOne(req.params.id);
      return res.json(deposit);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updateDeposit = await DepositService.update(req.body);
      return res.json(updateDeposit);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const deposit = await DepositService.delete(req.params.id);
      return res.json(deposit);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new DepositController();
