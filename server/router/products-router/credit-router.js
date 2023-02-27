const Router = require('express').Router;
const CreditController = require('../../controllers/products-controller/credit-controller');

const creditRouter = new Router();

creditRouter.post('/credits', CreditController.create);
creditRouter.get('/credits/:user_id', CreditController.getAll);
creditRouter.get('/credits/:id', CreditController.getOne);
creditRouter.put('/credits/:id', CreditController.update);
creditRouter.delete('/credits/:id', CreditController.delete);

module.exports = creditRouter;
