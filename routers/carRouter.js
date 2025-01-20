const carRouter = require('express').Router();
const carController = require('../controllers/carController');

carRouter.post('/', carController.createCar);
carRouter.get('/', carController.getCars);

carRouter.get('/:userId', carController.getCar);
carRouter.put('/:userId', carController.updateCar);
carRouter.delete('/:userId', carController.deleteCar);

module.exports = carRouter;
