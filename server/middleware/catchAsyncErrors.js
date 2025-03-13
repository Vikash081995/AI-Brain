// This middleware is used to handle async errors
module.exports = (func) => (req, res, next) =>
  Promise.resolve(func(req, res, next)).catch(next);
