import { Router } from 'express';
import loanRoutes from './loan.routes';
import userRoutes from './user.routes';
import roomRoutes from './room.routes';
import equipmentRoutes from './equipment.routes';

const router = Router();

router.use('/loans', loanRoutes);
router.use('/users', userRoutes);
router.use('/rooms', roomRoutes);
router.use('/equipment', equipmentRoutes);

export default router;