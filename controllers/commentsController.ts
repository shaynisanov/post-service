import {NextFunction, Request, Response} from 'express';
import {commentModel} from '../models/commentsModel.js';
import {postModel} from '../models/postsModel.js';

const createComment = async (req: Request, res: Response) => {
  const commentBody = req.body;

  try {
    const post = await postModel.findById(commentBody.postId);

    if (post) {
      const newComment = await commentModel.create(commentBody);
      res.status(201).send(newComment);
    } else {
      res.status(404).send(`Post with id ${commentBody.postId} was not found`);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

const getCommentById = async (req: Request, res: Response) => {
  const commentId = req.params.id;

  try {
    const comment = await commentModel.findById(commentId);

    if (comment) res.send(comment);
    else res.status(404).send('comment not found');
  } catch (error) {
    res.status(400).send(error);
  }
};

const readComments = async (req: Request, res: Response) => {
  const postId = req.query.postId;

  if (postId) {
    try {
      const postComments = await commentModel.find({postId});
      res.send(postComments);
    } catch (error) {
      res.status(400).send(error);
    }
  } else {
    try {
      const comments = await commentModel.find();
      res.send(comments);
    } catch (error) {
      res.status(400).send(error);
    }
  }
};

const updateComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
    else res.status(404).send('Comment not found');
  } catch (error) {
    res.status(400).send(error);
  }

  next();
};

const deleteComment = async (req: Request, res: Response) => {
  const commentId = req.params.id;

  try {
    const deletedComment = await commentModel.findByIdAndDelete(commentId);

    if (deletedComment) res.status(200).send('Comment deleted successfully');
    else res.status(404).send('Comment not found');
  } catch (error) {
    res.status(400).send(error);
  }
};

export {
  createComment,
  getCommentById,
  readComments,
  updateComment,
  deleteComment,
};
