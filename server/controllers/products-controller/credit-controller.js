const CreditService = require('../../service/products-service/credit-service');

class CreditController {
  async create(req, res) {
    try {
      const credit = await CreditService.create(req.body);
      res.json(credit);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const credits = await CreditService.getAll(req.params.user_id);
      console.log(req.params.user_id)
      return res.json(credits);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const credit = await CreditService.getOne(req.params.id);
      return res.json(credit);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updateCredit = await CreditService.update(req.params.id, req.body);
      return res.json(updateCredit);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const credit = await CreditService.delete(req.params.id);
      return res.json(credit);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new CreditController();
