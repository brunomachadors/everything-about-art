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

    const artwork = await prisma.artwork.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });

    if (!artwork) {
      return NextResponse.json(
        { error: 'Obra de arte não encontrada' },
        { status: 404 }
      );
    }

    const formattedArtwork = {
      id: artwork.id,
      title: artwork.title,
      artist: artwork.artist,
      year: artwork.year,
      origin: artwork.origin,
      styleArray: artwork.styleArray ?? [],
      technique: artwork.technique ?? '',
      location: artwork.location ?? '',
      image: artwork.image,
      images: artwork.images ?? [],
      tags: artwork.tags ?? [],
      curiosities: artwork.curiosities ?? [],
      quote: artwork.quote ?? '',
      pricehistory: artwork.pricehistory,
      description: artwork.description ?? [],
      createdAt: artwork.createdat,
      author: artwork.author ?? null,
    };

    return NextResponse.json(formattedArtwork, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar a obra de arte:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
