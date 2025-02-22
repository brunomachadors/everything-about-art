import { Artwork } from '../types/artworks';

export const artworks: Artwork[] = [
  {
    id: 'fernando-pessoa-almada-negreiros',
    title: 'Fernando Pessoa',
    author: 'Almada Negreiros',
    year: 1915,
    country: 'Portugal',
    style: 'Modernismo, Cubismo',
    technique: 'Óleo sobre tela',
    location: 'Café Martinho da Arcada, Lisboa',
    coverImage:
      'https://res.cloudinary.com/dtglidvcw/image/upload/v1739629102/everythingAboutArt/artworks/fernando-pessoa-almada-negreiros.jpg',

    curiosities: [
      'Fernando Pessoa aparece procurando inspiração, inclinado sobre a mesa.',
      'O tornozelo torcido simboliza tensão e fragilidade.',
      'O açucareiro amassado simboliza quedas frequentes.',
      'Os losangos no fundo remetem aos trajes de arlequim.',
      'A revista Orfeu aparece como símbolo do movimento modernista.',
    ],

    priceHistory: {
      firstSale: '30 contos (~150 euros)',
      resale: '6700 euros (45 vezes mais)',
    },

    quote: 'Um homem é do tamanho do seu sonho. – Fernando Pessoa',

    description: [
      {
        text: 'Esta obra é da autoria do pintor português Almada Negreiros. Foi pintada numa das arcadas da Praça do Comércio, no café Martinho da Arcada, em Lisboa.',
      },
      {
        text: 'Era Verão de 1915 e, na obra, o poeta Fernando Pessoa procurava inspiração, inclinado sobre a mesa. A tensão quebra-se se olharem para o tornozelo que está torcido e numa posição frágil.',
      },
      {
        text: 'O chão e o fundo do quadro estão cheios de formas. O pintor desta obra participou, junto com o poeta, na revista Orfeu que aparece no quadro. Os losangos fazem lembrar os fatos de Arlequim, que o pintor gostava muito.',
      },
      {
        text: 'Reparem no açucareiro: está pintado com uma amolgadela, pois é um objeto que as pessoas deixam sempre cair frequentemente.',
      },
      {
        text: 'Quando este quadro foi vendido pela primeira vez ao restaurante Irmãos Unidos, custou 30 contos, que hoje é o equivalente a 150 euros. Mas passados alguns anos, o restaurante fechou e houve muita gente a querer comprá-lo.',
      },
      {
        text: 'Alguém pagou 6700 euros, ou seja, quarenta e cinco vezes mais. Nunca uma obra de um pintor português vivo tinha valido tanto.',
      },
      {
        text: 'E aqui fica uma frase típica de Pessoa: "Um homem é do tamanho do seu sonho."',
      },
    ],
  },
  {
    id: 'composicao-vermelho-azul-amarelo',
    title: 'Composição com Vermelho, Azul e Amarelo',
    author: 'Piet Mondrian',
    year: 1930,
    country: 'Holanda',
    style: 'Neoplasticismo, Modernismo',
    technique: 'Óleo sobre tela',
    location: 'Museu Gemeentemuseum, Haia, Holanda',
    coverImage:
      'https://res.cloudinary.com/dtglidvcw/image/upload/v1740216146/everythingAboutArt/artworks/Mondrian.jpg',
    curiosities: [
      'A pintura parece invertida, mas está corretamente posicionada.',
      'Mondrian foi o criador do movimento artístico Neoplasticismo.',
      'O preto representa a ausência de luz, e o branco a mistura de todas as cores.',
      'As cores primárias usadas (vermelho, azul e amarelo) são a base de todas as outras cores.',
      'A composição reflete o ritmo do jazz, que Mondrian apreciava após viver em Nova Iorque.',
    ],
    quote: 'O mínimo é o máximo. – Piet Mondrian',
    description: [
      {
        text: 'Esta obra é da autoria do pintor holandês Piet Mondrian. Podem pensar que está invertido, mas, na verdade, é assim mesmo.',
      },
      {
        text: 'Mondrian era um pintor modernista e criador do movimento artístico conhecido como Neoplasticismo. No início, pintava o que via, mas foi retirando elementos considerados superficiais até chegar à geometria pura.',
      },
      {
        text: 'O preto presente no quadro representa a ausência de luz, enquanto o branco simboliza a mistura de todas as cores. Mondrian utilizava cores primárias (vermelho, amarelo e azul) porque são a base de todas as outras cores. O preto e o branco servem para contornar e equilibrar os blocos de cor.',
      },
      {
        text: 'Quando Mondrian esteve em Nova Iorque, ficou fascinado pela energia do jazz e quis transmitir essas emoções por meio das cores vibrantes e da composição geométrica da obra.',
      },
      {
        text: 'Agora passemos à forma como as cores se equilibram. O quadrado vermelho é a forma maior, e a forma azul cabe nove vezes dentro dele. Os dois retângulos verticais cabem dentro do retângulo horizontal. No canto inferior direito, há dois retângulos do mesmo tamanho: um branco e outro amarelo.',
      },
      {
        text: 'Para Piet Mondrian, o mínimo é o máximo.',
      },
    ],
    priceHistory: {
      firstSale: 'Desconhecido',
      resale: 'Desconhecido',
    },
  },

  {
    id: 'ze-povinho-bordalo-pinheiro',
    title: 'Zé Povinho',
    author: 'Rafael Bordalo Pinheiro',
    year: 1875,
    country: 'Portugal',
    style: 'Caricatura, Sátira Política',
    technique: 'Ilustração, Cerâmica',
    location: 'Museu Bordalo Pinheiro, Lisboa',
    coverImage:
      'https://res.cloudinary.com/dtglidvcw/image/upload/v1740218784/everythingAboutArt/artworks/zepovinhoalbumdasglorias.png',

    images: [
      'https://res.cloudinary.com/dtglidvcw/image/upload/v1740223972/everythingAboutArt/artworks/lanternamagica2.png',
      'https://res.cloudinary.com/dtglidvcw/image/upload/v1740223126/everythingAboutArt/artworks/thesituation.jpg',
      'https://res.cloudinary.com/dtglidvcw/image/upload/v1740223270/everythingAboutArt/artworks/zepovinhoestatua.jpg',
    ],

    curiosities: [
      'O Zé Povinho foi criado como símbolo do povo português.',
      'O gesto "Toma!" representa a insatisfação com a política da época.',
      'A figura caricatural apareceu pela primeira vez na revista "A Lanterna Mágica" em 1875.',
      'Representa o povo sofrendo com impostos e decisões do governo.',
      'Tornou-se um ícone da sátira política em Portugal e foi reconhecido internacionalmente.',
    ],

    quote: 'O povo é que manda no país, e não o rei. – Rafael Bordalo Pinheiro',

    description: [
      {
        text: 'O Zé Povinho foi inventado pelo artista português Rafael Bordalo Pinheiro em 1875 para representar o povo português.',
      },
      {
        text: 'Ele é conhecido pelo seu famoso gesto, o “Toma!”, que simboliza sua revolta contra os políticos, a sociedade e os impostos abusivos.',
      },
      {
        text: 'Uma das suas primeiras aparições foi no Álbum das Glórias, onde era representado como um homem ingênuo e resignado, aceitando as injustiças impostas pelos governantes.',
      },
      {
        text: 'A albarda ao seu lado simboliza os encargos, impostos e abusos políticos, colocando o Zé Povinho na posição de um burro sobrecarregado.',
        image:
          'https://res.cloudinary.com/dtglidvcw/image/upload/v1740223972/everythingAboutArt/artworks/lanternamagica2.png',
      },
      {
        text: 'Sua estreia na imprensa aconteceu em 12 de junho de 1875 na revista "A Lanterna Mágica".',
      },
      {
        text: 'O Zé Povinho ganhou notoriedade internacional, sendo reconhecido além das fronteiras de Portugal. Em uma caricatura chamada "A Situação", ele aparece representando o povo português enquanto carrega um fardo nas costas.',
        image:
          'https://res.cloudinary.com/dtglidvcw/image/upload/v1740223126/everythingAboutArt/artworks/thesituation.jpg',
      },
      {
        text: 'Além de suas caricaturas, Rafael Bordalo Pinheiro também imortalizou o Zé Povinho na cerâmica, criando estátuas que reforçavam a crítica social.',
        image:
          'https://res.cloudinary.com/dtglidvcw/image/upload/v1740223270/everythingAboutArt/artworks/zepovinhoestatua.jpg',
      },
    ],

    priceHistory: {
      firstSale: 'Desconhecido',
      resale: 'Desconhecido',
    },
  },
];
