import * as express from 'express';
import postsController from '../controllers/postsController';

const router = express.Router();

router.get('/', postsController.getAll.bind(postsController));
router.post('/', postsController.create.bind(postsController));
router.get('/:id', postsController.getById.bind(postsController));
router.put('/:id', postsController.updateItem.bind(postsController));
router.delete('/:id', postsController.deleteItem.bind(postsController));

export {router as postRouter};
