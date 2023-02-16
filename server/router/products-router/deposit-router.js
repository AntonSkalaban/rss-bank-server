const Router = require('express').Router;
const DepositController = require('../../controllers/products-controller/deposit-controller');

const depositRouter = new Router();

depositRouter.post('/deposits', DepositController.create);
depositRouter.get('/deposits/:user_id', DepositController.getAll);
depositRouter.get('/deposits/:id', DepositController.getOne);
depositRouter.put('/deposits', DepositController.update);
depositRouter.delete('/deposits/:id', DepositController.delete);

module.exports = depositRouter;