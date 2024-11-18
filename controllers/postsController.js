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

export {addNewPost, getAllPosts}
