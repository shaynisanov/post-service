import {postModel} from "../models/postsModel.js";

const addNewPost = async (req, res) => {
    const postBody = req.body;

    try {
        const newPost = await postModel.create(postBody);
        res.status(201).send(newPost);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.find();
        res.send(posts);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getPostById = async (req, res) => {
    const postId = req.params.id;
  
    try {
      const post = await postModel.findById(postId);

      if (post) res.send(post);
      else res.status(404).send("Post not found");

    } catch (error) {
      res.status(400).send(error.message);
    }
  };

const getPostsBySender = async (req, res) => {
    const postSender = req.query.sender;
    if (!postSender) return res.status(400).json({ error: 'Sender ID is required' });
  
    try {
      const senderPosts = await postModel.find({senderID: postSender});
      res.send(senderPosts);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

const updatePost = async (req, res) => {
    const postId = req.params.id;
    const updatedContent = req.body.content;
    if (!updatedContent) return res.status(400).json({ error: 'New content is required' });
  
    try {
      const updatedPost = await postModel.findByIdAndUpdate(
        postId,
        {content: updatedContent},
        {new: true}
      );

      if (updatedPost) res.status(200).json(updatedPost);
      else res.status(404).send("Post not found");

    } catch (error) {
      res.status(400).send(error.message);
    }
  };

export {addNewPost, getAllPosts, getPostById, getPostsBySender, updatePost}
