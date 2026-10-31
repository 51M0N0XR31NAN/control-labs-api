import { Router } from 'express';
import loanRoutes from './loan.routes';
import userRoutes from './user.routes';
import roomRoutes from './room.routes';
import equipmentRoutes from './equipment.routes';
import incidentRoutes from './incident.routes';
import dashboardRoutes from './dashboard.routes';

const router = Router();

router.use('/loans', loanRoutes);
router.use('/users', userRoutes);
router.use('/rooms', roomRoutes);
router.use('/equipment', equipmentRoutes);
router.use('/incidents', incidentRoutes);
router.use('/dashboard', dashboardRoutes);

export default router;