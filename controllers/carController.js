module.exports.createCar = async (req, res, next) => {
  res.status(201).send('cre');
};

module.exports.deleteCar = async (req, res, next) => {
  const {
    params: { userId },
  } = req;

  res.status(200).send('del');
};

module.exports.updateCar = async (req, res, next) => {
  const {
    params: { userId },
  } = req;

  res.status(200).send('upd');
};

module.exports.getCars = async (req, res, next) => {
  res.status(200).send('all');
};

module.exports.getCar = async (req, res, next) => {
  const {
    params: { userId },
  } = req;

  res.status(201).send('one');
};
