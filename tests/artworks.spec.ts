import { test, expect } from '@playwright/test';

test('Enter artwork index', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
});

test('A Liberdade guiando o povo', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page
    .getByRole('link', { name: 'A Liberdade guiando o povo A' })
    .click();
  await expect(page.getByText('🎨 Artista: Eugène Delacroix')).toBeVisible();
  await expect(page.getByText('📅 Ano: 1830')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: França')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Romantismo')).toBeVisible();
  await expect(page.getByText('🖌️ Técnica: Óleo sobre tela')).toBeVisible();
  await expect(page.getByText('🏛️ Localização: Museu do')).toHaveText(
    '🏛️ Localização: Museu do Louvre, Paris'
  );
  await expect(page.getByText('💰 Primeira Venda: Em 1831, o')).toHaveText(
    '💰 Primeira Venda: Em 1831, o rei Luís Filipe I comprou a obra de Eugène Delacroix por 3.000 francos para exibi-la no Palácio de Luxemburgo. No entanto, devido ao seu forte simbolismo revolucionário, a pintura foi retirada de exposição.'
  );
  await expect(page.getByText('📈 Última Revenda: A obra')).toHaveText(
    '📈 Última Revenda: A obra nunca foi revendida, pois pertence ao Estado francês e faz parte da coleção do Museu do Louvre. Como é um patrimônio nacional, não pode ser comercializada.'
  );
  await expect(page.getByText('"O meu mau humor está a')).toHaveText(
    '"O meu mau humor está a desaparecer graças ao trabalho árduo. Embarquei num tema moderno – a barricada. Mesmo que eu não tenha lutado pelo meu país, pelo menos pinto para ele. - Eugène Delacroix"'
  );
  await expect(page.getByText('Esta obra é da autoria do')).toHaveText(
    'Esta obra é da autoria do pintor francês Eugène Delacroix e celebra a Revolução de Julho de 1830 em França.'
  );
  await expect(page.getByText('As pessoas nesta altura')).toHaveText(
    'As pessoas nesta altura revoltaram-se contra Carlos X, pois queriam liberdade, igualdade e fraternidade.'
  );
  await expect(page.getByText('O pintor estava numa casa pró')).toHaveText(
    'O pintor estava numa casa próximo da câmara municipal e, ao ver as lutas e manifestações, transmitiu o que sentia através desta obra. Queria que o rei respeitasse a liberdade e os direitos do povo e, em vez de lutar, decidiu pintar. Escreveu ao irmão:'
  );
  await expect(
    page.getByRole('paragraph').filter({ hasText: 'O meu mau humor está a' })
  ).toHaveText(
    'O meu mau humor está a desaparecer graças ao trabalho árduo. Embarquei num tema moderno – a barricada. Mesmo que eu não tenha lutado pelo meu país, pelo menos pinto para ele.'
  );
  await expect(page.getByText('A mulher que segura a')).toHaveText(
    'A mulher que segura a bandeira francesa está em cima da barricada para ficar mais elevada, sobre um monte de corpos caídos. Está descalça, com o peito à mostra e também segura uma arma. Representa a liberdade e está a guiar as outras pessoas, daí o nome do quadro.'
  );
  await expect(page.getByText('Há um menino que segura duas')).toHaveText(
    'Há um menino que segura duas pistolas e outro no canto inferior esquerdo do quadro com um boné de polícia e uma espada na mão.'
  );
  await expect(page.getByText('No lado esquerdo está também')).toHaveText(
    'No lado esquerdo está também um homem rico que segura uma espingarda.'
  );
  await expect(page.getByText('No fundo, está a catedral de')).toHaveText(
    'No fundo, está a catedral de Notre Dame com a bandeira francesa içada. Significa que o povo venceu. O rei Carlos X deixou o trono e cedeu-o a Luís Filipe I. Este novo rei preocupava-se com o que as pessoas diziam e gostava de as ver satisfeitas.'
  );
  await expect(page.getByText('Nem toda a gente gostou desta')).toHaveText(
    'Nem toda a gente gostou desta obra. Pessoas sujas, a mulher não era uma deusa e acabaram por guardar o quadro num depósito, mas, a partir de 1874, passou a estar no Museu do Louvre, onde se tornou um dos quadros mais célebres do século XIX.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Eugène Delacroix' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Eugène Delacroix' })
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('As Banhistas', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('link', { name: 'As Banhistas As Banhistas' }).click();
  await expect(page.getByText('🎨 Artista: Paul Cézanne')).toBeVisible();
  await expect(page.getByText('📅 Ano: 1898')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: França')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Pós-Impressionismo')).toBeVisible();
  await expect(page.getByText('🖌️ Técnica: Óleo sobre tela')).toBeVisible();
  await expect(page.getByText('🏛️ Localização: Museu de')).toHaveText(
    '🏛️ Localização: Museu de Arte de Philadelphia'
  );
  await expect(page.getByText('💰 Primeira Venda: Por ser')).toHaveText(
    '💰 Primeira Venda: Por ser uma obra de grande porte e importância, provavelmente foi adquirida por um colecionador privado ou uma galeria, mas detalhes exatos sobre o preço inicial não são amplamente documentados.'
  );
  await expect(page.getByText('📈 Última Revenda: A obra foi')).toHaveText(
    '📈 Última Revenda: A obra foi comprada pelo Museu de Arte de Philadelphia em 1937, onde permanece até hoje. O preço exato pago pela pintura durante essa aquisição também não é frequentemente citado nas fontes mais comuns.'
  );
  await expect(page.getByText('"Eu faço da cor o meu')).toHaveText(
    '"Eu faço da cor o meu alfabeto. - Paul Cézanne"'
  );
  await expect(page.getByText('Esta obra é da autoria do')).toHaveText(
    'Esta obra é da autoria do pintor francês Paul Cézanne e data de 1898.'
  );
  await expect(page.getByText('Cézanne nasceu em 1839 e, aos')).toHaveText(
    'Cézanne nasceu em 1839 e, aos 31 anos, começou a pintar banhistas. Pintava pessoas nuas para estudar as formas do corpo através de esferas, cilindros e cones.'
  );
  await expect(page.getByText('As mulheres no quadro não têm')).toHaveText(
    'As mulheres no quadro não têm cara. O pintor só se preocupava com o movimento e as formas do corpo. Chamava a este seu método modulação.'
  );
  await expect(page.getByText('Se traçarmos uma linha a meio')).toHaveText(
    'Se traçarmos uma linha a meio da obra, os dois lados parecem iguais. Os troncos das árvores fazem um triângulo que leva a que olhemos para o centro. As mulheres à esquerda fazem uma pirâmide e à direita também.'
  );
  await expect(page.getByText('Do outro lado da margem, há')).toHaveText(
    'Do outro lado da margem, há quem note o próprio pintor com o seu cão. Algumas mulheres estão a olhar para trás, mas outras olham para a frente.'
  );
  await expect(page.getByText('Mais à frente, parece haver')).toHaveText(
    'Mais à frente, parece haver um pano com comida. Neste quadro, o pintor não pretende contar uma história, mas sim estudar as formas do corpo humano. O quadro tem falta de tinta, como se o pintor não tivesse acabado a obra, pois a tela vê-se nalgumas partes. Mesmo assim, demorou sete anos para a pintar. Há pinceladas que parecem não estar acabadas.'
  );
  await expect(page.getByText('Cézanne era pós-')).toHaveText(
    'Cézanne era pós-impressionista. O Impressionismo era um movimento artístico em que se pintavam só as coisas mais importantes. Com pinceladas e cores fortes, pintavam-se manchas e contornos que mostravam as figuras, o movimento e a luz, mas Cézanne não se preocupava com os efeitos da luz; só se preocupava com a forma das coisas e o movimento, daí ser pós-impressionista (depois do Impressionismo). O pintor também é considerado o pai do Cubismo.'
  );
  await expect(page.getByText('Cézanne inspirou muitos')).toHaveText(
    'Cézanne inspirou muitos artistas, como Pablo Picasso, que dizia que Cézanne era como se fosse seu pai. Ele pintou banhistas durante mais de 30 anos, até que um dia, em Outubro de 1906, quando estava a pintar lá fora, desabou uma enorme tempestade. Esteve três horas a pintar à chuva e ficou muito doente. Morreu uma semana depois.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Paul Cézanne' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Paul Cézanne' })).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('As Meninas', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('link', { name: 'As Meninas As Meninas Diego' }).click();
  await expect(page.getByText('🎨 Artista: Diego Velázquez')).toBeVisible();
  await expect(page.getByText('📅 Ano: 1656')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: Espanha')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Barroco')).toBeVisible();
  await expect(page.getByText('🖌️ Técnica: Óleo sobre tela')).toBeVisible();
  await expect(page.getByText('🏛️ Localização: Museu do')).toHaveText(
    '🏛️ Localização: Museu do Prado, Madrid'
  );
  await expect(page.getByText('💰 Primeira Venda: Não houve')).toHaveText(
    '💰 Primeira Venda: Não houve uma venda oficial. Velázquez era pintor da corte e produzia obras diretamente para o rei.'
  );
  await expect(page.getByText('📈 Última Revenda: Nunca foi')).toHaveText(
    '📈 Última Revenda: Nunca foi revendida, pois pertenceu à coleção real espanhola e, após a fundação do Museu do Prado, tornou-se uma das peças mais valiosas do acervo nacional da Espanha.'
  );
  await expect(page.getByText('"A pintura é uma arte de')).toHaveText(
    '"A pintura é uma arte de pensamento - Diego Velázquez"'
  );
  await expect(page.getByText('Esta obra é da autoria do')).toHaveText(
    'Esta obra é da autoria do pintor espanhol Diego Velázquez e data de 1656.'
  );
  await expect(page.getByText('A figura central é a princesa')).toHaveText(
    'A figura central é a princesa Margarida Teresa. Era uma das jóias da coroa, muito preciosa. Era muito importante para o rei ter filhos, pois garantia a continuidade do reinado. A princesa está rodeada pelas suas aias. Eram damas de alta nobreza, de famílias muito ricas.'
  );
  await expect(page.getByText('A aia da esquerda chama-se')).toHaveText(
    'A aia da esquerda chama-se Maria. Está a oferecer à princesa uma bandeja com um jarro de argila perfumado. É feito de um material tão perfumado que havia quem trincasse e comesse o próprio jarro.'
  );
  await expect(page.getByText('A aia à direita chama-se')).toHaveText(
    'A aia à direita chama-se Isabel, e está a fazer uma reverência à princesa porque ela era muito importante.'
  );
  await expect(page.getByText('A senhora mais à direita')).toHaveText(
    'A senhora mais à direita acompanha a princesa desde o seu nascimento. Embora possa parecer uma criança, na verdade é uma senhora anã. O rapaz está a chatear o cão, mas ele não quer saber.'
  );
  await expect(page.getByText('Atrás desta família está o pr')).toHaveText(
    'Atrás desta família está o próprio pintor, a trabalhar numa grande tela e a olhar na nossa direcção.'
  );
  await expect(page.getByText('O espelho que está no fundo')).toHaveText(
    'O espelho que está no fundo reflecte o rei Filipe e a rainha Mariana de Espanha. Parecem estar colocados fora do quadro.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Diego Velázquez' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Diego Velázquez' })
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('Caminhante Sobre o Mar de Névoa', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page
    .getByRole('link', { name: 'Caminhante Sobre o Mar de Né' })
    .click();
  await expect(
    page.getByText('🎨 Artista: Caspar David Friedrich')
  ).toBeVisible();
  await expect(page.getByText('📅 Ano: 1818')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: Alemanha')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Romantismo')).toBeVisible();
  await expect(page.getByText('🖌️ Técnica: Óleo sobre tela')).toBeVisible();
  await expect(page.getByText('🏛️ Localização: Hamburger')).toHaveText(
    '🏛️ Localização: Hamburger Kunsthalle'
  );
  await expect(page.getByText('💰 Primeira Venda: Nenhuma')).toBeVisible();
  await expect(page.getByText('📈 Última Revenda: Nenhuma')).toBeVisible();
  await expect(page.getByText('"Não se deve apenas pintar o')).toHaveText(
    '"Não se deve apenas pintar o que está diante dos olhos, mas também o que vive dentro da alma. – Caspar David Friedrich"'
  );
  await expect(page.getByText('Esta obra é da autoria do')).toHaveText(
    'Esta obra é da autoria do pintor alemão Caspar David Friedrich e data de 1818. Era uma altura em que as pessoas começavam a viajar só para ver paisagens e locais diferentes. Os mais curiosos olhavam para a Natureza e sentiam a imensidão do Universo. Sentiam-se pequenos no meio de algo tão grandioso e infinito.'
  );
  await expect(page.getByText('O pintor apenas começou a')).toHaveText(
    'O pintor apenas começou a pintar com 34 anos. Quando pintou esta obra, tinha 44 anos e defendia que um artista não deveria pintar apenas o que via à sua frente, mas aquilo que sentia dentro de si. O pintor via para além daquilo que tinha à frente, e pintou uma paisagem que não existia. É a junção de vários sítios de que se lembrava, que tinha dentro de si, mas que não estavam mesmo ali à sua frente.'
  );
  await expect(page.getByText('Ele criticava os pintores de')).toHaveText(
    'Ele criticava os pintores de paisagens que punham todos os elementos encavalitados uns em cima dos outros, sem haver espaço para a Natureza respirar.'
  );
  await expect(page.getByText('Há quem diga que o homem no')).toHaveText(
    'Há quem diga que o homem no quadro é o próprio pintor. Deslumbrado pela paisagem, olha para o infinito e sente a Natureza muito maior que ele. Este é um quadro que coloca o espectador dentro da pintura. É imersivo, envolve-nos. Pertence a um movimento chamado Romantismo, ou seja, algo maior que a condição humana, que nos faz sentir qualquer coisa: grandeza da Natureza, grandeza de estados de alma, remete para um passado glorioso, emoções do interior, espiritualidade, força do indevido.'
  );
  await expect(page.getByText('As nuvens parecem ondas a')).toHaveText(
    'As nuvens parecem ondas a fazer espuma, daí o título do quadro. O caminhante tem de ultrapassar toda a névoa e todos os obstáculos para atingir a montanha ao fundo.'
  );
  await expect(page.getByText('No final da sua vida,')).toHaveText(
    'No final da sua vida, Friedrich viveu pobre e isolado. Fazia grandes caminhadas de dia e de noite no bosque. Acabou por morrer em 1840 com 65 anos, sem ninguém.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Caspar David Friedrich' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Caspar David Friedrich' })
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('Composição 8', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('link', { name: 'Composição 8 Composição 8' }).click();
  await expect(page.getByText('🎨 Artista: Wassily Kandinsky')).toBeVisible();
  await expect(page.getByText('📅 Ano: 1923')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: Rússia')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Abstracionismo')).toBeVisible();
  await expect(page.getByText('🖌️ Técnica: Óleo sobre tela')).toBeVisible();
  await expect(page.getByText('🏛️ Localização: Museu')).toHaveText(
    '🏛️ Localização: Museu Guggenheim, Nova Iorque'
  );
  await expect(page.getByText('💰 Primeira Venda: Nenhuma')).toBeVisible();
  await expect(page.getByText('📈 Última Revenda: Nenhuma')).toBeVisible();
  await expect(page.getByText('"A cor é o teclado, os olhos')).toHaveText(
    '"A cor é o teclado, os olhos são as teclas, a alma é o piano com muitas cordas. - Wassily Kandinsky"'
  );
  await expect(page.getByText('Esta obra é da autoria do')).toHaveText(
    'Esta obra é da autoria do pintor russo Wassily Kandinsky, data de 1923 e localiza-se no Museu Guggenheim de Nova Iorque.'
  );
  await expect(page.getByText('Kandinsky foi considerado o')).toHaveText(
    'Kandinsky foi considerado o primeiro pintor abstracto. Não desenhava figuras. Desenhava traços, formas e cores que se sobrepunham e não significavam nada exato. O pintor vivia a arte de uma forma muito única, inspirando-se na música. Os seus pais eram músicos e ensinaram-no a ouvir muitas coisas, como Schubert.'
  );
  await expect(page.getByText('Quando era pequeno, Kandinsky')).toHaveText(
    'Quando era pequeno, Kandinsky aprendeu a tocar piano e violoncelo, e tinha aulas de desenho com um professor. Mas a família queria muito que ele estudasse Direito, e lá foi ele para a Universidade de Moscovo, com 20 anos. Passados três anos, viajou para Volodga, na Rússia. Foi estudar as regras e as leis dessa cidade e gostou muito da arquitectura, das cores e do brilho das casas e igrejas. Quando, perto dos 30 anos, começou a fazer estudos sobre a arte, inspirou-se no que tinha visto na cidade de Volodga.'
  );
  await expect(page.getByText('Começou a ligar a pintura à')).toHaveText(
    'Começou a ligar a pintura à composição musical, dizendo: A cor é o teclado, os olhos são as teclas, a alma é o piano com muitas cordas. O artista é a mão que toca, tocando uma tecla ou outra para causar vibrações na alma, daí o nome desta obra.'
  );
  await expect(page.getByText('Apesar de não ser a primeira')).toHaveText(
    'Apesar de não ser a primeira, foi nesta composição musical que se concentrou mais nas formas e menos nas cores, o que tornou a geometria viva e cheia de energia. Esta foi a primeira obra onde Kandinsky fez círculos fluorescentes e luminosos. Usou cores, formas, diagonais e linhas fortes. Do lado direito vemos círculos calmos, mas os da esquerda estão mais agitados. O círculo é muito importante para o pintor, porque consegue combinar cores tanto dentro como fora.'
  );
  await expect(page.getByText('Kandinsky ficou famoso por')).toHaveText(
    'Kandinsky ficou famoso por desenvolver a teoria “ponto, linha, plano”. Os pontos são representados pelos círculos, as linhas pelos traços pretos e os planos são as cores.'
  );
  await expect(page.getByText('A parte da direita chama-nos')).toHaveText(
    'A parte da direita chama-nos mais a atenção, pois tem formas mais abundantes. Há outro triângulo parecido com uma montanha no centro da obra. O peso da esquerda é contrabalançado pelo peso das duas grandes formas. A organização dos elementos da tela faz lembrar uma paisagem. O círculo vermelho pode ser o Sol que se vai esconder atrás das montanhas. As formas parecem andar para a frente e para trás numa luta de sons.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Wassily Kandinsky' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Wassily Kandinsky' })
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('Composição com Vermelho, Azul e Amarelo', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page
    .getByRole('link', { name: 'Composição com Vermelho, Azul' })
    .click();
  await expect(page.getByText('🎨 Artista: Piet Mondrian')).toBeVisible();
  await expect(page.getByText('📅 Ano: 1930')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: Holanda')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Neoplasticismo,')).toHaveText(
    '🧩 Estilo: Neoplasticismo, Modernismo'
  );
  await expect(page.getByText('🖌️ Técnica: Óleo sobre tela')).toBeVisible();
  await expect(page.getByText('🏛️ Localização: Museu')).toHaveText(
    '🏛️ Localização: Museu Gemeentemuseum, Haia, Holanda'
  );
  await expect(page.getByText('💰 Primeira Venda: Desconhecido')).toBeVisible();
  await expect(page.getByText('📈 Última Revenda: Desconhecido')).toBeVisible();
  await expect(page.getByText('"O mínimo é o máximo. – Piet')).toHaveText(
    '"O mínimo é o máximo. – Piet Mondrian"'
  );
  await expect(page.getByText('Esta obra é da autoria do')).toHaveText(
    'Esta obra é da autoria do pintor holandês Piet Mondrian. Podem pensar que está invertido, mas, na verdade, é assim mesmo.'
  );
  await expect(page.getByText('Mondrian era um pintor')).toHaveText(
    'Mondrian era um pintor modernista e criador do movimento artístico conhecido como Neoplasticismo. No início, pintava o que via, mas foi retirando elementos considerados superficiais até chegar à geometria pura.'
  );
  await expect(page.getByText('O preto presente no quadro')).toHaveText(
    'O preto presente no quadro representa a ausência de luz, enquanto o branco simboliza a mistura de todas as cores. Mondrian utilizava cores primárias (vermelho, amarelo e azul) porque são a base de todas as outras cores. O preto e o branco servem para contornar e equilibrar os blocos de cor.'
  );
  await expect(page.getByText('Quando Mondrian esteve em')).toHaveText(
    'Quando Mondrian esteve em Nova Iorque, ficou fascinado pela energia do jazz e quis transmitir essas emoções por meio das cores vibrantes e da composição geométrica da obra.'
  );
  await expect(page.getByText('Agora passemos à forma como')).toHaveText(
    'Agora passemos à forma como as cores se equilibram. O quadrado vermelho é a forma maior, e a forma azul cabe nove vezes dentro dele. Os dois retângulos verticais cabem dentro do retângulo horizontal. No canto inferior direito, há dois retângulos do mesmo tamanho: um branco e outro amarelo.'
  );
  await expect(page.getByText('Para Piet Mondrian, o mínimo')).toHaveText(
    'Para Piet Mondrian, o mínimo é o máximo.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Piet Mondrian' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Piet Mondrian' })).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('Fernando Pessoa', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('link', { name: 'Fernando Pessoa Fernando' }).click();
  await expect(page.getByText('🎨 Artista: Almada Negreiros')).toBeVisible();
  await expect(page.getByText('📅 Ano: 1915')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: Portugal')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Modernismo, Cubismo')).toBeVisible();
  await expect(page.getByText('🖌️ Técnica: Óleo sobre tela')).toBeVisible();
  await expect(page.getByText('🏛️ Localização: Centro de')).toHaveText(
    '🏛️ Localização: Centro de Arte Moderna da Fundação Calouste Gulbenkian, Lisboa'
  );
  await expect(page.getByText('💰 Primeira Venda: 30 contos')).toHaveText(
    '💰 Primeira Venda: 30 contos (~15.000 euros)'
  );
  await expect(page.getByText('📈 Última Revenda: 6.700 euros')).toBeVisible();
  await expect(page.getByText('"Um homem é do tamanho do seu')).toHaveText(
    '"Um homem é do tamanho do seu sonho. – Fernando Pessoa"'
  );
  await expect(page.getByText('Esta obra é da autoria do')).toHaveText(
    'Esta obra é da autoria do pintor português Almada Negreiros. Foi pintada numa das arcadas da Praça do Comércio, no café Martinho da Arcada, em Lisboa.'
  );
  await expect(page.getByText('Era Verão de 1915 e, na obra')).toHaveText(
    'Era Verão de 1915 e, na obra, o poeta Fernando Pessoa procurava inspiração, inclinado sobre a mesa. A tensão quebra-se se olharem para o tornozelo que está torcido e numa posição frágil.'
  );
  await expect(page.getByText('O chão e o fundo do quadro')).toHaveText(
    'O chão e o fundo do quadro estão cheios de formas. O pintor desta obra participou, junto com o poeta, na revista Orfeu que aparece no quadro. Os losangos fazem lembrar os fatos de Arlequim, que o pintor gostava muito.'
  );
  await expect(page.getByText('Reparem no açucareiro: está')).toHaveText(
    'Reparem no açucareiro: está pintado com uma amolgadela, pois é um objeto que as pessoas deixam sempre cair frequentemente.'
  );
  await expect(page.getByText('Quando este quadro foi')).toHaveText(
    'Quando este quadro foi vendido pela primeira vez ao restaurante Irmãos Unidos, custou 30 contos, que hoje seria aproximadamente 15.000 euros. Mas passados alguns anos, o restaurante fechou e houve muita gente a querer comprá-lo.'
  );
  await expect(page.getByText('Alguém pagou 6.700 euros, ou')).toHaveText(
    'Alguém pagou 6.700 euros, ou seja, menos da metade do valor atualizado. Nunca uma obra de um pintor português vivo tinha valido tanto.'
  );
  await expect(page.getByText('E aqui fica uma frase típica')).toHaveText(
    "E aqui fica uma frase típica de Pessoa: 'Um homem é do tamanho do seu sonho.'"
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Almada Negreiros' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Almada Negreiros' })
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('Mona Lisa', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('button', { name: '2' }).click();
  await page
    .getByRole('link', { name: 'Mona Lisa Mona Lisa Leonardo' })
    .click();
  await expect(page.getByText('🎨 Artista: Leonardo da Vinci')).toBeVisible();
  await expect(page.getByText('📅 Ano: 1503')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: Itália')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Renascimento')).toBeVisible();
  await expect(page.getByText('🖌️ Técnica: Óleo sobre')).toHaveText(
    '🖌️ Técnica: Óleo sobre madeira'
  );
  await expect(page.getByText('🏛️ Localização: Museu do')).toHaveText(
    '🏛️ Localização: Museu do Louvre, Paris, França'
  );
  await expect(page.getByText('💰 Primeira Venda: Comprada')).toHaveText(
    '💰 Primeira Venda: Comprada pelo rei Francisco I da França em 1518 por 4.000 écus de ouro (equivalente a cerca de 800.000 euros atualmente).'
  );
  await expect(page.getByText('📈 Última Revenda: Nunca foi')).toHaveText(
    '📈 Última Revenda: Nunca foi revendida oficialmente, mas sua estimativa de valor em 2023 era de aproximadamente 834 milhões de dólares, podendo alcançar até 2,5 bilhões de dólares.'
  );
  await expect(page.getByText('"O sorriso mais famoso da')).toHaveText(
    '"O sorriso mais famoso da história da arte. – Descrição popular sobre a Mona Lisa"'
  );
  await expect(page.getByText('Esta obra é da autoria do')).toHaveText(
    'Esta obra é da autoria do pintor italiano Leonardo da Vinci e data de 1503. Já derreteu muitos corações ao longo da história: reis, imperadores, e até o coração do próprio pintor.'
  );
  await expect(page.getByText('Leonardo procurava a perfeiçã')).toHaveText(
    'Leonardo procurava a perfeição e muitas vezes não terminava os seus quadros, mas este foi diferente. Leonardo demorou quatro anos a pintá-lo. Tinha 51 anos quando começou. Pediu a uma mulher chamada Lisa del Giocondo que posasse para ele. Ela demorou a decidir que roupa e jóias usar, e quando se decidiu, pôs um véu transparente porque tinha sido mãe há pouco tempo.'
  );
  await expect(page.getByText('No quadro, ela parece estar')).toHaveText(
    'No quadro, ela parece estar sentada numa varanda muito alta, com uma paisagem de natureza por trás. Mas a paisagem não é real, pois está mal alinhada.'
  );
  await expect(page.getByText('Se olharmos melhor, vemos que')).toHaveText(
    'Se olharmos melhor, vemos que a Mona Lisa não tem sobrancelhas. Alguns acreditam que ela as rapou. Outros pensam que desapareceram num dos restauros que se fez à obra. Mas na verdade, isso faz parte de uma técnica usada pelo pintor conhecida como sfumato. Ele fazia pinceladas finas uma a uma usando pincéis de seda muito suaves para esbater o fumo, e fez isso nas sobrancelhas.'
  );
  await expect(page.getByText('Agora vamos ao sorriso. Não')).toHaveText(
    'Agora vamos ao sorriso. Não parecia muito contente com a cor do vestido ou com as jóias que decidiu não usar, por isso, Leonardo contratou vários bobos da corte para a animar, embora só tenha resultado este sorriso cheio de mistérios, considerado o mais famoso da história da arte.'
  );
  await expect(page.getByText('Este quadro já esteve na casa')).toHaveText(
    'Este quadro já esteve na casa de banho privada do rei Francisco I, pois ele adorava olhar para ela a sós. Comprou o quadro por uma quantia hoje equivalente a oitocentos mil euros. Em 1682, outro rei, Luís XIV, quis tê-la no seu quarto, para olhar para ela antes de dormir e ao acordar. Em 1800, Napoleão Bonaparte “raptou-a” para o seu quarto. Também ele se tinha apaixonado pela Mona Lisa. Depois disso, a partir de 1911, ela passou a ser vista aos olhos de todos no célebre Museu do Louvre, em Paris.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Leonardo da Vinci' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Leonardo da Vinci' })
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('Noite Estrelada', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('link', { name: 'Noite Estrelada Noite' }).click();
  await expect(page.getByText('🎨 Artista: Vincent van Gogh')).toBeVisible();
  await expect(page.getByText('📅 Ano: 1889')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: Holanda')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Pós-Impressionismo')).toBeVisible();
  await expect(page.getByText('🖌️ Técnica: Óleo sobre tela')).toBeVisible();
  await expect(page.getByText('🏛️ Localização: Museu de')).toHaveText(
    '🏛️ Localização: Museu de Arte Moderna, Nova Iorque'
  );
  await expect(page.getByText('💰 Primeira Venda: Van Gogh')).toHaveText(
    '💰 Primeira Venda: Van Gogh nunca vendeu esta pintura em vida.'
  );
  await expect(page.getByText('📈 Última Revenda: O valor')).toHaveText(
    "📈 Última Revenda: O valor estimado de 'Noite Estrelada' ultrapassa 100 milhões de dólares, mas a obra nunca foi vendida oficialmente desde que foi adquirida pelo MoMA."
  );
  await expect(page.getByText('"Esta manhã vi o campo da')).toHaveText(
    '"Esta manhã vi o campo da minha janela muito tempo antes do nascer do Sol; havia apenas a estrela da manhã, que parecia muito grande… – Vincent van Gogh"'
  );
  await expect(page.getByText('Esta obra é da autoria do')).toHaveText(
    'Esta obra é da autoria do pintor holandês Vincent van Gogh.'
  );
  await expect(page.getByText('Van Gogh nasceu em 1853 em')).toHaveText(
    'Van Gogh nasceu em 1853 em Zundert nos países baixos. Era um homem calmo. Pensava muito na vida e nas pequenas coisas do dia-a-dia. Tudo lhe importava, até o mais pequeno pormenor. Gostava muito de lírios e de pintá-los.'
  );
  await expect(page.getByText('Observando o quadro, vemos')).toHaveText(
    'Observando o quadro, vemos uma noite agradável. Um dos amigos de Vincent pedia-lhe sempre para desenhar o que via, e ele via as coisas cheias de movimento e textura, talvez por causa da sua doença. Ele sofria de epilepsia e, nos piores momentos, tinha alucinações e via coisas que mais ninguém via.'
  );
  await expect(page.getByText('Contrariamente à confusão no')).toHaveText(
    'Contrariamente à confusão no céu, a vila está tranquila, sossegada e protegida pelas montanhas em redor. O cipreste tem intenções de chegar ao céu. Faz lembrar labaredas que dançam com o vento. Para muitos, esta árvore simboliza a doença e a morte e está plantada em alguns cemitérios, como se fosse um caminho para o céu cheio de curvas. As luzes das casas parecem comunicar também com as estrelas.'
  );
  await expect(page.getByText('O céu parece estar em')).toHaveText(
    'O céu parece estar em movimento, como se estivesse vivo, e Van Gogh não gostou logo das estrelas que pintou; achou que estavam muito grandes. Ele inspirou-se numa noite em que olhava pela janela e escrevia ao seu irmão Théo: Esta manhã vi o campo da minha janela muito tempo antes do nascer do Sol; havia apenas a estrela da manhã, que parecia muito grande…'
  );
  await expect(page.getByText('Este quadro foi pintado num')).toHaveText(
    'Este quadro foi pintado num quarto do hospício (hospital que trata de doenças mentais) onde o pintor estava, de onde apenas via o céu e as montanhas. A vila, a igreja e o cipreste foram todos pintados de memória; foram fruto da sua imaginação.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Vincent van Gogh' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Vincent van Gogh' })
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('O Beijo', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('button', { name: '2' }).click();
  await page
    .getByRole('link', { name: 'O Beijo O Beijo Gustav Klimt' })
    .click();
  await expect(page.getByText('🎨 Artista: Gustav Klimt')).toBeVisible();
  await expect(page.getByText('📅 Ano: 1907')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: Áustria')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Simbolismo')).toBeVisible();
  await expect(page.getByText('🖌️ Técnica: Óleo sobre tela')).toBeVisible();
  await expect(page.getByText('🏛️ Localização: Galeria')).toHaveText(
    '🏛️ Localização: Galeria Belvedere, Viena'
  );
  await expect(page.getByText('💰 Primeira Venda: Nenhuma')).toBeVisible();
  await expect(page.getByText('📈 Última Revenda: Nenhuma')).toBeVisible();
  await expect(page.getByText('"A arte é a expressão da mais')).toHaveText(
    '"A arte é a expressão da mais alta forma de humanidade, que é a expressão do amor. - Gustav Klimt"'
  );
  await expect(page.getByText('Esta obra é da autoria do')).toHaveText(
    'Esta obra é da autoria do pintor austríaco Gustav Klimt e foi pintada entre 1907 e 1908.'
  );
  await expect(page.getByText('É um quadro muito bonito e')).toHaveText(
    'É um quadro muito bonito e decorativo com cores fortes. É enorme e, embora pareça um rectângulo, na verdade é um quadrado com 1,80 m de lado.'
  );
  await expect(page.getByText('A textura que se vê no quadro')).toHaveText(
    'A textura que se vê no quadro é feita de folhas de ouro e flocos de prata e platina. Klimt gostava muito de pôr ouro nas suas obras.'
  );
  await expect(page.getByText('A pintura tem a forma de uma')).toHaveText(
    'A pintura tem a forma de uma torre, mas é um casal apaixonado. Estão de joelhos, e a mulher abraça o homem por detrás do pescoço. Estão envolvidos num manto que os protege do resto do mundo. Ele tem um pescoço forte e estica-se para lhe dar um beijo carinhoso enquanto lhe segura a cabeça. Os corpos estão tapados por longas túnicas, mas a mulher parece magra e frágil. Já o homem parece grande e forte. Estão em cima de um precipício, e não parece haver nada à volta; apenas eles e a Natureza, cheia de cores como a Primavera. Ele tem uma coroa de folhas de hera na cabeça e ela tem flores. Simbolizam o princípio dos namoros, que nascem como flores fortes e coloridas, cheias de vida. As roupas da mulher estão cheias de círculos, que são símbolos femininos. Já os rectângulos são símbolos masculinos.'
  );
  await expect(page.getByText('Contudo, há um lado menos rom')).toHaveText(
    'Contudo, há um lado menos romântico nesta obra. Há quem ache que não é uma pintura sobre o amor, mas sim sobre o poder que o homem tem na mulher, como se estivesse a segurá-la com força e ela, muito frágil, de olhos fechados, indefesa.'
  );
  await expect(page.getByText('Klimt tinha muito respeito')).toHaveText(
    'Klimt tinha muito respeito pelas mulheres. Muitos até lhe chamavam o “Pintor das Mulheres”, pois elas apareciam em quase todas as suas obras. Mas, independendo da opinião sobre a história do quadro, este já tinha sido vendido antes sequer de estar acabado. Ao longo dos tempos, as pessoas gostaram tanto deste quadro que se tornou um símbolo de amor e paixão.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Gustav Klimt' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Gustav Klimt' })).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('O Casal Arnolfini', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('link', { name: 'O Casal Arnolfini O Casal' }).click();
  await expect(page.getByText('🎨 Artista: Jan van Eyck')).toBeVisible();
  await expect(page.getByText('📅 Ano: 1434')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: Holanda')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Renascimento do')).toHaveText(
    '🧩 Estilo: Renascimento do Norte'
  );
  await expect(page.getByText('🖌️ Técnica: Óleo sobre')).toHaveText(
    '🖌️ Técnica: Óleo sobre madeira'
  );
  await expect(page.getByText('🏛️ Localização: Galeria')).toHaveText(
    '🏛️ Localização: Galeria Nacional de Londres'
  );
  await expect(page.getByText('💰 Primeira Venda: Nenhuma')).toBeVisible();
  await expect(page.getByText('📈 Última Revenda: Nenhuma')).toBeVisible();
  await expect(page.getByText('"Johannes de Eyck fuit hic')).toHaveText(
    '"Johannes de Eyck fuit hic 1434. (tradução: Jan van Eyck esteve aqui. 1434)"'
  );
  await expect(page.getByText('Esta obra é da autoria do')).toHaveText(
    'Esta obra é da autoria do pintor holandês Jan van Eyck, data de 1434 e localiza-se na Galeria Nacional, em Londres.'
  );
  await expect(page.getByText('Os dois membros do casal')).toHaveText(
    'Os dois membros do casal retratado no quadro são Giovanni Arnolfini e Giovanna Cenami, um casal muito rico de Bruges, na Bélgica. Ele vendia e comprava tecidos muito caros, que se podem ver na cama, no tapete, na roupa e no toucado. Até as laranjas são um símbolo de riqueza, pois eram caras e vinham de muito longe. Ambos usam roupas quentes e vistosas. Deviam estar cheios de calor, porque era Primavera, e isso vê-se através da cerejeira cheia de cerejas do lado de fora da janela.'
  );
  await expect(page.getByText('Giovanni jura ser fiel, com a')).toHaveText(
    'Giovanni jura ser fiel, com a mão levantada, e com a ambição de um dia ter filhos. Giovanna parece grávida, mas não está. O casal nunca teve filhos. Ela segura um vestido volumoso e típico da altura, dando a outra mão ao seu marido. O penteado com o cabelo apanhado mostrava que era casada. No espelho, há mais pessoas para além do casal. Um deles é o próprio pintor, que serve de testemunha. E para ninguém ter dúvidas, assinou por cima do espelho: Jan van Eyck esteve aqui.'
  );
  await expect(page.getByText('Este quadro foi pintado um')).toHaveText(
    'Este quadro foi pintado um ano depois da morte de Giovanna. O pintor desenhou-a a partir de outro retrato, pois ela já não era viva. Giovanni encomendou o quadro pois queria ficar com uma recordação da mulher. Os medalhões que rodeiam o espelho têm cenas da paixão de Cristo, estando vivo do lado esquerdo e morto do lado direito. O candelabro só tem uma vela acesa pois simboliza a morte de Giovanna. O espanador ao lado do espelho simboliza as tarefas domésticas que a mulher fazia. Também há um cão no meio do casal, símbolo da fidelidade, e os seus pêlos foram pintados com um pincel muito fino.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Jan van Eyck' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Jan van Eyck' })).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('O Grito', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('button', { name: '2' }).click();
  await page
    .getByRole('link', { name: 'O Grito O Grito Edvard Munch' })
    .click();
  await expect(page.getByText('🎨 Artista: Edvard Munch')).toBeVisible();
  await expect(page.getByText('📅 Ano: 1893')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: Noruega')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Expressionismo')).toBeVisible();
  await expect(page.getByText('🖌️ Técnica: Óleo sobre tela')).toBeVisible();
  await expect(page.getByText('🏛️ Localização: Galeria')).toHaveText(
    '🏛️ Localização: Galeria Nacional de Oslo'
  );
  await expect(page.getByText('💰 Primeira Venda: A primeira')).toHaveText(
    '💰 Primeira Venda: A primeira versão de O Grito foi a pintura feita em óleo sobre tela (1893), e não há registos exatos de quanto foi pago por ela na primeira venda.'
  );
  await expect(page.getByText('📈 Última Revenda: A versão')).toHaveText(
    '📈 Última Revenda: A versão mais famosa de O Grito, que foi pintada em pastel sobre cartão em 1893 e leiloada em 2012, alcançou um preço recorde na sua venda. Em 2012, a pintura foi leiloada pela Sotheby’s em Nova York e foi vendida por $119,9 milhões de dólares, o que a tornou a obra de arte mais cara já vendida em leilão naquele momento.'
  );
  await expect(page.getByText('"Eu estava a andar com dois')).toHaveText(
    '"Eu estava a andar com dois amigos, quando o sol se pôs. De repente, o céu ficou vermelho como sangue. Eu parei e olhei para o horizonte, e senti um grito eterno que passava pela natureza."'
  );
  await expect(page.getByText('Esta obra é da autoria do')).toHaveText(
    'Esta obra é da autoria do pintor norueguês Edvard Munch e data de 1893, mas tem mais três versões que datam de 1893, 1895 e 1910.'
  );
  await expect(page.getByText('A primeira versão foi pintada')).toHaveText(
    'A primeira versão foi pintada sobre cartão, a segunda com lápis de cor, a terceira com cores mais vivas, e a quarta foi uma cópia da primeira.'
  );
  await expect(page.getByText('Comecemos pela primeira versã')).toHaveText(
    'Comecemos pela primeira versão. O pintor estava a caminhar com dois amigos ao pôr-do-sol. De repente, o céu ficou vermelho e ele parou, a olhar. Estava cansado, e apoiou-se na cerca, enquanto os amigos continuaram. A Natureza parecia que gritava, e ele ouviu esse grito. Sentia-se cansado e doente. Talvez por isso tenha desenhado a figura central, assustada, sem cabelo e a tapar os ouvidos, como se quisesse calar o grito. Nem se sabe se é homem ou mulher. Parece um fantasma a ondular. Parece vazio por dentro. Mas o pintor sabia que o grito não tinha existido. Não se ouviu na realidade, e por isso escreveu no céu uma mensagem quase impossível de se notar: Só pode ter sido pintado por um louco. Ao fundo está uma cidade, de nome Oslo, capital da Noruega. Não se percebe onde a cidade está, mas noutra versão deste quadro, distingue-se um pouco melhor. Também se vêem barcos no lago.'
  );
  await expect(page.getByText('Nos últimos anos de vida,')).toHaveText(
    'Nos últimos anos de vida, Munch viveu isolado e acabou por morrer sozinho. Mas esta obra serviu de inspiração para muitos filmes de terror, fatos de Carnaval e até emojis. Passou a ser uma representação universal do medo e do susto. Foi roubado em 1994, e os ladrões deixaram um bilhete a dizer: Obrigado pela falta de segurança. A polícia encontrou-o três meses depois.'
  );
  await expect(page.getByText('Esta série de obras pertence')).toHaveText(
    'Esta série de obras pertence ao Expressionismo. É um movimento artístico que deforma a realidade e expressa os sentimentos humanos e da Natureza. É subjectivo, ou seja, não pinta a realidade como ela é.'
  );
  await expect(page.getByText('A versão pintada em 1910 foi')).toHaveText(
    'A versão pintada em 1910 foi a obra mais cara vendida em leilão. Depois, foi roubada em 2004 e só a encontraram em 2006, com alguns estragos. Até tem manchas de humidade e marcas de cigarros. Dizem que é a versão mais assustadora, pois não tem olhos.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Edvard Munch' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Edvard Munch' })).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('O Lavrador de Café', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('button', { name: '3' }).click();
  await page
    .getByRole('link', { name: 'O Lavrador de Café O Lavrador' })
    .click();
  await expect(page.getByText('🎨 Artista: Cândido Portinari')).toBeVisible();
  await expect(page.getByText('📅 Ano: 1934')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: Brasil')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Modernismo,')).toHaveText(
    '🧩 Estilo: Modernismo, Realismo Social'
  );
  await expect(page.getByText('🖌️ Técnica: Óleo sobre tela')).toBeVisible();
  await expect(page.getByText('🏛️ Localização: Museu de')).toHaveText(
    '🏛️ Localização: Museu de Belas-Artes, Rio de Janeiro'
  );
  await expect(page.getByText('💰 Primeira Venda: Desconhecido')).toBeVisible();
  await expect(page.getByText('📈 Última Revenda: Obras de')).toHaveText(
    '📈 Última Revenda: Obras de Portinari já foram vendidas por valores superiores a 5 milhões de dólares.'
  );
  await expect(page.getByText('"Pinto o que vejo, pinto o')).toHaveText(
    '"Pinto o que vejo, pinto o que sei, pinto o que imagino. – Cândido Portinari"'
  );
  await expect(page.getByText('Esta obra é da autoria do')).toHaveText(
    'Esta obra é da autoria do pintor brasileiro Cândido Portinari e data de 1934.'
  );
  await expect(page.getByText('O pintor nasceu em 1903 no')).toHaveText(
    'O pintor nasceu em 1903 no interior de São Paulo, na cidade de Brodowski, no Brasil. Cresceu numa fazenda de café, onde os seus pais trabalhavam, e começou a pintar aos 9 anos. Impressionavam-lhe os pés dos trabalhadores das fazendas de café. Pés disformes, que podiam contar uma história, tais eram os montes que percorriam e as maleitas que o trabalho no campo causava. Então decidiu pintar o povo e a cultura brasileira.'
  );
  await expect(page.getByText('Portinari pintava com cores')).toHaveText(
    'Portinari pintava com cores fortes a pobreza, as dificuldades e a dor, para toda a gente ver e sentir.'
  );
  await expect(page.getByText('Os pés e os braços do')).toHaveText(
    'Os pés e os braços do lavrador são enormes. Mostram a força que era necessária para fazer aquele trabalho, apresentando-o descalço porque é muito pobre. A árvore cortada é uma crítica do pintor à plantação de novas árvores, enquanto outras são destruídas. As cores usadas ajudam-nos a ver bem a cara do trabalhador, que está muito cansado, pelo que se apoia na enxada para descansar um pouco.'
  );
  await expect(page.getByText('Portinari foi um dos pintores')).toHaveText(
    'Portinari foi um dos pintores mais importantes da história da arte do Brasil, sendo conhecido no resto do mundo, pois pintou mais de 5000 obras. Morreu com 58 anos, com problemas de saúde, pois as tintas que usava continham chumbo e ele respirava-as sempre que pintava, pelo que ficou doente.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Cândido Portinari' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Cândido Portinari' })
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('O Mar', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('button', { name: '3' }).click();
  await page.getByRole('link', { name: 'O Mar O Mar Maria Keil' }).click();
  await expect(page.getByText('🎨 Artista: Maria Keil')).toBeVisible();
  await expect(page.getByText('📅 Ano: 1958')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: Portugal')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Modernismo')).toBeVisible();
  await expect(page.getByText('🖌️ Técnica: Azulejo')).toBeVisible();
  await expect(page.getByText('🏛️ Localização: Avenida')).toHaveText(
    '🏛️ Localização: Avenida Infante Santo, Lisboa'
  );
  await expect(page.getByText('💰 Primeira Venda: Nenhuma')).toBeVisible();
  await expect(page.getByText('📈 Última Revenda: Nenhuma')).toBeVisible();
  await expect(page.getByText('"A azulejaria, para mim,')).toHaveText(
    '"A azulejaria, para mim, sempre foi uma maneira de unir o tradicional com o moderno, criando algo único para cada espaço. – Maria Keil"'
  );
  await expect(page.getByText('Este enorme azulejo é da')).toHaveText(
    'Este enorme azulejo é da autoria da artista portuguesa Maria Keil, data de 1958 a 1959 e localiza-se na Avenida Infante Santo, em Lisboa.'
  );
  await expect(page.getByText('Maria Keil era uma mulher de')).toHaveText(
    'Maria Keil era uma mulher de várias artes: design de mobiliário, cenografia, design gráfico, pintura, ilustração, publicidade, desenho, tapeçaria e azulejaria. Podemos ver as suas obras no metropolitano de Lisboa. Ela pintou paredes de azulejos em quase todas as estações. Nasceu em 1914, em Silves, Portugal. Começou um curso de pintura aos 21 anos, mas não o terminou porque achou que a pintura a óleo não lhe chegava. Queria mais e, por isso, aprendeu muitas técnicas e formas de expressar a sua arte. Em 1957, o seu marido, Keil do Amaral, era arquitecto do metropolitano de Lisboa. Fizeram-se grandes obras, e quando estavam quase a terminar, já não havia dinheiro para decorar as estações. Iam ficar em betão.'
  );
  await expect(page.getByText('Esta obra é uma homenagem ao')).toHaveText(
    'Esta obra é uma homenagem ao povo português, que anda sempre a viajar e a partir para novas aventuras e experiências além-mar. Maria Keil quis recuperar uma tradição perdida: a arte do azulejo. Os losangos presentes no painel têm vários tamanhos e formas. Uns são mais esticados e outros mais largos.'
  );
  await expect(page.getByText('Por exemplo, na base das')).toHaveText(
    'Por exemplo, na base das escadas, parece que se vê a ondulação das algas. Os losangos mais à direita e em baixo parecem vários peixes seguidos. Na parte de cima, distinguimos o mar, a linha do horizonte e o céu. No meio de toda esta geometria, existem figuras. Por cima do início da subida das escadas, há um pescador que segura um bebé e um barco. Simbolizam os santos de Lisboa. O bebé, Santo António, e o barco, São Vicente. O barco parece fazer parte da frota, mas está mais ao fundo. Os dois triângulos podem simbolizar as salinas, também relacionadas com o mar. Também há conchas e búzios espalhados pelo painel.'
  );
  await expect(page.getByText('As escadas estão')).toHaveText(
    'As escadas estão perfeitamente integradas no painel. A sua inclinação faz um X com o que está desenhado, garantindo o equilíbrio da obra.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Maria Keil' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Maria Keil' })).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('O Sonho', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('button', { name: '3' }).click();
  await page.getByRole('link', { name: 'O Sonho O Sonho Henri' }).click();
  await expect(page.getByText('🎨 Artista: Henri Rousseau')).toBeVisible();
  await expect(page.getByText('📅 Ano: 1910')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: França')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Impressionismo')).toBeVisible();
  await expect(page.getByText('🖌️ Técnica: Óleo sobre tela')).toBeVisible();
  await expect(page.getByText('🏛️ Localização: Museu de')).toHaveText(
    '🏛️ Localização: Museu de Arte Moderna, Nova Iorque'
  );
  await expect(page.getByText('💰 Primeira Venda: Nenhuma')).toBeVisible();
  await expect(page.getByText('📈 Última Revenda: Nenhuma')).toBeVisible();
  await expect(page.getByText('"Nada me faz mais feliz do')).toHaveText(
    '"Nada me faz mais feliz do que observar a natureza e pintar exatamente como a vejo. — Henri Rousseau"'
  );
  await expect(page.getByText('Esta obra é da autoria do')).toHaveText(
    'Esta obra é da autoria do pintor francês Henri Rousseau e data de 1910.'
  );
  await expect(page.getByText('Rousseau nasceu em Laval,')).toHaveText(
    'Rousseau nasceu em Laval, França, em 1844. Dizem que começou a pintar aos 40 anos, mas há registos de que talvez tenha começado mais cedo. Não frequentou nenhuma escola de arte. Aprendeu a pintar sozinho. Era conhecido como O Aduaneiro, por ter trabalhado como inspector de alfândega.'
  );
  await expect(page.getByText('Embora Rousseau já tivesse')).toHaveText(
    'Embora Rousseau já tivesse pintado muitas obras, outros artistas da época não o viam como um pintor a sério. Achavam-no inferior, amador e ingénuo. Uma vez, em 1908, Picasso convidou-o para o seu estúdio em Paris. Quis condecorá-lo como O Maior Artista do Mundo. Um grupo de amigos de Picasso que lá estava riu-se com isso, mas Rousseau não percebeu que estava a ser gozado, e abraçou Picasso, dizendo-lhe:'
  );
  await expect(page.getByText('Nós somos os maiores artistas')).toHaveText(
    'Nós somos os maiores artistas do nosso tempo. Tu pintas no estilo egípcio à antiga e eu pinto no estilo moderno.'
  );
  await expect(page.getByText('A partir de 1910, Rousseau')).toHaveText(
    'A partir de 1910, Rousseau começou a pintar muitas obras sobre a selva, entre as quais O Sonho. Mostra uma mulher que tem um sonho onde ouve uma flauta de um encantador de serpentes, enquanto a lua reflecte nos rios e nas árvores verdejantes. As serpentes esperam os sons do instrumento, O encantador confunde-se com as plantas à sua volta, e os seus olhos parecem fixar-nos. Há um leão que parece vir na nossa direção. A leoa olha na direção da mulher, mas sem querer fazer-lhe mal. Há também um elefante escondido no meio das plantas. Um pássaro amarelo tem problemas com o equilíbrio e está preso por uma pata. Outro pássaro está direito no meio das laranjas. Também há vários cachos de bananas e alguns macacos espalhados pelo quadro.'
  );
  await expect(page.getByText('Esta foi a última obra de')).toHaveText(
    'Esta foi a última obra de Rousseau. Morreu com 66 anos. No fim da sua vida, alguns artistas já reconheciam o valor dos seus trabalhos. O que é certo é que ele nunca desistiu dos seus sonhos.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Henri Rousseau' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Henri Rousseau' })
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('O Suprematismo', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('button', { name: '3' }).click();
  await page
    .getByRole('link', { name: 'O Suprematismo O Suprematismo' })
    .click();
  await expect(page.getByText('🎨 Artista: Kazimir Malevich')).toBeVisible();
  await expect(page.getByText('📅 Ano: 1913')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: Rússia')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Suprematismo')).toBeVisible();
  await expect(page.getByText('🖌️ Técnica: Materiais e')).toHaveText(
    '🖌️ Técnica: Materiais e formas'
  );
  await expect(page.getByText('🏛️ Localização: Museu de')).toHaveText(
    '🏛️ Localização: Museu de Arte Moderna, Nova Iorque'
  );
  await expect(page.getByText('💰 Primeira Venda: Nenhum.')).toHaveText(
    '💰 Primeira Venda: Nenhum. Durante a sua vida, Malevich estava mais preocupado com o desenvolvimento do movimento suprematista do que com a comercialização de suas obras. A maioria das suas obras foi exibida em exposições, e ele não era amplamente reconhecido comercialmente durante sua vida.'
  );
  await expect(page.getByText('📈 Última Revenda: Quanto ao')).toHaveText(
    '📈 Última Revenda: Quanto ao preço da última revenda de uma obra de Malevich, em leilões modernos, os valores podem ser bastante altos.'
  );
  await expect(page.getByText('"A arte não é um reflexo da')).toHaveText(
    '"A arte não é um reflexo da realidade, mas sim a construção de uma nova realidade. - Kazimir Malevich"'
  );
  await expect(page.getByText('Este movimento era seguido')).toHaveText(
    'Este movimento era seguido pelo pintor russo Kazimir Malevich e teve início em 1913.'
  );
  await expect(page.getByText('O pintor nasceu em 1879, em')).toHaveText(
    'O pintor nasceu em 1879, em Kiev, na Ucrânia. Aos cinco anos, terminou a escola de agricultura. Gostava muito do campo, mas também gostava muito de pintura, e começou a aprender sozinho a pintar o mundo que o rodeava. Com onze anos, entrou na Academia de Kiev. Aos vinte e três anos, mudou-se para Moscovo, na Rússia, depois da morte do seu pai.'
  );
  await expect(page.getByText('O percurso de Malevich foi')).toHaveText(
    'O percurso de Malevich foi muito rápido. Ele passou por muitas correntes artísticas em poucos anos. Primeiro foi o Período Cézaniano, em 1910. Inspirou-se em Paul Cézanne e na sua técnica de arte e estudo das formas: cilindros, esferas e cones. Em 1911, passou ao Fauvismo. Usavam-se cores muito vivas e fortes. Entre 1912 e 1913, Malevich passou pelo Cubismo. Usavam-se formas geométricas, cubos e volumes para pintar figuras. Em 1914, o pintor alcançou o Futurismo. As obras deste período mostram velocidade, movimento, máquinas e tecnologia. E finalmente, o pintor chegou ao Suprematismo a partir de 1915. Não há ordem nem hierarquia. Não vemos mais nada para além das cores, das formas, da textura da própria pintura e das emoções que transmitem.'
  );
  await expect(page.getByText('As geometrias flutuam sem')).toHaveText(
    'As geometrias flutuam sem peso, espaço ou tempo e as diagonais dão movimento infinito. Não se consegue perceber o que é. Não é uma pessoa, nem um objecto, nem uma paisagem, porque não é suposto ser nada. Até parece haver uma quarta dimensão, uma dimensão espiritual. É a arte mais pura. Malevich reduz a pintura ao mínimo de cor e de forma para atingir o máximo.'
  );
  await expect(page.getByText('Vivia-se uma revolução na Rú')).toHaveText(
    'Vivia-se uma revolução na Rússia e a própria arte também estava em revolução. Em 1915, o pintor fez uma exposição chamada 0,10. O zero significa o nada, e o 10 era o número dos pintores que participaram na exposição.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Kazimir Malevich' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Kazimir Malevich' })
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('Os Baloiços e A Árvore na Prisão', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('button', { name: '3' }).click();
  await page.getByRole('link', { name: 'Os Baloiços e A Árvore na' }).click();
  await expect(
    page.getByText('🎨 Artista: Maria Helena Vieira da Silva')
  ).toBeVisible();
  await expect(page.getByText('📅 Ano: 1931')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: Portugal')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Expressionismo,')).toHaveText(
    '🧩 Estilo: Expressionismo, Abstracionismo'
  );
  await expect(page.getByText('🖌️ Técnica: Óleo sobre tela')).toBeVisible();
  await expect(page.getByText('🏛️ Localização: Fundação')).toHaveText(
    '🏛️ Localização: Fundação Arpad Szenes-Vieira da Silva, Lisboa'
  );
  await expect(page.getByText('💰 Primeira Venda: Desconhecido')).toBeVisible();
  await expect(page.getByText('📈 Última Revenda: Algumas')).toHaveText(
    '📈 Última Revenda: Algumas obras de Vieira da Silva foram leiloadas por valores superiores a 2 milhões de euros.'
  );
  await expect(page.getByText('"A arte é uma forma de')).toHaveText(
    '"A arte é uma forma de liberdade."'
  );
  await expect(page.getByText('Estas duas obras são da')).toHaveText(
    'Estas duas obras são da autoria da pintora portuguesa Maria Helena Vieira da Silva.'
  );
  await expect(page.getByText('A pintora nasceu no final da')).toHaveText(
    'A pintora nasceu no final da Primavera de 1908. As suas primeiras recordações são com dois anos e meio. Estava na Suíça com os pais e era Natal. Lembra-se da neve, da montanha, dos patinadores e do trenó, mas o seu pai estava doente e morreu pouco tempo depois. Foi então viver com a sua mãe para casa dos seus avós. Era uma casa enorme, cheia de mapas, pianos e imensos livros, tantos livros, que havia uma biblioteca para ela ler sempre que quisesse. Vivia num mundo de sons e cores, um mundo só dela.'
  );
  await expect(page.getByText('Aprendeu a ler, a tocar piano')).toHaveText(
    'Aprendeu a ler, a tocar piano e a pintar, tendo aulas em casa. Nunca foi à escola. Aos 20 anos, decidiu ir estudar pintura para Paris, o que não era comum para as meninas daquele tempo. Casou com um pintor húngaro chamado Arpad Szenes. Viveram juntos 55 anos. Não tiveram filhos, mas os seus quadros eram como se o fossem. Hoje há um museu em Lisboa com obras dos dois, de nome Fundação Arpad Szenes-Vieira da Silva, onde se encontram os quadros aqui referidos.'
  );
  await expect(page.getByText('O primeiro, com o título “Os')).toHaveText(
    'O primeiro, com o título “Os Baloiços”, data de 1931. Nesta obra, Vieira da Silva quis fazer uma representação do tempo. Vêem-se duas figuras a baloiçar, e parece que vão chocar uma com a outra. Eles baloiçam ao som do violoncelista que está na parte de baixo.'
  );
  await expect(page.getByText('O segundo quadro, com o tí')).toHaveText(
    'O segundo quadro, com o título “A Árvore na Prisão”, data de 1932. Para a autora, é um cubo-prisão com uma árvore dentro. É um estudo de perspectivas para mostrar algo fechado, contido num espaço aberto e livre.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Maria Helena Vieira' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Maria Helena Vieira da Silva' })
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('Parto da Viola', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('button', { name: '3' }).click();
  await page
    .getByRole('link', { name: 'Parto da Viola Parto da Viola' })
    .click();
  await expect(
    page.getByText('🎨 Artista: Amadeo de Souza-Cardoso')
  ).toBeVisible();
  await expect(page.getByText('📅 Ano: 1916')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: Portugal')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Modernismo,')).toHaveText(
    '🧩 Estilo: Modernismo, Cubismo, Expressionismo'
  );
  await expect(page.getByText('🖌️ Técnica: Óleo sobre tela')).toBeVisible();
  await expect(page.getByText('🏛️ Localização: Museu do')).toHaveText(
    '🏛️ Localização: Museu do Chiado, Lisboa, Portugal'
  );
  await expect(page.getByText('💰 Primeira Venda: Desconhecido')).toBeVisible();
  await expect(page.getByText('📈 Última Revenda: Último')).toHaveText(
    '📈 Última Revenda: Último leilão conhecido: 2.400.000 euros'
  );
  await expect(page.getByText('"A beleza deste quadro é a')).toHaveText(
    '"A beleza deste quadro é a quantidade de coisas que se podem experimentar. – Amadeo de Souza-Cardoso"'
  );
  await expect(page.getByText('Esta obra é da autoria do')).toHaveText(
    'Esta obra é da autoria do pintor português Amadeo de Souza-Cardoso. O seu verdadeiro título é muito comprido: Trou de la serrure, parto da viola, bon ménage, fraise avant garde, o que significa: buraco da fechadura, parto da viola, boa casa, morango vanguarda.'
  );
  await expect(page.getByText('O buraco da fechadura aparece')).toHaveText(
    'O buraco da fechadura aparece ligeiramente à direita da viola.'
  );
  await expect(page.getByText('A viola que aparece no quadro')).toHaveText(
    'A viola que aparece no quadro é uma viola-d’arco, pertencente à família do violino. As cordas e as notas estão espalhadas pela obra.'
  );
  await expect(page.getByText("A parte correspondente a 'boa")).toHaveText(
    "A parte correspondente a 'boa casa' é o chão de azulejos, as jarras e a boneca que aparecem à esquerda."
  );
  await expect(page.getByText("A parte correspondente ao '")).toHaveText(
    "A parte correspondente ao 'morango vanguarda' é o morango que está no chão de azulejos."
  );
  await expect(
    page.getByText(
      'A beleza deste quadro é a quantidade de coisas que se podem experimentar.',
      { exact: true }
    )
  ).toBeVisible();
  await expect(page.getByText('Amadeo de Souza-Cardoso era')).toHaveText(
    'Amadeo de Souza-Cardoso era conhecido por pintar muitas coisas nunca antes vistas. Misturava muitas técnicas diferentes nas suas obras.'
  );
  await expect(page.getByText('Contudo, o pintor tinha')).toHaveText(
    'Contudo, o pintor tinha outros quadros nos quais usava areia, ganchos de cabelo, pedaços de espelhos, entre outras coisas. Até parecia uma criança.'
  );
  await expect(page.getByText('A parte mais triste desta aná')).toHaveText(
    'A parte mais triste desta análise é que o pintor adoeceu e morreu com 30 anos e ainda não tinha pintado todos os quadros que queria. Se hoje fosse vivo, teria sido um dos mais talentosos de sempre.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Amadeo de Souza-' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Amadeo de Souza-Cardoso' })
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('Rapariga com brinco de pérola', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('button', { name: '4' }).click();
  await page
    .getByRole('link', { name: 'Rapariga com brinco de pérola' })
    .click();
  await expect(page.getByText('🎨 Artista: Johannes Vermeer')).toBeVisible();
  await expect(page.getByText('📅 Ano: 1665')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: Holanda')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Barroco')).toBeVisible();
  await expect(page.getByText('🖌️ Técnica: Óleo sobre tela')).toBeVisible();
  await expect(page.getByText('🏛️ Localização: Mauritshuis')).toHaveText(
    '🏛️ Localização: Mauritshuis, Haia'
  );
  await expect(page.getByText('💰 Primeira Venda: 2 florins')).toHaveText(
    '💰 Primeira Venda: 2 florins e 30 cêntimos (~1 euro)'
  );
  await expect(page.getByText('📈 Última Revenda: Valor')).toHaveText(
    '📈 Última Revenda: Valor inestimável, exposta no Mauritshuis em Haia'
  );
  await expect(page.getByText('"O tempo parou, e ela')).toHaveText(
    '"O tempo parou, e ela permanece eterna."'
  );
  await expect(page.getByText('Este retrato é da autoria do')).toHaveText(
    'Este retrato é da autoria do pintor holandês Johannes Vermeer (1632 – 1675). É um dos tronies mais conhecidos.'
  );
  await expect(page.getByText('Um tronie não é bem um')).toHaveText(
    'Um tronie não é bem um retrato, pois a pessoa retratada muitas vezes não existia. Era uma invenção dos pintores que queriam mostrar a sua técnica com estudos de expressões faciais. Eles exageravam e fantasiavam uma personagem que podia ser um velho, uma mulher, um homem ou até mesmo um menino, todos eles com muita expressão. Havia uns felizes e outros mais tristes, entre os quais se destaca o Menino da Lágrima.'
  );
  await expect(page.getByText('Analisemos agora a Rapariga')).toHaveText(
    'Analisemos agora a Rapariga do Brinco de Pérola. Linda, elegante, encantadora. Tal como grande parte das obras de Vermeer, transmitia tranquilidade. Um belo dia, esta obra foi vendida num leilão como se fosse um quadro igual aos outros. Custou apenas dois florins e trinta cêntimos, ou seja, um euro. Custou muito pouco pois ninguém sabia quem a tinha pintado. Foi um holandês que o comprou, pois queria manter as obras no país.'
  );
  await expect(page.getByText('Quando este quadro foi')).toHaveText(
    'Quando este quadro foi restaurado, surgiu um monograma difícil de se ver no canto superior esquerdo.'
  );
  await expect(page.getByText('Sobre a rapariga, ninguém')).toHaveText(
    'Sobre a rapariga, ninguém sabe quem ela é. Pode ser a esposa do pintor, uma das filhas ou até uma rapariga inventada. A obra é conhecida como a Mona Lisa do Norte da Europa. Tem um olhar surpreendido, a boca entreaberta e os lábios molhados, como se quisesse dizer alguma coisa. Parece que o tempo parou e não se sabe se ela se está a virar para nós ou se está a virar costas para se ir embora. O turbante que tem não se usava na altura. Pode ser para lhe dar um ar diferente e exótico. E a pérola também não é real, pois naquele tempo não havia pérolas deste tamanho. Há quem diga que é um brinco de vidro, outros acham que o pintor inventou o tamanho da pérola.'
  );
  await expect(page.getByText('Esta obra é conhecida no')).toHaveText(
    'Esta obra é conhecida no mundo inteiro. Está tão bem pintada que até parece uma fotografia.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Johannes Vermeer' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Johannes Vermeer' })
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('Tríptico Auto-retrato, Sonho e Família', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('button', { name: '4' }).click();
  await page
    .getByRole('link', { name: 'Tríptico Auto-retrato, Sonho' })
    .click();
  await expect(page.getByText('🎨 Artista: Paula Rego')).toBeVisible();
  await expect(page.getByText('📅 Ano: Desconhecido')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: Portugal')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Expressionismo,')).toHaveText(
    '🧩 Estilo: Expressionismo, Realismo Contemporâneo'
  );
  await expect(page.getByText('🖌️ Técnica: Óleo sobre tela')).toBeVisible();
  await expect(page.getByText('🏛️ Localização: Desconhecido')).toBeVisible();
  await expect(page.getByText('💰 Primeira Venda: Sem')).toHaveText(
    '💰 Primeira Venda: Sem registros de venda pública.'
  );
  await expect(page.getByText('📈 Última Revenda: Sem')).toHaveText(
    '📈 Última Revenda: Sem registros de revenda conhecidos.'
  );
  await expect(page.getByText('"Quando estava contente, os')).toHaveText(
    '"Quando estava contente, os quadros eram fortes e cheios de cor. Quando estava triste, fazia quadros confusos e estranhos. – Paula Rego"'
  );
  await expect(page.getByText('Este tríptico é da autoria da')).toHaveText(
    'Este tríptico é da autoria da pintora portuguesa Paula Rego. Desde cedo que a pintora sabia que era uma mulher à frente do seu tempo. Gostava de pensar em novas ideias e de pintar tudo o que sentia.'
  );
  await expect(page.getByText('Aqui está a obra. É uma histó')).toHaveText(
    'Aqui está a obra. É uma história em três momentos. O primeiro é o Auto-retrato. Ela pintou-se a si própria. Tem uma máscara de macaco porque considerava que os pintores imitavam tudo o que viam, tal como os macacos. Neste caso, ela imita-se a si própria a pintar. A figura branca ao lado dela simboliza a morte e a doença. Tem uma máscara de pássaro com um bico comprido e óculos escuros por causa da Peste Negra, uma doença que matou muita gente.'
  );
  await expect(
    page.getByRole('img', { name: 'Imagem de Tríptico Auto-' }).first()
  ).toBeVisible();
  await expect(page.getByText('O segundo momento é o Sonho.')).toHaveText(
    'O segundo momento é o Sonho. A pintora tinha muitos pesadelos e sonhava com o filho mais novo que tinha deixado em Portugal quando foi estudar para a Inglaterra, com uma bolsa da Fundação Calouste Gulbenkian. Levou as duas filhas mais velhas, mas não pôde levar o mais novo, pois era muito pequeno e podia distraí-la enquanto pintava. Ela tem uma cera na mão, pois está contente por ser pintora, mas ao mesmo tempo está triste por não estar com o seu filho.'
  );
  await expect(page.getByText('O terceiro momento é a Famí')).toHaveText(
    'O terceiro momento é a Família. Mostra a morte a querer separar a pintora do marido. Ele tinha uma doença grave e, pouco a pouco, começou a ter cada vez menos capacidade de fazer tudo sozinho. Paula Rego vivia triste, preocupada e cada vez mais distante. Houve uma altura em que o marido apanhou uma constipação da filha e não quis ser curado, deixando que a morte o levasse.'
  );
  await expect(
    page.getByRole('img', { name: 'Imagem de Tríptico Auto-' }).nth(1)
  ).toBeVisible();
  await expect(page.getByText('Paula continuou a pintar o')).toHaveText(
    'Paula continuou a pintar o que sentia. Quando estava contente, os quadros eram fortes e cheios de cor. Quando estava triste, fazia quadros confusos e estranhos. Por outras palavras, este tríptico mostra o quão era difícil para Paula ser mãe, mulher e pintora.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Paula Rego' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Paula Rego' })).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('Um Bar no Folies-Bergère', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('button', { name: '4' }).click();
  await page.getByRole('link', { name: 'Um Bar no Folies-Bergère Um' }).click();
  await expect(page.getByText('🎨 Artista: Édouard Manet')).toBeVisible();
  await expect(page.getByText('📅 Ano: 1882')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: França')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Impressionismo')).toBeVisible();
  await expect(page.getByText('🖌️ Técnica: Óleo sobre tela')).toBeVisible();
  await expect(page.getByText('🏛️ Localização: Instituto de')).toHaveText(
    '🏛️ Localização: Instituto de Arte Courtauld, Londres'
  );
  await expect(page.getByText('💰 Primeira Venda: Nenhuma')).toBeVisible();
  await expect(page.getByText('📈 Última Revenda: Nenhuma')).toBeVisible();
  await expect(page.getByText('"Eu pinto o que vejo e não o')).toHaveText(
    '"Eu pinto o que vejo e não o que os outros gostariam de ver. - Édouard Manet"'
  );
  await expect(page.getByText('Esta obra é da autoria do')).toHaveText(
    'Esta obra é da autoria do pintor francês Édouard Manet e data de 1882. Foi o último grande quadro do pintor.'
  );
  await expect(page.getByText('Folies-Bergère é o nome de')).toHaveText(
    'Folies-Bergère é o nome de uma casa de espectáculos que era muito frequentada em Paris naquela altura. Assistia-se a espectáculos de trapézio, danças e música, enquanto se desfrutava de uma bebida.'
  );
  await expect(page.getByText('A figura central no quadro é')).toHaveText(
    'A figura central no quadro é a Suzon, uma das empregadas do bar. Primeiro o pintor fez os esboços no local e só depois montou um bar no seu estúdio, e pediu a Suzon que posasse para ele. Ela parece olhar no vazio. Está calma, apesar da agitação à sua volta. Pelo reflexo do espelho, vemos que o bar está cheio. Há pessoas a falar, a observar e até a atuar. As luzes redondas mostram que o bar estava na moda e era moderno. Quanto à Suzon, não se sabe se está triste, pensativa, ou as duas coisas ao mesmo tempo, mas pelo espelho, vemos alguém a falar com ela. Não parece ser real, senão estaria à frente dela. Ela tem flores ao peito e uma pulseira valiosa num braço. Pode ter sido o homem que lhas ofereceu. As garrafas no balcão não estão pela ordem certa. Parece um jogo de espelhos (ver “As Meninas”). A cerveja é para os mais pobres e o champanhe é para os mais ricos.'
  );
  await expect(page.getByText('Era um sítio onde todos se')).toHaveText(
    'Era um sítio onde todos se misturavam e conviviam, tivessem menos ou mais dinheiro. Vemos a assinatura do pintor numa das garrafas e o ano em que a pintou.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Édouard Manet' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Édouard Manet' })).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('Uma Tarde de Domingo na Ilha de Grande Jatte', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('button', { name: '4' }).click();
  await page
    .getByRole('link', { name: 'Uma Tarde de Domingo na Ilha' })
    .click();
  await expect(
    page.getByText('🎨 Artista: Georges-Pierre Seurat')
  ).toBeVisible();
  await expect(page.getByText('📅 Ano: 1884')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: França')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Pós-Impressionismo')).toBeVisible();
  await expect(page.getByText('🖌️ Técnica: Pontilhismo')).toBeVisible();
  await expect(page.getByText('🏛️ Localização: Art')).toHaveText(
    '🏛️ Localização: Art Institute of Chicago, EUA'
  );
  await expect(page.getByText('💰 Primeira Venda: Nenhuma')).toBeVisible();
  await expect(page.getByText('📈 Última Revenda: Adquirida')).toHaveText(
    '📈 Última Revenda: Adquirida pelo Art Institute of Chicago por aproximadamente $1 milhão em 1926.'
  );
  await expect(page.getByText('"A cor é o olho da pintura, o')).toHaveText(
    '"A cor é o olho da pintura, o ponto é sua alma. - Georges-Pierre Seurat"'
  );
  await expect(page.getByText('Esta obra é da autoria do')).toHaveText(
    'Esta obra é da autoria do pintor francês Georges-Pierre Seurat e data de 1884.'
  );
  await expect(page.getByText('Seurat nasceu em 1859, em')).toHaveText(
    'Seurat nasceu em 1859, em Paris, França. O seu pai era um homem distante e vivia numa casa fora da cidade. Às terças-feiras ia visitar a família, jantava em silêncio e voltava a apanhar o comboio para sua casa. Tal como o pai, Seurat também tinha uma vida dupla; jantava todos os dias com a mãe e, depois, voltava para a sua própria casa. Era um homem muito respeitado, mas no dia anterior à sua morte, foi revelado que vivia com uma senhora que ninguém sabia e tinha um filho com ela. Morreu muito novo, com 31 anos, mas deixou um legado muito importante para a história da arte: o estudo da cor.'
  );
  await expect(page.getByText('O pintor começou a estudar a')).toHaveText(
    'O pintor começou a estudar a cor aos 17 anos. Acreditava que dois pontos de cores diferentes eram mais vibrantes para o nosso olhar do que essas cores misturadas. Esta técnica foi chamada Divisionismo, hoje conhecida como Pontilhismo.'
  );
  await expect(page.getByText('O vestido da senhora que')).toHaveText(
    'O vestido da senhora que segura a sombrinha é roxo. Resulta da proximidade dos pontos azuis e vermelhos. Seurat demorou dois anos a pintar este quadro, e tinha apenas 25 quando o terminou, em 1886. É uma obra muito grande, com três metros de comprimento e dois de altura. Durante meses, Seurat foi à ilha de Grande Jatte fazer estudos e desenhos. Fez 30 desenhos a óleo, 28 desenhos preparatórios e 3 telas, e era no seu estúdio que desenhava a obra final. Primeiro desenhou o cenário, e só depois posicionou as várias figuras. Interessava-lhe mais o equilíbrio entre as posições das personagens do que o detalhe das personagens em si.'
  );
  await expect(page.getByText('Por exemplo, muitas delas não')).toHaveText(
    'Por exemplo, muitas delas não têm pés. Parece que flutuam. A relva está perfeita, as pessoas não estão a beber ou a comer. Há alguns elementos ruidosos como um homem a tocar trompete, um cão a ladrar e uma rapariga a brincar sozinha. Mas o sentimento geral é silencioso. É um momento isolado, como se o mundo tivesse parado. Ninguém está a falar, mesmo quem está com alguém ao lado. Só um casal parece estar a comunicar dando um abraço. A menina com o vestido branco está a olhar para nós. É a única parte da obra que não tem pontos. Até parece que brilha. Vemos ainda uma enfermeira com o seu paciente, uma senhora a pescar, soldados a passear, uma bandeira francesa num barco, um macaco e três cães em partes diferentes do quadro. Também se vêm fábricas ao fundo.'
  );
  await expect(page.getByText('O casal à direita parece')).toHaveText(
    'O casal à direita parece estar demasiado grande com uma proporção e perspectiva erradas. Se a obra for observada a 45 graus a partir da direita, as perspectivas já estão certas.'
  );
  await expect(page.getByText('Também há uma obra de Seurat')).toHaveText(
    'Também há uma obra de Seurat do outro lado do Rio Sena:'
  );
  await expect(
    page.getByRole('img', { name: 'Imagem de Uma Tarde de' })
  ).toBeVisible();
  await expect(page.getByText('Mostra um grupo de')).toHaveText(
    'Mostra um grupo de trabalhadores na sua pausa, a descansar. Eles trabalhavam nas fábricas que se vêm ao fundo.'
  );
  await expect(
    page.getByRole('img', { name: 'Foto de Georges-Pierre Seurat' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Georges-Pierre Seurat' })
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});

test('Zé Povinho', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'OBRAS' }).click();
  await expect(page.getByText('Obras de Arte')).toBeVisible();
  await page.getByRole('button', { name: '4' }).click();
  await page
    .getByRole('link', { name: 'Zé Povinho Zé Povinho Rafael' })
    .click();
  await expect(
    page.getByText('🎨 Artista: Rafael Bordalo Pinheiro')
  ).toBeVisible();
  await expect(page.getByText('📅 Ano: 1875')).toBeVisible();
  await expect(page.getByText('🌍 País de Origem: Portugal')).toBeVisible();
  await expect(page.getByText('🧩 Estilo: Caricatura, Sátira')).toHaveText(
    '🧩 Estilo: Caricatura, Sátira Política'
  );
  await expect(page.getByText('🖌️ Técnica: Ilustração, Cerâ')).toHaveText(
    '🖌️ Técnica: Ilustração, Cerâmica'
  );
  await expect(page.getByText('🏛️ Localização: Museu')).toHaveText(
    '🏛️ Localização: Museu Bordalo Pinheiro, Lisboa'
  );
  await expect(page.getByText('💰 Primeira Venda: 30 réis (~')).toHaveText(
    '💰 Primeira Venda: 30 réis (~2 euros)'
  );
  await expect(page.getByText('📈 Última Revenda: 6.700')).toHaveText(
    '📈 Última Revenda: 6.700 euros (45 vezes mais)'
  );
  await expect(page.getByText('"O povo é que manda no país,')).toHaveText(
    '"O povo é que manda no país, e não o rei. – Rafael Bordalo Pinheiro"'
  );
  await expect(page.getByText('O Zé Povinho foi inventado')).toHaveText(
    "O Zé Povinho foi inventado pelo artista português Rafael Bordalo Pinheiro em 1875 para representar o povo português. É conhecido pelo seu famoso gesto, o 'Toma!'. Ele fê-lo porque estava chateado com os políticos, indignado com a sociedade e com os impostos que pagava. Como ele é analfabeto, e não sabe ler nem escrever, para demonstrar que estava chateado, fez este gesto."
  );
  await expect(page.getByText('Eis como ele é numa foto do Á')).toHaveText(
    "Eis como ele é numa foto do Álbum das Glórias. Era ingénuo, indiferente, aceitava tudo e ainda se ria, como o povo na altura. A albarda ao lado dele simboliza todos os encargos, impostos e malfeitorias que os políticos colocavam às costas do Zé Povinho, como se de um burro se tratasse. A legenda 'O Soberano!' é para demonstrar que o povo é que manda no país, e não o rei."
  );
  await expect(
    page.getByRole('img', { name: 'Imagem de Zé Povinho' }).first()
  ).toBeVisible();
  await expect(page.getByText('Esta é a primeira caricatura')).toHaveText(
    'Esta é a primeira caricatura onde apareceu o Zé Povinho, A Lanterna Mágica, a 12 de Junho de 1875, véspera de Santo António. Aqui, o ministro das finanças, Serpa Pimentel, está a pedir três tostões ao Zé Povinho para o Santo António de Lisboa, cuja cara é, na verdade, Fontes Pereira de Melo, o chefe do governo, e o bebê ao colo tem a cara do rei da altura, D. Luís I. O guarda com o chicote está pronto para se zangar com ele caso não pague.'
  );
  await expect(page.getByText('O Zé Povinho também era')).toHaveText(
    "O Zé Povinho também era conhecido no resto do mundo, como se pode ver nesta caricatura de nome 'A Situação'. Esta goza com os interesses ingleses que mandam mais em Portugal do que o próprio rei português. O rei está a dormir sem querer saber de nada, e ao seu lado está John Bull, o símbolo do povo inglês, tal como o Zé Povinho era o símbolo do povo português."
  );
  await expect(
    page.getByRole('img', { name: 'Imagem de Zé Povinho' }).nth(1)
  ).toBeVisible();
  await expect(page.getByText('Consegue-se ver que as')).toHaveText(
    'Consegue-se ver que as bandeiras inglesas têm mais peso do que a bandeira portuguesa, o que é sinal do poder que o Reino Unido tinha sobre nós. Além do Fontes Pereira de Melo, mencionado na caricatura anterior, também vemos o novo primeiro-ministro, Rodrigues Sampaio, a apresentar o ministério ao rei. Há vários políticos montados a cavalo e o burro, neste caso, é o Zé. Ele carrega todas aquelas albardas porque o governo estava sempre a mudar e o povo, representado pelo Zé, é que sofria. O Fontes Pereira de Melo está a manipular a apresentação deste novo ministério com outra albarda que simboliza outra proposta já com os seus apoiantes.'
  );
  await expect(page.getByText('Além de suas caricaturas,')).toHaveText(
    'Além de suas caricaturas, Rafael Bordalo Pinheiro também imortalizou o Zé Povinho na cerâmica, criando estátuas que reforçavam a crítica social.'
  );
  await expect(
    page.getByRole('img', { name: 'Imagem de Zé Povinho' }).nth(2)
  ).toBeVisible();
  await expect(
    page.getByRole('img', { name: 'Foto de Rafael Bordalo' })
  ).toBeVisible();
  await expect(page.getByText('Veja mais sobre o artista:')).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Rafael Bordalo Pinheiro' })
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Voltar para Artistas' })
  ).toBeVisible();
});
