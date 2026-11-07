import { Router } from 'express';
import { LoanController } from '../controllers/loan.controller';
import { validateLoanPayload } from '../middlewares/Validateloan.middleware';


const router = Router();

router.post('/', validateLoanPayload, LoanController.createLoan);
router.post('/', LoanController.createLoan);
router.get('/search', LoanController.getLoansByFilter); // antes de '/:id'
router.get('/:id', LoanController.getLoanById);
router.put('/:id/accept', LoanController.acceptLoanInventory);

export default router;