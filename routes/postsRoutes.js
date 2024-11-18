import express from "express";
import {getAllPosts, addNewPost, getPostById, getPostsBySender} from "../controllers/postsController.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", addNewPost);
router.get("/:id", getPostById);
router.get("/", getPostsBySender);

export {router as postRouter}