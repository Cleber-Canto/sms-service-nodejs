import { Request, Response } from 'express';
import { sendSms } from '../services/smsService';
import { getUserById } from '../services/userService';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function sendUserSms(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
  const { userId, message } = req.body;

  try {
    const user = await getUserById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Salvar os detalhes do SMS no banco de dados
    const sms = await prisma.sms.create({
      data: {
        userId: user.id,
        message: message,
        status: 'pending' // Ou qualquer outro status inicial desejado
      }
    });

    // Enviar o SMS
    await sendSms(user.phone, message);

    return res.status(200).json({ message: 'SMS sent successfully', smsId: sms.id });
  } catch (error) {
    console.error('Error sending SMS:', error);
    return res.status(500).json({ error: 'SMS could not be sent' });
  }
}
