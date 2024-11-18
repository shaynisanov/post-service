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

export {addNewPost, getAllPosts, getPostById}
