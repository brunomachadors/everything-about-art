import { NextResponse } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Retorna todas as obras de arte (sem paginação)
export async function GET() {
  try {
    const artworks = await prisma.artwork.findMany({
      select: {
        id: true,
        title: true,
        artist: true,
        origin: true,
        style: true,
        technique: true,
        image: true,
      },

      orderBy: {
        title: 'asc',
      },
    });

    return NextResponse.json({ artworks }, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar as obras de arte:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar as obras de arte' },
      { status: 500 }
    );
  }
}

// POST - Adiciona uma nova obra de arte ao banco
export async function POST(req: Request) {
  try {
    console.log('🔹 Recebendo requisição POST...');

    const body = await req.json();
    console.log('📥 Payload recebido:', JSON.stringify(body, null, 2));

    // Verificação de campos obrigatórios
    if (
      !body.id ||
      !body.title ||
      !body.artist ||
      (!body.year && body.year !== null) ||
      !body.origin ||
      !body.style ||
      !body.technique ||
      !body.location ||
      !body.description ||
      !body.image
    ) {
      console.error('⚠️ Erro: Campos obrigatórios ausentes.', body);
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos.' },
        { status: 400 }
      );
    }

    // Garantir que nenhum campo seja passado como null
    const newArtworkData = {
      id: body.id,
      title: body.title,
      artist: body.artist,
      year: Number(body.year), // Garante que é um número
      origin: body.origin,
      style: body.style || 'Desconhecido',
      technique: body.technique || 'Desconhecido',
      location: body.location || 'Desconhecido',
      description: body.description,
      image: body.image,
      images: Array.isArray(body.images) ? body.images : [],
      tags: Array.isArray(body.tags) ? body.tags : [],
      curiosities: Array.isArray(body.curiosities) ? body.curiosities : [],
      quote: body.quote || '',
      pricehistory: body.pricehistory || {
        firstSale: 'Desconhecido',
        resale: 'Desconhecido',
      },
      createdat: new Date(),
    };

    console.log(
      '📌 Dados a serem enviados para Prisma:',
      JSON.stringify(newArtworkData, null, 2)
    );

    // Criando a nova obra no banco de dados
    const newArtwork = await prisma.artwork.create({
      data: newArtworkData,
    });

    console.log(
      '✅ Nova obra criada com sucesso:',
      JSON.stringify(newArtwork, null, 2)
    );
    return NextResponse.json(newArtwork, { status: 201 });
  } catch (error: unknown) {
    console.error('❌ Erro ao criar nova obra de arte:', error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        console.error('⚠️ Erro: ID já existe no banco de dados.');
        return NextResponse.json(
          { error: 'Já existe uma obra com esse ID.' },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      {
        error: 'Erro ao criar nova obra de arte',
        details: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
