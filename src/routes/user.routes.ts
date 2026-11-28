import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import {
  validateCreateUserPayload,
  validateUserUpdatePayload
} from '../middlewares/validateUser.middleware';

const router = Router();

router.get('/', UserController.getUsers);
router.post('/', validateCreateUserPayload, UserController.createUser);
router.get('/:id', UserController.getUserById);
router.patch('/:id', validateUserUpdatePayload, UserController.updateUserPartially);
router.delete('/:id', UserController.deleteUser);

export default router;
