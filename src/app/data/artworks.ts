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
        text: 'O Zé Povinho foi inventado pelo artista português Rafael Bordalo Pinheiro em 1875 para representar o povo português. É conhecido pelo seu famoso gesto, o “Toma!”. Ele fê-lo porque estava chateado com os políticos, indignado com a sociedade e com os impostos que pagava. Como ele é analfabeto, e não sabe ler nem escrever, para demonstrar que estava chateado, fez este gesto.',
      },
      {
        text: 'Eis como ele é numa foto do Álbum das Glórias. Era ingénuo, indiferente, aceitava tudo e ainda se ria, como o povo na altura. A albarda ao lado dele simboliza todos os encargos, impostos e malfeitorias que os políticos colocavam às costas do Zé Povinho, como se de um burro se tratasse. A legenda “O Soberano!” é para demonstrar que o povo é que manda no país, e não o rei.',
        image:
          'https://res.cloudinary.com/dtglidvcw/image/upload/v1740223972/everythingAboutArt/artworks/lanternamagica2.png',
      },
      {
        text: 'Esta é a primeira caricatura onde apareceu o Zé Povinho, A Lanterna Mágica, a 12 de Junho de 1875, véspera de Santo António. Aqui, o ministro das finanças, Serpa Pimentel, está a pedir três tostões ao Zé Povinho para o Santo António de Lisboa, cuja cara é, na verdade, Fontes Pereira de Melo, o chefe do governo, e o bebé ao colo tem a cara do rei da altura, D. Luís I. O guarda com o chicote está pronto para se zangar com ele caso não pague. Com esta caricatura pode concluir-se que o rei e o governo tiravam o dinheiro ao povo por tudo e por nada.',
      },
      {
        text: 'O Zé Povinho também era conhecido no resto do mundo, como se pode ver nesta caricatura de nome “A Situação”. Esta goza com os interesses ingleses que mandam mais em Portugal do que o próprio rei português. O rei está a dormir sem querer saber de nada, e ao seu lado está John Bull, o símbolo do povo inglês, tal como o Zé Povinho era o símbolo do povo português.',
        image:
          'https://res.cloudinary.com/dtglidvcw/image/upload/v1740223126/everythingAboutArt/artworks/thesituation.jpg',
      },
      {
        text: 'Consegue-se ver que as bandeiras inglesas têm mais peso do que a bandeira portuguesa, o que é sinal do poder que o Reino Unido tinha sobre nós. Além do Fontes Pereira de Melo, mencionado na caricatura anterior, também vemos o novo primeiro-ministro, Rodrigues Sampaio, a apresentar o ministério ao rei. Há vários políticos montados a cavalo e o burro, neste caso, é o Zé. Ele carrega todas aquelas albardas porque o governo estava sempre a mudar e o povo, representado pelo Zé, é que sofria. O Fontes Pereira de Melo está a manipular a apresentação deste novo ministério com outra albarda que simboliza outra proposta já com os seus apoiantes. A coroa que ele tem na cabeça não é de rei, mas representa o poder que ele tinha.',
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
  {
    id: 'trou-de-la-serrure-amadeo-de-souza-cardoso',
    title: 'Parto da Viola',
    author: 'Amadeo de Souza-Cardoso',
    year: 1916,
    country: 'Portugal',
    style: 'Modernismo, Cubismo, Expressionismo',
    technique: 'Óleo sobre tela',
    location: 'Museu do Chiado, Lisboa, Portugal',
    coverImage:
      'https://res.cloudinary.com/dtglidvcw/image/upload/v1740477744/everythingAboutArt/artworks/partodaviola.jpg',
    images: [],
    curiosities: [
      'O título completo da obra é: "Trou de la Serrure, Parto da Viola, Bon Ménage, Fraise Avant-Garde".',
      'O buraco da fechadura aparece ligeiramente à direita da viola.',
      'A viola representada é uma viola-d’arco, com cordas e notas musicais espalhadas pela tela.',
      'A referência a "boa casa" pode ser vista no chão de azulejos, nas jarras e na boneca à esquerda.',
      'O "morango vanguarda" é representado por um morango visível no chão de azulejos.',
      'Amadeo de Souza-Cardoso era conhecido por misturar várias técnicas inovadoras em suas obras.',
      'Ele chegou a usar materiais como areia, ganchos de cabelo e pedaços de espelhos em algumas de suas pinturas.',
      'Faleceu precocemente aos 30 anos, sem conseguir pintar todas as obras que idealizou.',
    ],
    quote:
      'A beleza deste quadro é a quantidade de coisas que se podem experimentar. – Amadeo de Souza-Cardoso',
    description: [
      {
        text: 'Esta obra é da autoria do pintor português Amadeo de Souza-Cardoso. O seu verdadeiro título é muito comprido: Trou de la serrure, parto da viola, bon ménage, fraise avant garde, o que significa: buraco da fechadura, parto da viola, boa casa, morango vanguarda.',
      },
      {
        text: 'O buraco da fechadura aparece ligeiramente à direita da viola.',
      },
      {
        text: 'A viola que aparece no quadro é uma viola-d’arco, pertencente à família do violino. As cordas e as notas estão espalhadas pela obra.',
      },
      {
        text: 'A parte correspondente a “boa casa” é o chão de azulejos, as jarras e a boneca que aparecem à esquerda.',
      },
      {
        text: 'A parte correspondente ao “morango vanguarda” é o morango que está no chão de azulejos.',
      },
      {
        text: 'A beleza deste quadro é a quantidade de coisas que se podem experimentar.',
      },
      {
        text: 'Amadeo de Souza-Cardoso era conhecido por pintar muitas coisas nunca antes vistas. Misturava muitas técnicas diferentes nas suas obras.',
      },
      {
        text: 'Contudo, o pintor tinha outros quadros nos quais usava areia, ganchos de cabelo, pedaços de espelhos, entre outras coisas. Até parecia uma criança.',
      },
      {
        text: 'A parte mais triste desta análise é que o pintor adoeceu e morreu com 30 anos e ainda não tinha pintado todos os quadros que queria. Se hoje fosse vivo, teria sido um dos mais talentosos de sempre.',
      },
    ],
    priceHistory: {
      firstSale: 'Desconhecido',
      resale: 'Desconhecido',
    },
  },

  {
    id: 'mona-lisa-leonardo-da-vinci',
    title: 'Mona Lisa',
    author: 'Leonardo da Vinci',
    year: 1503,
    country: 'Itália',
    style: 'Renascimento',
    technique: 'Óleo sobre madeira',
    location: 'Museu do Louvre, Paris, França',
    coverImage:
      'https://res.cloudinary.com/dtglidvcw/image/upload/v1740478115/everythingAboutArt/artworks/monalisa.jpg',
    curiosities: [
      'Leonardo da Vinci levou quatro anos para concluir a pintura.',
      'A modelo do quadro foi Lisa del Giocondo, uma mulher da nobreza florentina.',
      'A Mona Lisa não tem sobrancelhas devido à técnica sfumato utilizada por Leonardo.',
      'O sorriso enigmático da Mona Lisa foi resultado da tentativa de Leonardo de fazê-la sorrir com a ajuda de bobos da corte.',
      'A pintura já esteve no quarto do rei Francisco I, no de Luís XIV e até no de Napoleão Bonaparte.',
      'Em 1911, foi roubada por Vincenzo Peruggia e recuperada apenas em 1913.',
      'A pintura sofreu ataques com ácido e pedra, resultando na necessidade de proteção com vidro à prova de bala.',
      'O olhar da Mona Lisa tem um efeito óptico que faz parecer que ela está sempre nos observando.',
    ],
    quote:
      'O sorriso mais famoso da história da arte. – Descrição popular sobre a Mona Lisa',
    description: [
      {
        text: `Esta obra é da autoria do pintor italiano Leonardo da Vinci e data de 1503. Já derreteu muitos corações ao longo da história: reis, imperadores, e até o coração do próprio pintor.`,
      },
      {
        text: 'Leonardo procurava a perfeição e muitas vezes não terminava os seus quadros, mas este foi diferente. Leonardo demorou quatro anos a pintá-lo. Tinha 51 anos quando começou. Pediu a uma mulher chamada Lisa del Giocondo que posasse para ele. Ela demorou a decidir que roupa e jóias usar, e quando se decidiu, pôs um véu transparente porque tinha sido mãe há pouco tempo.',
      },
      {
        text: 'No quadro, ela parece estar sentada numa varanda muito alta, com uma paisagem de natureza por trás. Mas a paisagem não é real, pois está mal alinhada.',
      },
      {
        text: 'Se olharmos melhor, vemos que a Mona Lisa não tem sobrancelhas. Alguns acreditam que ela as rapou. Outros pensam que desapareceram num dos restauros que se fez à obra. Mas na verdade, isso faz parte de uma técnica usada pelo pintor conhecida como sfumato. Ele fazia pinceladas finas uma a uma usando pincéis de seda muito suaves para esbater o fumo, e fez isso nas sobrancelhas.',
      },
      {
        text: 'Agora vamos ao sorriso. Não parecia muito contente com a cor do vestido ou com as jóias que decidiu não usar, por isso, Leonardo contratou vários bobos da corte para a animar, embora só tenha resultado este sorriso cheio de mistérios, considerado o mais famoso da história da arte.',
      },
      {
        text: 'Este quadro já esteve na casa de banho privada do rei Francisco I, pois ele adorava olhar para ela a sós. Comprou o quadro por uma quantia hoje equivalente a oitocentos mil euros. Em 1682, outro rei, Luís XIV, quis tê-la no seu quarto, para olhar para ela antes de dormir e ao acordar. Em 1800, Napoleão Bonaparte “raptou-a” para o seu quarto. Também ele se tinha apaixonado pela Mona Lisa. Depois disso, a partir de 1911, ela passou a ser vista aos olhos de todos no célebre Museu do Louvre, em Paris.',
      },
    ],
    priceHistory: {
      firstSale: '800 mil euros (valor ajustado)',
      resale: 'Nunca foi vendida após a aquisição do Louvre',
    },
  },
  {
    id: 'triptico-auto-retrato-sonho-familia-paula-rego',
    title: 'Tríptico Auto-retrato, Sonho e Família',
    author: 'Paula Rego',
    year: 'Desconhecido',
    country: 'Portugal',
    style: 'Expressionismo, Realismo Contemporâneo',
    technique: 'Óleo sobre tela',
    location: 'Desconhecido',
    coverImage:
      'https://res.cloudinary.com/dtglidvcw/image/upload/v1740480644/everythingAboutArt/artworks/triplo.png',
    curiosities: [
      'Paula Rego sempre se considerou uma mulher à frente do seu tempo.',
      'A obra é composta por três partes que contam uma história em momentos distintos.',
      'No primeiro quadro, a pintora se autorretrata com uma máscara de macaco, simbolizando a imitação.',
      "O segundo quadro, 'Sonho', reflete sua saudade do filho mais novo que ficou em Portugal.",
      "O terceiro quadro, 'Família', mostra a morte separando Paula e seu marido doente.",
      'A obra transmite as dificuldades da artista em equilibrar sua vida como mãe, mulher e pintora.',
    ],
    quote:
      'Quando estava contente, os quadros eram fortes e cheios de cor. Quando estava triste, fazia quadros confusos e estranhos. – Paula Rego',
    description: [
      {
        text: 'Este tríptico é da autoria da pintora portuguesa Paula Rego. Desde cedo que a pintora sabia que era uma mulher à frente do seu tempo. Gostava de pensar em novas ideias e de pintar tudo o que sentia.',
      },
      {
        text: 'Aqui está a obra. É uma história em três momentos. O primeiro é o Auto-retrato. Ela pintou-se a si própria. Tem uma máscara de macaco porque considerava que os pintores imitavam tudo o que viam, tal como os macacos. Neste caso, ela imita-se a si própria a pintar. A figura branca ao lado dela simboliza a morte e a doença. Tem uma máscara de pássaro com um bico comprido e óculos escuros por causa da Peste Negra, uma doença que matou muita gente.',
        image:
          'https://res.cloudinary.com/dtglidvcw/image/upload/v1740480333/everythingAboutArt/artworks/autoretrato.webp',
      },
      {
        text: 'O segundo momento é o Sonho. A pintora tinha muitos pesadelos e sonhava com o filho mais novo que tinha deixado em Portugal quando foi estudar para a Inglaterra, com uma bolsa da Fundação Calouste Gulbenkian. Levou as duas filhas mais velhas, mas não pôde levar o mais novo, pois era muito pequeno e podia distraí-la enquanto pintava. Ela tem uma cera na mão, pois está contente por ser pintora, mas ao mesmo tempo está triste por não estar com o seu filho.',
      },
      {
        text: 'O terceiro momento é a Família. Mostra a morte a querer separar a pintora do marido. Ele tinha uma doença grave e, pouco a pouco, começou a ter cada vez menos capacidade de fazer tudo sozinho. Paula Rego vivia triste, preocupada e cada vez mais distante. Houve uma altura em que o marido apanhou uma constipação da filha e não quis ser curado, deixando que a morte o levasse.',
        image:
          'https://res.cloudinary.com/dtglidvcw/image/upload/v1740480332/everythingAboutArt/artworks/familia.webp',
      },
      {
        text: 'Paula continuou a pintar o que sentia. Quando estava contente, os quadros eram fortes e cheios de cor. Quando estava triste, fazia quadros confusos e estranhos. Por outras palavras, este tríptico mostra o quão era difícil para Paula ser mãe, mulher e pintora.',
      },
    ],
    priceHistory: {
      firstSale: 'Desconhecido',
      resale: 'Desconhecido',
    },
  },
];
