import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const artworks = await prisma.artwork.findMany();
      return res.status(200).json(artworks);
    } catch (error) {
      console.error('Erro ao buscar as obras de arte:', error);
      return res.status(500).json({ error: 'Erro ao buscar as obras de arte' });
    }
  }

  return res.status(405).json({ error: 'Método não permitido' });
}
