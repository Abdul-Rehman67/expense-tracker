const mongoose = require("mongoose");
const transactionSchema = mongoose.Schema({
  userId: {
    type: String,
  },
  transactionDetails: {
    type: [Object],
    of: new mongoose.Schema({}),
  },
});
const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
