import express from "express";
import {
    createComment,
    deleteComment,
    getCommentById,
    readComments,
    updateComment
} from "../controllers/commentsController.js";

const router = express.Router();

router.post("/", createComment);
router.get("/", readComments);
router.get("/:id", getCommentById);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

export {router as commentRouter}