const express = require('express');
const { createTransactionController } = require('../controller/transactions');
const router = express.Router()
router.post('/create-transaction',createTransactionController)
module.exports=router
