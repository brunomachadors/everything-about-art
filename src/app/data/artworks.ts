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
      Foi pintada numa das arcadas da Praça do Comércio, no café Martinho da Arcada, em Lisboa.

      Era Verão de 1915 e, na obra, o poeta Fernando Pessoa procurava inspiração, inclinado sobre a mesa.
      A tensão quebra-se se olharem para o tornozelo que está torcido e numa posição frágil. 
      O chão e o fundo do quadro estão cheios de formas. 

      O pintor desta obra participou, junto com o poeta, na revista Orfeu que aparece no quadro. 
      Os losangos fazem lembrar os fatos de Arlequim, que o pintor gostava muito. 
      Reparem no açucareiro: está pintado com uma amolgadela, 
      pois é um objeto que as pessoas deixam sempre cair frequentemente.

      Quando este quadro foi vendido pela primeira vez ao restaurante Irmãos Unidos, 
      custou 30 contos, que hoje é o equivalente a 150 euros. 
      Mas passados alguns anos, o restaurante fechou e houve muita gente a querer comprá-lo. 
      Alguém pagou 6700 euros, ou seja, quarenta e cinco vezes mais. 
      Nunca uma obra de um pintor português vivo tinha valido tanto.

      E aqui fica uma frase típica de Pessoa: 
      "Um homem é do tamanho do seu sonho."
    `,
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
    image:
      'https://res.cloudinary.com/dtglidvcw/image/upload/v1740216146/everythingAboutArt/artworks/Mondrian.jpg',

    curiosities: [
      'A pintura parece invertida, mas está corretamente posicionada.',
      'Mondrian foi o criador do movimento artístico Neoplasticismo.',
      'O preto representa a ausência de luz, e o branco a mistura de todas as cores.',
      'As cores primárias usadas (vermelho, azul e amarelo) são a base de todas as outras cores.',
      'A composição reflete o ritmo do jazz, que Mondrian apreciava após viver em Nova Iorque.',
    ],

    quote: 'O mínimo é o máximo. – Piet Mondrian',

    description: `
      Esta obra é da autoria do pintor holandês Piet Mondrian.  
      Podem pensar que está invertido, mas, na verdade, é assim mesmo.

      Mondrian era um pintor modernista e criador do movimento artístico conhecido como Neoplasticismo.  
      No início, pintava o que via, mas foi retirando elementos considerados superficiais até chegar à geometria pura.  

      O preto presente no quadro representa a ausência de luz, enquanto o branco simboliza a mistura de todas as cores.  
      Mondrian utilizava cores primárias (vermelho, amarelo e azul) porque são a base de todas as outras cores.  
      O preto e o branco servem para contornar e equilibrar os blocos de cor.

      Quando Mondrian esteve em Nova Iorque, ficou fascinado pela energia do jazz e quis transmitir essas emoções  
      por meio das cores vibrantes e da composição geométrica da obra.

      Agora passemos à forma como as cores se equilibram.  
      O quadrado vermelho é a forma maior, e a forma azul cabe nove vezes dentro dele.  
      Os dois retângulos verticais cabem dentro do retângulo horizontal.  
      No canto inferior direito, há dois retângulos do mesmo tamanho: um branco e outro amarelo.

      Para Piet Mondrian, o mínimo é o máximo.
    `,
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
    image:
      'https://res.cloudinary.com/dtglidvcw/image/upload/v1740217858/everythingAboutArt/artworks/zepovinho.jpg',

    curiosities: [
      'O Zé Povinho foi criado como símbolo do povo português.',
      'O gesto "Toma!" representa a insatisfação com a política da época.',
      'A figura caricatural apareceu pela primeira vez na revista "A Lanterna Mágica" em 1875.',
      'Representa o povo sofrendo com impostos e decisões do governo.',
      'Tornou-se um ícone da sátira política em Portugal e foi reconhecido internacionalmente.',
    ],

    quote: 'O povo é que manda no país, e não o rei. – Rafael Bordalo Pinheiro',

    description: `
      O Zé Povinho foi inventado pelo artista português Rafael Bordalo Pinheiro em 1875 para representar o povo português.
      Ele é conhecido pelo seu famoso gesto, o “Toma!”, que simboliza sua revolta contra os políticos, a sociedade e os impostos abusivos.
      Sendo analfabeto, encontrou no gesto uma forma de expressar sua insatisfação.

      Uma das suas primeiras aparições foi no Álbum das Glórias, onde era representado como um homem ingênuo e resignado,
      aceitando as injustiças impostas pelos governantes. A albarda ao seu lado simboliza os encargos, impostos e abusos políticos,
      colocando o Zé Povinho na posição de um burro sobrecarregado. A legenda "O Soberano!" ironiza a ideia de que o povo teria poder, 
      quando, na realidade, sofria com as decisões dos governantes.

      Sua estreia na imprensa aconteceu em 12 de junho de 1875 na revista "A Lanterna Mágica". Nesta caricatura, o ministro das finanças, 
      Serpa Pimentel, pede três tostões ao Zé Povinho para Santo António de Lisboa. Porém, a verdadeira sátira está no rosto da figura religiosa,
      que na verdade representa Fontes Pereira de Melo, chefe do governo, e o bebê ao colo simboliza o rei D. Luís I. Um guarda com um chicote
      aparece ao fundo, pronto para punir Zé Povinho caso ele se recuse a pagar. Essa imagem reflete a exploração do povo pelo governo.

      O Zé Povinho ganhou notoriedade internacional, sendo reconhecido além das fronteiras de Portugal. Em uma caricatura chamada "A Situação",
      ele aparece representando o povo português enquanto carrega um fardo nas costas. Ao seu lado, John Bull, símbolo da Inglaterra,
      destaca a influência do Reino Unido sobre o país. A bandeira inglesa se impõe sobre a portuguesa, ilustrando o domínio estrangeiro sobre a nação.
      Fontes Pereira de Melo e outros políticos aparecem montados em cavalos, enquanto o Zé Povinho é retratado como um burro,
      carregando o peso das mudanças políticas constantes. 

      Além de suas caricaturas, Rafael Bordalo Pinheiro também imortalizou o Zé Povinho na cerâmica, criando estátuas que reforçavam
      a crítica social. Ele foi um artista multifacetado, atuando como ilustrador, ceramista e satirista, deixando um legado que 
      continua a ser estudado e apreciado até os dias de hoje.
    `,

    priceHistory: {
      firstSale: 'Desconhecido',
      resale: 'Desconhecido',
    },
  },
];
