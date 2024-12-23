import * as express from 'express';
import postsController from '../controllers/postsController';
import {authMiddleware} from '../controllers/usersController';

const router = express.Router();

router.get('/', postsController.getAll.bind(postsController));
router.get('/:id', postsController.getById.bind(postsController));
router.post('/', authMiddleware, postsController.create.bind(postsController));
router.put(
  '/:id',
  authMiddleware,
  postsController.updateItem.bind(postsController)
);
router.delete(
  '/:id',
  authMiddleware,
  postsController.deleteItem.bind(postsController)
);

export {router as postRouter};
