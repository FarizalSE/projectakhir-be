import express from "express";
import {
    getTransaction,
    addTransaction,
    updateTransaction
} from "../controllers/TransactionController.js";
import { verifyToken } from "../midleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/token', refreshToken);

router.get('/transaction', verifyToken, getTransaction);
router.post('/add-transaction', verifyToken, addTransaction);
router.put("/update-transaction/:id", verifyToken, updateTransaction);

export default router;