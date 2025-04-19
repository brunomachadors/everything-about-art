import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split('/').filter(Boolean).pop();

    if (!id || typeof id !== 'string') {
      return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }
    const location = await prisma.location.findUnique({
      where: { id: id },
      include: {
        artworks: {
          select: {
            id: true,
            title: true,
            artist: true,
            image: true,
          },
        },
      },
    });

    if (!location) {
      return NextResponse.json(
        { error: 'Localização não encontrada.' },
        { status: 404 }
      );
    }

    return NextResponse.json(location, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar a localização:', error);
    return NextResponse.json(
      { error: 'Erro interno ao buscar a localização.' },
      { status: 500 }
    );
  }
}
