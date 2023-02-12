const CardService = require('../../service/products-service/card-service');

class CardController {
  async create(req, res) {
    try {
      const card = await CardService.create(req.body);
      res.json(card);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const card = await CardService.getAll(req.params.user_id);
      console.log(req.params.user_id)
      return res.json(card);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const card = await CardService.getOne(req.params.id);
      return res.json(card);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updateCard = await CardService.update(req.body);
      return res.json(updateCard);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const card = await CardService.delete(req.params.id);
      return res.json(card);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new CardController();
