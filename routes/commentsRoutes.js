import express from "express";
import {createComment, readComment} from "../controllers/commentsController.js";

const router = express.Router();

router.post("/", createComment);
router.get("/:id", readComment);

export {router as commentRouter}