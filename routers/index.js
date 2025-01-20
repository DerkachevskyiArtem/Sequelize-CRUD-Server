const rootRouter = require('express').Router();
const carRouter = require('./carRouter');

rootRouter.use('/cars', carRouter);


module.exports = rootRouter;
