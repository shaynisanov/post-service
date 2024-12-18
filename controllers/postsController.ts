import {Request, Response} from 'express';
import {postModel} from '../models/postsModel.js';

const addNewPost = async (req: Request, res: Response) => {
  const postBody = req.body;

  try {
    const newPost = await postModel.create(postBody);
    res.status(201).send(newPost);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllPosts = async (req: Request, res: Response) => {
  const postSender = req.query.sender;

  if (postSender) {
    try {
      const senderPosts = await postModel.find({senderId: postSender});
      res.send(senderPosts);
    } catch (error) {
      res.status(400).send(error);
    }
  } else {
    try {
      const posts = await postModel.find();
      res.send(posts);
    } catch (error) {
      res.status(400).send(error);
    }
  }
};

const getPostById = async (req: Request, res: Response) => {
  const postId = req.params.id;

  try {
    const post = await postModel.findById(postId);

    if (post) res.send(post);
    else res.status(404).send('Post not found');
  } catch (error) {
    res.status(400).send(error);
  }
};

const updatePost = async (req: Request, res: Response) => {
  const postId = req.params.id;
  const updatedContent = req.body.content;
  if (!updatedContent)
    return res.status(400).json({error: 'New content is required'});

  try {
    const updatedPost = await postModel.findByIdAndUpdate(
      postId,
      {content: updatedContent},
      {new: true}
    );

    if (updatedPost) res.status(200).json(updatedPost);
    else res.status(404).send('Post not found');
  } catch (error) {
    res.status(400).send(error);
  }
};

export {addNewPost, getAllPosts, getPostById, updatePost};
