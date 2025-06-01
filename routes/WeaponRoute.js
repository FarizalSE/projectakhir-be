import express from "express";
import {
    getWeapons,
    getWeaponById,
    addWeapons,
    updateWeapons,
    deleteWeapons,
} from "../controllers/WeaponController.js";
import { verifyToken } from "../midleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();
// endpoint untuk mendapatkan refresh token
router.get('/token', refreshToken);
//endpoint khusus
router.get('/weapons', verifyToken, getWeapons);
router.get('/weapons/:id', verifyToken, getWeaponById);
router.post('/add-weapons', addWeapons);
router.put('/update-weapons/:id', verifyToken, updateWeapons);
router.delete('/delete-weapons/:id', verifyToken, deleteWeapons);

export default router;