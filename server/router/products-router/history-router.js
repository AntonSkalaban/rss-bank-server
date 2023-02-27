const Router = require('express').Router;
const HistoryController = require('../../controllers/products-controller/history-controller');

const historyRouter = new Router();

historyRouter.post('/history', HistoryController.create);
historyRouter.get('/history/:user_id', HistoryController.getAll);
historyRouter.get('/history/:id', HistoryController.getOne);
historyRouter.put('/history/:id', HistoryController.update);
historyRouter.delete('/history/:id', HistoryController.delete);

module.exports = historyRouter;