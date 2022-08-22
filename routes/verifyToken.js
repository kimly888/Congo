const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        // If token is not valid or has expired
        res.status(403).json("Token is not valid!");
      } else {
        req.user = user;
      console.log("Verified!");
      next();
      }
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      console.log("Authorized!");
      next();
    } else {
      res.status(403).json("Request denied!");
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuthorization };
