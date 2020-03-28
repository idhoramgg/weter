const requestIp = require("request-ip");

const ipMiddleware = function(req, res, next) {
  const clientIp = requestIp.getClientIp(req);
  next();

  console.log(clientIp);
};

export default ipMiddleware;
