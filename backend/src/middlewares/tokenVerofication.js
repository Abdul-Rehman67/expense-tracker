const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Token = mongoose.model('Token');

const userChecker = async (req, res, next) => {
    console.log()
  const authorizationHeader = req.headers.authorization;
  console.log("authorizationHeader=====>",authorizationHeader)

  if (!authorizationHeader) {
    return res.status(401).send({ error: 'No authorization header' });
  }

 
  try {
    const decoded = jwt.verify(authorizationHeader, process.env.JWT_SECRET);
    console.log(decoded)

    const tokenRecord = await Token.findOne({ user: decoded.sub });
    console.log(tokenRecord)
    console.log(tokenRecord.token !== decoded)
    if (!tokenRecord || tokenRecord.token !== authorizationHeader) {
      return res.status(401).send({ error: 'Invalid token' });
    }

    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).send({ error: 'catch Invalid token' });
  }
};
module.exports={userChecker}