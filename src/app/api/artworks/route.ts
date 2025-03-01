import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Rota para listar todas as obras de arte
export async function GET() {
  try {
    const artworks = await prisma.artwork.findMany();
    return NextResponse.json(artworks, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar as obras de arte:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar as obras de arte' },
      { status: 500 }
    );
  }
}
