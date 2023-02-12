const Router = require('express').Router;
const CardController = require('../../controllers/products-controller/card-controller');

const cardRouter = new Router();

cardRouter.post('/cards', CardController.create);
cardRouter.get('/cards/:user_id', CardController.getAll);
cardRouter.get('/cards/:id', CardController.getOne);
cardRouter.put('/cards', CardController.update);
cardRouter.delete('/cards/:id', CardController.delete);

module.exports = cardRouter;
