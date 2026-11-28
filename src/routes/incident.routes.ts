import { Router } from 'express';
import { IncidentController } from '../controllers/incident.controller';
import {
  validateCreateIncidentPayload,
  validateUpdateIncidentPayload
} from '../middlewares/validateIncident.middleware';

const router = Router();

router.post('/', validateCreateIncidentPayload, IncidentController.createIncident);
router.get('/', IncidentController.getIncidents);
router.patch('/:id', validateUpdateIncidentPayload, IncidentController.updateIncidentPartially);

export default router;
