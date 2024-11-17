import express from "express";
import {getAllPosts, addNewPost} from "../controllers/postsController.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", addNewPost);

export {router as postRouter}