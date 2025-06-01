import express from "express";
import {
    getUserById,
    getUsers,
    createUser,
    deleteUser,
    loginHandler,
    updateUser,
    logout,
    getMe,
} from  "../controllers/UserController.js";
import { verifyToken } from "../midleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

//endpoint akses token
router.get ('/token', refreshToken);
//endpoint authenticate
router.post('/login', loginHandler);
router.delete('/logout', logout);
router.post('/register', createUser);
//endpoint khusus verify token
router.get('/users', verifyToken, getUsers);
router.get('/users/:id', verifyToken, getUserById);
router.delete('/delete-user/:id', verifyToken, deleteUser);
router.put('/update-user/:id', verifyToken, updateUser);
router.get('/me', verifyToken, getMe); // Get current user info

export default router;



