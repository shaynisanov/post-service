import {Router} from 'express';
import {
  createComment,
  deleteComment,
  getCommentById,
  readComments,
  updateComment,
} from '../controllers/commentsController.js';

const router = Router();

router.post('/', createComment);
router.get('/', readComments);
router.get('/:id', getCommentById);
// @ts-ignore
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);

export {router as commentRouter};
