import {Router} from 'express';
import commentsController from '../controllers/commentsController';
import {authMiddleware} from '../controllers/usersController';

const router = Router();

router.get('/', commentsController.getAll.bind(commentsController));
router.get('/:id', commentsController.getById.bind(commentsController));
router.post(
  '/',
  authMiddleware,
  commentsController.create.bind(commentsController)
);
router.put(
  '/:id',
  authMiddleware,
  commentsController.updateItem.bind(commentsController)
);
router.delete(
  '/:id',
  authMiddleware,
  commentsController.deleteItem.bind(commentsController)
);

export {router as commentRouter};
