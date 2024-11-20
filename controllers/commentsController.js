import {commentModel} from "../models/commentsModel.js";

const createComment = async (req, res) => {
    const commentBody = req.body;

    try {
        const newComment = await commentModel.create(commentBody);
        res.status(201).send(newComment);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const readComment = async (req, res) => {
    const commentId = req.params.id;
  
    try {
      const comment = await commentModel.findById(commentId);

      if (comment) res.send(comment);
      else res.status(404).send("comment not found");

    } catch (error) {
      res.status(400).send(error.message);
    }
  };

export {createComment, readComment}
