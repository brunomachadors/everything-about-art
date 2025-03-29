import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const artists = await prisma.artist.findMany({
      orderBy: { name: 'asc' },
    });

    return NextResponse.json({ artists }, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar artistas:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar artistas' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (
      !body.id ||
      !body.name ||
      !body.image ||
      !body.bio ||
      !body.fullName ||
      !body.birthDate ||
      !body.nationality
    ) {
      return NextResponse.json(
        { error: 'Campos obrigatórios ausentes' },
        { status: 400 }
      );
    }

    const newArtist = await prisma.artist.create({
      data: {
        id: body.id,
        name: body.name,
        image: body.image,
        bio: body.bio,
        fullName: body.fullName,
        birthDate: body.birthDate,
        deathDate: body.deathDate || null,
        nationality: body.nationality,
        movements: body.movements || [],
        occupations: body.occupations || [],
        artworks: {
          connect:
            body.artworkIds?.map((artworkId: string) => ({ id: artworkId })) ||
            [],
        },
      },
      include: {
        artworks: true,
      },
    });

    return NextResponse.json(newArtist, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar artista:', error);
    return NextResponse.json(
      { error: 'Erro ao criar artista' },
      { status: 500 }
    );
  }
}
