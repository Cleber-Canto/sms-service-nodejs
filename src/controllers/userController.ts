import { Request, Response } from 'express';
import { createUser as createUserService, getUserByPhone } from '../services/userService';
import { sendSms } from '../services/smsService';
import { prisma } from '../utils/prisma';

// Função para criar um novo usuário
export async function createUser(req: Request, res: Response): Promise<void> {
  const { name, phone } = req.body;

  try {
    // Verificar se o usuário já existe pelo número de telefone
    const existingUser = await getUserByPhone(phone);

    if (existingUser) {
      // Se o usuário já existir, retornar um erro informando que o usuário já está cadastrado
      console.error('User with this phone number already exists');
      return res.status(400).json({ error: 'User with this phone number already exists' });
    }

    // Caso o usuário não exista, criar um novo usuário
    const newUser = await createUserService(name, phone);

    // Enviar SMS de boas-vindas
    const message = `Olá ${newUser.name}, bem-vindo(a) ao nosso serviço de SMS!`;
    await sendSms(newUser.phone, message);

    // Enviar uma resposta de sucesso
    console.log('User created successfully:', newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    // Enviar uma resposta de erro
    res.status(500).json({ error: 'User could not be created' });
  }
}

// Função para buscar todos os usuários
export async function getAllUsers(req: Request, res: Response): Promise<void> {
  try {
    // Buscar todos os usuários no banco de dados
    const users = await prisma.user.findMany();

    // Enviar uma resposta com os usuários encontrados
    console.log('Users found:', users);
    res.status(200).json(users);
  } catch (error) {
    console.error('Error getting users:', error);
    // Enviar uma resposta de erro
    res.status(500).json({ error: 'Could not fetch users' });
  }
}
