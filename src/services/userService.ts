// Importe o prisma
import { prisma } from '../utils/prisma';

// Função para buscar usuário pelo número de telefone
export async function getUserByPhone(phone: string) {
  return await prisma.user.findUnique({
    where: { phone: phone }
  });
}

// Função para criar um novo usuário
export async function createUser(name: string, phone: string) {
  return await prisma.user.create({
    data: { name, phone }
  });
}

// Função para buscar usuário pelo ID
export async function getUserById(userId: string) {
  return await prisma.user.findUnique({
    where: { id: parseInt(userId) } // Convertendo a string para número
  });
}
