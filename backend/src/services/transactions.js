const TransactionSchema = require("../models/Transaction");

const createTransaction = async (payload) => {
  let transaction = await TransactionSchema.create(payload);
  await transaction.createTransaction();
  return transaction;
};
const getTransactionByEmail = async (email) => {
  try {
    let findTranaction = await TransactionSchema.find({ userEmail: email });

    return findTranaction;
  } catch (error) {
    throw error;
  }
};
const updateTransaction = async (email, payload) => {
   try {
      console.log(payload)
     let transaction = await TransactionSchema.findById(payload.id);

     if (!transaction) {
       throw new Error("Transaction not found");
     }
 
     let result = await transaction.updateTransactionS(payload.id,payload);
     return result;
   } catch (error) {
     throw error;
   }
 };
 
 
 
const deleteTransaction = async (id) => {
  try {
    let deleteTransaction = await TransactionSchema.findByIdAndDelete(id.id);
    console.log(deleteTransaction);
    return deleteTransaction;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  createTransaction,
  getTransactionByEmail,
  updateTransaction,
  deleteTransaction,
};
