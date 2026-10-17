import { Router } from 'express';
import { RoomController } from '../controllers/room.controller';

const router = Router();

router.get('/', RoomController.getRooms);
router.post('/', RoomController.createRoom);
router.patch('/:id', RoomController.updateRoomPartially);

export default router;