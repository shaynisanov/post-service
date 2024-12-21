import {Router} from 'express';
import commentsController from '../controllers/commentsController';

const router = Router();

router.post('/', commentsController.create.bind(commentsController));
router.get('/', commentsController.getAll.bind(commentsController));
router.get('/:id', commentsController.getById.bind(commentsController));
router.put('/:id', commentsController.updateItem.bind(commentsController));
router.delete('/:id', commentsController.deleteItem.bind(commentsController));

export {router as commentRouter};
