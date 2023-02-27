const Router = require('express').Router;
const HistoryController = require('../../controllers/products-controller/history-controller');

const historyRouter = new Router();

creditRouter.post('/history', HistoryController.create);
creditRouter.get('/history/:user_id', HistoryController.getAll);
creditRouter.get('/history/:id', HistoryController.getOne);
creditRouter.put('/history/:id', HistoryController.update);
creditRouter.delete('/history/:id', HistoryController.delete);

module.exports = historyRouter;