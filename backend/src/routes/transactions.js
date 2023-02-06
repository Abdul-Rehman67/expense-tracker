const express = require('express');
const { createTransactionController, getAllTransactionOfUser, updateTransactionCon, deleteTransactionCon } = require('../controller/transactions');
const { userChecker } = require('../middlewares/tokenVerofication');
const router = express.Router()
router.post('/create-transaction',userChecker, createTransactionController)
router.get('/get-all-transaction',userChecker, getAllTransactionOfUser)
router.post('/update-transaction',userChecker, updateTransactionCon)
router.post('/delete-transaction',userChecker, deleteTransactionCon)
module.exports=router
