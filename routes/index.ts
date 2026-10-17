import { Router } from 'express';
import loanRoutes from './loan.routes';
import userRoutes from './user.routes';
import roomRoutes from './room.routes';

const router = Router();

router.use('/loans', loanRoutes);
router.use('/users', userRoutes);
router.use('/rooms', roomRoutes);

export default router;