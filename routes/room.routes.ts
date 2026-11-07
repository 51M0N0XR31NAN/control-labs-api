import { Router } from 'express';
import { RoomController } from '../controllers/room.controller';
import {
  validateCreateRoomPayload,
  validateUpdateRoomPayload
} from '../middlewares/validateRoom.middleware';

const router = Router();

router.get('/', RoomController.getRooms);
router.post('/', validateCreateRoomPayload, RoomController.createRoom);
router.patch('/:id', validateUpdateRoomPayload, RoomController.updateRoomPartially);

export default router;
