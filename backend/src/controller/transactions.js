const { response } = require("../dto/send.response");
const createTransactionController = async (req, res) => {
  const userEmail = req.userEmail;
  const payload = req.body
   payload = { ...transactionDetails, userEmail };   
  console.log(payload);
};
module.exports = { createTransactionController };
