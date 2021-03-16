const jwt = require("jsonwebtoken");

const auth = (request, response, next) => {
  try {
    const token = request.header("x-access-token");
    if (!token) {
      return response
        .status(401)
        .json({ msg: "No authentication token, access denied" });
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      return response
        .status(401)
        .json({ msg: "Token verification failed, authorization denied" });
    }
    request.user = verified.id;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { auth: auth };
