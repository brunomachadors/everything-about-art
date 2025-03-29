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

    const artist = await prisma.artist.findUnique({
      where: { id },
      include: {
        artworks: {
          select: {
            id: true,
            title: true,
            image: true,
          },
        },
      },
    });

    if (!artist) {
      return NextResponse.json(
        { error: 'Artista não encontrado' },
        { status: 404 }
      );
    }

    const formattedArtist = {
      id: artist.id,
      name: artist.name,
      image: artist.image,
      fullName: artist.fullName,
      birthDate: artist.birthDate,
      deathDate: artist.deathDate,
      nationality: artist.nationality,
      movements: artist.movements,
      occupations: artist.occupations,
      bio: artist.bio,
      artworks: artist.artworks,
      createdAt: artist.createdAt,
    };

    return NextResponse.json(formattedArtist, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar artista:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
