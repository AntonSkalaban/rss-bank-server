const Router = require('express').Router;
const HistoryController = require('../../controllers/products-controller/history-controller');

const historyRouter = new Router();

creditRouter.post('/history', CreditController.create);
creditRouter.get('/history/:user_id', CreditController.getAll);
creditRouter.get('/history/:id', CreditController.getOne);
creditRouter.put('/history/:id', CreditController.update);
creditRouter.delete('/history/:id', CreditController.delete);

module.exports = historyRouter;