import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const artwork = await prisma.artwork.findUnique({
        where: { id: String(id) },
      });

      if (!artwork) {
        return res.status(404).json({ error: 'Obra de arte não encontrada' });
      }

      return res.status(200).json(artwork);
    } catch (error: unknown) {
      console.error('Erro ao buscar a obra de arte:', error);

      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      }

      return res.status(500).json({ error: 'Erro desconhecido' });
    }
  }

  return res.status(405).json({ error: 'Método não permitido' });
}
