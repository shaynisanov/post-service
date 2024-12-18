import * as express from 'express';
import {
  getAllPosts,
  addNewPost,
  getPostById,
  updatePost,
} from '../controllers/postsController.js';

const router = express.Router();

router.get('/', getAllPosts);
router.post('/', addNewPost);
router.get('/:id', getPostById);
// @ts-ignore
router.put('/:id', updatePost);

export {router as postRouter};
