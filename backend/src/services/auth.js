const userSchema = require("../models/User");
const { getUserByEmail, isPasswordMatch } = require("./userService");
const bcrypt = require("bcrypt");

const login = async (payload) => {
  let isMatch = isPasswordMatch(payload);
  if (isMatch) {

  } else {
    return {isMatch:false}
  }
};
const createUser = async (payload) => {
  try {
    let user = await getUserByEmail(payload.email);
    if (!user) {
      payload.password = await bcrypt.hash(payload.password, 8);
      let userHaveMoneyIn = [{name:'cash',amount:0},{name:'account',amount:0},{name:'savings',amount:0}]
      payload = {...payload,userHaveMoneyIn}
      console.log(payload)
      let createUser = await userSchema.create(payload);
      if (createUser) {
        return { userExits: false };
      }
    } else {
      return { userExits: true };
    }
  } catch (e) {
    console.log(e);
    return { userExits: false, error: e.message };
  }
};
module.exports = { login, createUser };
