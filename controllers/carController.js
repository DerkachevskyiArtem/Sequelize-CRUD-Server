const { Car } = require('../models');

module.exports.createCar = async (req, res, next) => {
  const { body: carData } = req;

  const car = await Car.create(carData);

  res.status(201).send(car);
};

module.exports.deleteCar = async (req, res, next) => {
  const {
    params: { carId },
  } = req;

  await Car.destroy({
    where: {
      id: carId,
    },
  });

  res.status(200).send(`Car was deleted`);
};

module.exports.updateCar = async (req, res, next) => {
  const {
    params: { carId },
    body: newCarData,
  } = req;

  const result = await Car.update(newCarData, {
    where: {
      id: carId,
    },
    returning: true,
  });

  const [rowsUpdated, [updatedCar]] = result;

  res.status(200).send(updatedCar);
};

module.exports.getCars = async (req, res, next) => {

  const cars = await Car.findAll();

  res.status(200).send(cars);
};

module.exports.getCar = async (req, res, next) => {
  const {
    params: { carId },
  } = req;

  const car = await Car.findByPk(carId);

  res.status(201).send(car);
};
