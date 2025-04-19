import { NextResponse } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const locations = await prisma.location.findMany({
      select: {
        id: true,
        name: true,
        type: true,
        city: true,
        country: true,
        address: true,
        image: true,
      },
      orderBy: {
        name: 'asc',
      },
    });

    return NextResponse.json({ locations }, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar os locais:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar os locais' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    console.log('🔹 Recebendo requisição POST...');

    const body = await req.json();
    console.log('📥 Payload recebido:', JSON.stringify(body, null, 2));

    const requiredFields = [
      'name',
      'type',
      'city',
      'country',
      'address',
      'pricePolicy',
      'description',
      'image',
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        console.error(`⚠️ Erro: Campo obrigatório ausente - ${field}.`);
        return NextResponse.json(
          { error: `Campo obrigatório ausente: ${field}` },
          { status: 400 }
        );
      }
    }

    const newLocation = await prisma.location.create({
      data: {
        name: body.name,
        type: body.type,
        city: body.city,
        country: body.country,
        address: body.address,
        pricePolicy: body.pricePolicy,
        description: body.description,
        image: body.image,
      },
    });

    console.log('✅ Novo local criado com sucesso:', newLocation);
    return NextResponse.json(newLocation, { status: 201 });
  } catch (error: unknown) {
    console.error('❌ Erro ao criar novo local:', error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json(
          { error: 'Já existe um local com esse nome.' },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      {
        error: 'Erro ao criar novo local',
        details: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
