import { Router } from "express";
import  { createUserController,loginUserController } from "../controllers/auth/auth.controller";
import  verifyToken from "../midleware/validation-token";
import { createVideoByUser, getAllVideoPublic,getAllVideoPrivate}  from "../controllers/videos/videos.controller";






const router = Router();
router.post('/register', createUserController);
router.post('/auth', loginUserController);
router.post('/videos/create',verifyToken, createVideoByUser);
router.get('/videos/list', getAllVideoPublic);
router.get('/videos/private/list',verifyToken,  getAllVideoPrivate);

export default router