const jwt = require("jsonwebtoken");
const moment = require("moment");
const Token = require("../models/Token");

const generateToken = (
  userEmail,
  expires,
  type,
  secret = process.env.JWT_SECRET
) => {
  const payload = {
    sub: userEmail,
    iat: moment().unix(),
    exp: expires.unix(),
    type,
  };
  return jwt.sign(payload, secret);
};
const saveToken = async (token, userEmail, expires, type) => {
  console.log("expires====>", token, userEmail, expires, type);
  const tokenDoc = await Token.create({
    token,
    user: userEmail,
    expires: expires.toDate(),
    type,
  });
  console.log(tokenDoc);
  return tokenDoc;
};
const verifyToken = async (token, type) => {
  const payload = jwt.verify(token, config.jwt.secret);
  console.log("payload", payload);
  const tokenDoc = await Token.findOne({ token, type, user: payload.sub });
  console.log("tokenDoc", tokenDoc);
  if (!tokenDoc) {
   return {token:false,message:'not found'}
  }
  return tokenDoc;
};
const generateAuthTokens = async (user) => {
  const accessTokenExpires = moment().add(
    process.env.JWT_ACCESS_EXPIRATION_MINUTES,
    "days"
  );
  console.log(accessTokenExpires);
  const  accessToken= generateToken(user.email, accessTokenExpires, "ACCESS");

  await saveToken(accessToken, user.email, accessTokenExpires, "ACCESS");
  return accessToken
};
module.exports = { generateAuthTokens };
