import express from "express";
import {
    getTransaction,
    addTransaction,
    updateTransaction,
    getTransactionById,
    getAllTransaction
} from "../controllers/TransactionController.js";
import { verifyToken } from "../midleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/token', refreshToken);

router.get('/transactions/:userId', verifyToken, getTransaction);
router.post('/add-transaction', verifyToken, addTransaction);
router.put("/update-transaction/:id", verifyToken, updateTransaction);
router.get('/transaction/:id', verifyToken, getTransactionById);
router.get('/transactions', verifyToken, getAllTransaction);

export default router;