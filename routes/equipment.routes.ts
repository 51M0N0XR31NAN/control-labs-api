import { Router } from 'express';
import { EquipmentController } from '../controllers/equipment.controller';
import {
  validateCreateEquipmentPayload,
  validateUpdateEquipmentPayload
} from '../middlewares/validateEquipment.middleware';

const router = Router();

router.post('/', validateCreateEquipmentPayload, EquipmentController.createEquipment);
router.get('/', EquipmentController.getEquipment);
router.patch('/:id', validateUpdateEquipmentPayload, EquipmentController.updateEquipmentPartially);

export default router;