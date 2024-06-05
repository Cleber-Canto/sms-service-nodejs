import { Router } from 'express';
import { sendUserSms } from '../controllers/smsController';

const smsRouter = Router();

smsRouter.post('/sms', sendUserSms);

export { smsRouter };
