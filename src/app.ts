import express from 'express';
import { json } from 'body-parser';
import { userRouter } from './routes/userRoutes'; 
import { smsRouter } from './routes/smsRoutes'; 

const app = express();
app.use(json());
app.use('/api', userRouter); 
app.use('/api', smsRouter); 

export { app };
