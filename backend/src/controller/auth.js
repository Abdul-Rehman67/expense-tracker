const { createUser } = require("../services/auth");
const {response} = require("../dto/send.response");

const createUserController = async  (req, res) => {
  const payload = req.body;
  
  let create = await createUser(payload);
  console.log("create",create)
  if (create.userExits && create.error) {
    res.send(response(false, "An error occured", {}));
  }
  if (!create.userExits) {
    res.send(response(true, "create successfully", {}));
  } else {
    res.send(response(false, "User Already exists", {}));
  }
};
const loginController = (req, res) => {
const payload = req.body


};
module.exports = { createUserController, loginController };
