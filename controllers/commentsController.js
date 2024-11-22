import {commentModel} from "../models/commentsModel.js";
import {postModel} from "../models/postsModel.js";

const createComment = async (req, res) => {
    const commentBody = req.body;

    try {
        const post = await postModel.findById(commentBody.postID);

        if (post) {
            const newComment = await commentModel.create(commentBody);
            res.status(201).send(newComment);
        } else {
            res.status(404).send(`Post with id ${commentBody.postID} was not found`);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getCommentById = async (req, res) => {
    const commentId = req.params.id;

    try {
        const comment = await commentModel.findById(commentId);

        if (comment) res.send(comment);
        else res.status(404).send("comment not found");

    } catch (error) {
        res.status(400).send(error.message);
    }
};

const readComments = async (req, res) => {
    const postID = req.query.postID;

    if (postID) {
        try {
            const postComments = await commentModel.find({postID});
            res.send(postComments);
        } catch (error) {
            res.status(400).send(error.message);
        }
    } else {
        try {
            const comments = await commentModel.find();
            res.send(comments);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
};

const updateComment = async (req, res) => {
    const commentId = req.params.id;
    const updatedText = req.body.text;

    if (!updatedText) {
        return res.status(400).json({error: 'New text is required'});
    }

    try {
        const updatedComment = await commentModel.findByIdAndUpdate(
            commentId,
            {text: updatedText},
            {new: true}
        );

        if (updatedComment) res.status(200).json(updatedComment);
        else res.status(404).send("Comment not found");

    } catch (error) {
        res.status(400).send(error.message);
    }
};

const deleteComment = async (req, res) => {
    const commentId = req.params.id;

    try {
        const deletedComment = await commentModel.findByIdAndDelete(commentId);

        if (deletedComment) res.status(200).send("Comment deleted successfully");
        else res.status(404).send("Comment not found");

    } catch (error) {
        res.status(400).send(error.message);
    }
};

export {createComment, getCommentById, readComments, updateComment, deleteComment}
