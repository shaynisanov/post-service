import express from "express";
import {getAllPosts, addNewPost, getPostById} from "../controllers/postsController.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", addNewPost);
router.get("/:id", getPostById);

export {router as postRouter}