import { Router } from 'express';
import { createUser, getAllUsers } from '../controllers/userController';

const router = Router();

router.post('/user', createUser); // Rota para criar um novo usuário
router.get('/users', getAllUsers); // Rota para buscar todos os usuários

export { router as userRouter };
