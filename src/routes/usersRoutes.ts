import {Router} from 'express';
import {
  login,
  logout,
  refreshUserToken,
  register,
} from '../controllers/usersController';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/refresh-token', refreshUserToken);

export {router as userRouter};
