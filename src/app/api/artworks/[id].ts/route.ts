import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const artwork = await prisma.artwork.findUnique({
      where: { id: params.id },
    });

    if (!artwork) {
      return NextResponse.json(
        { error: 'Obra de arte não encontrada' },
        { status: 404 }
      );
    }

    return NextResponse.json(artwork, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar a obra de arte:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar a obra de arte' },
      { status: 500 }
    );
  }
}
