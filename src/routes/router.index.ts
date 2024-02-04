import { Router } from "express";
import  { createUserController,loginUserController } from "../controllers/auth/auth.controller";
import  verifyToken from "../midleware/validation-token";
import { createVideoByUser, createCommentOnVideoByUser,getAllVideoPublic,getAllVideoPrivate, createLikeOnVideoByUser, getAllVideoPublicPopulation}  from "../controllers/videos/videos.controller";






const router = Router();
router.post('/register', createUserController);
router.post('/auth', loginUserController);
router.post('/videos/create',verifyToken, createVideoByUser);
router.post('/videos/comment/create',verifyToken, createCommentOnVideoByUser);
router.post('/videos/like/create',verifyToken, createLikeOnVideoByUser);
router.get('/videos/list', getAllVideoPublic);
router.get('/videos/popular', getAllVideoPublicPopulation);
router.get('/videos/private/list',verifyToken,  getAllVideoPrivate);

export default router