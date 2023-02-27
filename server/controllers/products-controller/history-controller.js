const HistoryService = require('../../service/products-service/history-service');

class HistoryController {
  async create(req, res) {
    try {
      const history = await HistoryService.create(req.body);
      console.log(req.body)
      res.json(history);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const history = await HistoryService.getAll(req.params.user_id);
      return res.json(history);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const history = await HistoryService.getOne(req.params.id);
      return res.json(history);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updateHistory = await HistoryService.update(req.body);
      return res.json(updateHistory);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const history = await HistoryService.delete(req.params.id);
      return res.json(history);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new HistoryController();
