const TransactionSchema = require('../models/Transaction');

const createTransaction = async (payload) => {
   let create = await TransactionSchema.create(payload)
   console.log(create)
   return create
  };
  module.exports={createTransaction}