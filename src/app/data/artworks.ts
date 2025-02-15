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
    image:
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

    description: `
      Esta obra é da autoria do pintor português Almada Negreiros. 
      Foi pintada numa das arcadas da Praça do Comércio, no café Martinho da Arcada, em Lisboa.\n

      Era Verão de 1915 e, na obra, o poeta Fernando Pessoa procurava inspiração, inclinado sobre a mesa.
      A tensão quebra-se se olharem para o tornozelo que está torcido e numa posição frágil. 
      O chão e o fundo do quadro estão cheios de formas. 
      
      O pintor desta obra participou, junto com o poeta, na revista Orfeu que aparece no quadro. 
      Os losangos fazem lembrar os fatos de Arlequim, que o pintor gostava muito. 
      Reparem no açucareiro: está pintado com uma amolgadela, 
      pois é um objecto que as pessoas deixam sempre cair frequentemente.

      Quando este quadro foi vendido pela primeira vez ao restaurante Irmãos Unidos, 
      custou 30 contos, que hoje é o equivalente a 150 euros. 
      Mas passados alguns anos, o restaurante fechou e houve muita gente a querer comprá-lo. 
      Alguém pagou 6700 euros, ou seja, quarenta e cinco vezes mais. 
      Nunca uma obra de um pintor português vivo tinha valido tanto.

      E aqui fica uma frase típica de Pessoa: 
      "Um homem é do tamanho do seu sonho."
    `,
  },
];
