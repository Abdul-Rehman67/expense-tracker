const userSchema = require("../models/User");
const getUserByEmail = async (email) => {
  console.log(email);
  return await userSchema.findOne({ email: email });
};
const isPasswordMatch = async (password, email) => {
  let user = await getUserByEmail({ email: email });
  if (user) {
    let compare = await bcrypt.compare(password, user.password);
    return compare;
  } else {
    return false
  }
};

module.exports = { getUserByEmail, isPasswordMatch };
