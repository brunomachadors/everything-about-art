import { test, expect } from "@playwright/test";

test("Search artist", async ({ page }) => {
  await page.goto("");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page
    .getByRole("textbox", { name: "Buscar artista..." })
    .fill("Eugène Delacroix");
  await expect(
    page.getByRole("link", { name: "Eugène Delacroix Eugène" })
  ).toBeVisible();
});

test("Almada Negreiros", async ({ page }) => {
  await page.goto("");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("link", { name: "Almada Negreiros Almada" }).click();
  await expect(page.getByText("José Sobral")).toHaveText(
    "Nome completo: José Sobral de Almada Negreiros"
  );
  await expect(page.getByText("Nascimento: 7 de abril de")).toHaveText(
    "Nascimento: 7 de abril de 1893"
  );
  await expect(page.getByText("Falecimento: 15 de junho de")).toHaveText(
    "Falecimento: 15 de junho de 1970"
  );
  await expect(page.getByText("Nacionalidade: Portuguesa")).toHaveText(
    "Nacionalidade: Portuguesa"
  );
  await expect(
    page.getByText("Movimentos:ModernismoFuturismoAbstracionismo")
  ).toBeVisible();
  await expect(page.getByText("Ocupações: Pintor, Escritor,")).toBeVisible();
  await expect(page.getByText("José de Almada Negreiros foi")).toHaveText(
    "José de Almada Negreiros foi um dos nomes mais proeminentes do modernismo português, com uma produção artística marcada por várias formas de expressão, da pintura à escrita."
  );
  await expect(page.getByText("Além de ser um artista plá")).toHaveText(
    "Além de ser um artista plástico, foi também ensaísta, dramaturgo e uma das principais figuras da revista Orpheu. Sua versatilidade artística o tornou uma referência cultural em Portugal no século XX."
  );
  await expect(
    page.getByRole("img", { name: "Imagem 2 sobre Almada" })
  ).toBeVisible();
  await expect(page.getByText("A sua obra inclui murais,")).toHaveText(
    "A sua obra inclui murais, vitrais e ilustrações marcadas pelo dinamismo e pela experimentação formal e estética, sempre conectada com os grandes movimentos de vanguarda da época."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Fernando Pessoa" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Amadeo de Souza-Cardoso", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("link", { name: "Amadeo de Souza-Cardoso" }).click();
  await expect(page.getByText("Nome completo: Amadeo de")).toHaveText(
    "Nome completo: Amadeo de Souza-Cardoso"
  );
  await expect(page.getByText("Nascimento: 14 de novembro de")).toHaveText(
    "Nascimento: 14 de novembro de 1887"
  );
  await expect(page.getByText("Falecimento: 25 de outubro de")).toHaveText(
    "Falecimento: 25 de outubro de 1918"
  );
  await expect(page.getByText("Nacionalidade: Portuguesa")).toHaveText(
    "Nacionalidade: Portuguesa"
  );
  await expect(
    page.getByText("Movimentos:ModernismoCubismoFuturismo")
  ).toBeVisible();
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: Pintor"
  );
  await expect(page.getByText("Amadeo de Souza-Cardoso foi")).toHaveText(
    "Amadeo de Souza-Cardoso foi um dos mais inovadores pintores portugueses do início do século XX. Apesar da sua curta vida, sua obra marcou profundamente a arte moderna em Portugal, estabelecendo conexões com alguns dos mais importantes movimentos vanguardistas europeus."
  );
  await expect(page.getByText("Após iniciar estudos de")).toHaveText(
    "Após iniciar estudos de arquitetura, mudou-se para Paris em 1906, onde mergulhou no ambiente artístico efervescente da cidade. Lá, entrou em contato com o cubismo, o futurismo e o expressionismo, desenvolvendo um estilo dinâmico e experimental, distinto das tendências predominantes da época."
  );
  await expect(page.getByText("Amadeo conviveu com artistas")).toHaveText(
    "Amadeo conviveu com artistas como Modigliani, Brancusi e Picasso, absorvendo influências diversas e criando uma linguagem visual única, marcada pelo uso expressivo da cor e da forma."
  );
  await expect(
    page.getByRole("img", { name: "Imagem 3 sobre Amadeo de" })
  ).toBeVisible();
  await expect(page.getByText("Em 1916, realizou exposições")).toHaveText(
    "Em 1916, realizou exposições em Portugal, rompendo com a tradição acadêmica e enfrentando resistência por parte da crítica da época. No entanto, sua obra foi posteriormente reconhecida como uma das mais relevantes do modernismo português."
  );
  await expect(page.getByText("Infelizmente, sua carreira")).toHaveText(
    "Infelizmente, sua carreira foi interrompida precocemente com sua morte em 1918, vítima da gripe espanhola. Apesar disso, sua influência permanece viva, sendo hoje celebrado como um dos maiores pintores portugueses do século XX."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Parto da Viola" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Caspar David Friedrich", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("link", { name: "Caspar David Friedrich" }).click();
  await expect(
    page.getByText("Nome completo: Caspar David Friedrich")
  ).toBeVisible();
  await expect(page.getByText("Nome completo: Caspar David")).toHaveText(
    "Nome completo: Caspar David Friedrich"
  );
  await expect(page.getByText("Nascimento: 5 de setembro de")).toHaveText(
    "Nascimento: 5 de setembro de 1774"
  );
  await expect(page.getByText("Falecimento: 7 de maio de")).toHaveText(
    "Falecimento: 7 de maio de 1840"
  );
  await expect(page.getByText("Nacionalidade: Alemã")).toHaveText(
    "Nacionalidade: Alemã"
  );
  await expect(page.getByText("Movimentos:Romantismo")).toHaveText(
    "Movimentos:Romantismo"
  );
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: Pintor"
  );
  await expect(page.getByText("Caspar David Friedrich foi um")).toHaveText(
    "Caspar David Friedrich foi um dos mais importantes pintores do Romantismo, conhecido por suas paisagens melancólicas e meditativas que exploram a espiritualidade e a relação entre o homem e a natureza."
  );
  await expect(page.getByText("Nascido em Greifswald,")).toHaveText(
    "Nascido em Greifswald, Alemanha, Friedrich desenvolveu um estilo que unia simbolismo, emoção e uma profunda conexão com o sublime, representando figuras solitárias diante de vastas paisagens naturais."
  );
  await expect(page.getByText("Sua obra mais icônica, '")).toHaveText(
    "Sua obra mais icônica, 'Caminhante sobre o Mar de Névoa', exemplifica sua visão romântica: o ser humano pequeno diante da grandiosidade e mistério da natureza, provocando reflexão existencial."
  );
  await expect(page.getByText("Embora tenha sido")).toHaveText(
    "Embora tenha sido parcialmente esquecido após sua morte, Friedrich foi redescoberto no século XX e hoje é celebrado como um mestre da paisagem simbólica e introspectiva."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Caminhante Sobre o Mar de Né" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Cândido Portinari", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("link", { name: "Cândido Portinari Cândido" }).click();
  await expect(page.getByText("Nome completo: Cândido")).toHaveText(
    "Nome completo: Cândido Torquato Portinari"
  );
  await expect(page.getByText("Nascimento: 29 de dezembro de")).toHaveText(
    "Nascimento: 29 de dezembro de 1903"
  );
  await expect(page.getByText("Falecimento: 6 de fevereiro de")).toHaveText(
    "Falecimento: 6 de fevereiro de 1962"
  );
  await expect(page.getByText("Nacionalidade: Brasileira")).toHaveText(
    "Nacionalidade: Brasileira"
  );
  await expect(page.getByText("Movimentos:ModernismoRealismo")).toBeVisible();
  await expect(page.getByText("Ocupações: Pintor, Muralista")).toBeVisible();
  await expect(page.getByText("Cândido Portinari foi um dos")).toHaveText(
    "Cândido Portinari foi um dos mais importantes pintores brasileiros e uma figura essencial no modernismo e no realismo social. Sua obra abordou temas ligados à cultura, história e desigualdade social no Brasil, utilizando cores vibrantes e uma estética marcante."
  );
  await expect(page.getByText("Nascido em uma fazenda de caf")).toHaveText(
    "Nascido em uma fazenda de café no interior de São Paulo, Portinari mostrou talento para a arte desde a infância. Estudou na Escola Nacional de Belas Artes no Rio de Janeiro e, posteriormente, viajou para a Europa, onde teve contato com as vanguardas artísticas, influenciando sua abordagem modernista."
  );
  await expect(page.getByText("Seus trabalhos retrataram a")).toHaveText(
    "Seus trabalhos retrataram a realidade do povo brasileiro, destacando a vida dos trabalhadores rurais, os problemas sociais e a identidade nacional. Obras como 'Retirantes' e 'Lavrador de Café' são exemplos da sua sensibilidade para temas sociais e humanitários."
  );
  await expect(
    page.getByRole("img", { name: "Imagem 3 sobre Cândido" })
  ).toBeVisible();
  await expect(page.getByText("Além da pintura, Portinari")).toHaveText(
    "Além da pintura, Portinari produziu grandes murais, incluindo os painéis 'Guerra' e 'Paz', encomendados pela ONU para sua sede em Nova York. Seu legado transcende a arte, sendo reconhecido como um dos maiores nomes da cultura brasileira."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "O Lavrador de Café" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Diego Velázquez", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("link", { name: "Diego Velázquez" }).click();
  await expect(page.getByText("Nome completo: Diego Rodrí")).toHaveText(
    "Nome completo: Diego Rodríguez de Silva y Velázquez"
  );
  await expect(page.getByText("Nascimento: 6 de junho de")).toHaveText(
    "Nascimento: 6 de junho de 1599"
  );
  await expect(page.getByText("Falecimento: 6 de agosto de")).toHaveText(
    "Falecimento: 6 de agosto de 1660"
  );
  await expect(page.getByText("Nacionalidade: Espanhola")).toHaveText(
    "Nacionalidade: Espanhola"
  );
  await expect(page.getByText("Movimentos:Barroco")).toHaveText(
    "Movimentos:Barroco"
  );
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: Pintor"
  );
  await expect(page.getByText("Diego Velázquez foi um dos")).toHaveText(
    "Diego Velázquez foi um dos mais importantes pintores do período barroco e uma figura central da pintura espanhola. Seu trabalho destacou-se pelo realismo impressionante, uso magistral da luz e uma técnica inovadora de pinceladas soltas."
  );
  await expect(page.getByText("Nascido em Sevilha, Velázquez")).toHaveText(
    "Nascido em Sevilha, Velázquez demonstrou talento artístico desde cedo. Estudou com Francisco Pacheco e logo se tornou pintor da corte do rei Filipe IV da Espanha, onde produziu retratos e cenas históricas de grande sofisticação."
  );
  await expect(page.getByText("Entre suas obras mais icô")).toHaveText(
    "Entre suas obras mais icônicas está 'As Meninas', uma pintura inovadora que mistura retrato, ilusão e perspectiva de maneira única. Além dos retratos da realeza, Velázquez também representou cenas do cotidiano e personagens marginalizados com grande humanidade."
  );
  await expect(page.getByText("Seu legado influenciou geraçõ")).toHaveText(
    "Seu legado influenciou gerações de artistas, incluindo mestres como Francisco Goya e impressionistas do século XIX. Até hoje, Velázquez é considerado um dos maiores pintores da história da arte ocidental."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "As Meninas" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Edvard Munch", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("link", { name: "Edvard Munch Edvard Munch" }).click();
  await expect(page.getByText("Nome completo: Edvard Munch")).toHaveText(
    "Nome completo: Edvard Munch"
  );
  await expect(page.getByText("Nascimento: 12 de dezembro de")).toHaveText(
    "Nascimento: 12 de dezembro de 1863"
  );
  await expect(page.getByText("Falecimento: 23 de janeiro de")).toHaveText(
    "Falecimento: 23 de janeiro de 1944"
  );
  await expect(page.getByText("Nacionalidade: Norueguesa")).toHaveText(
    "Nacionalidade: Norueguesa"
  );
  await expect(
    page.getByText("Movimentos:ExpressionismoSimbolismo")
  ).toBeVisible();
  await expect(page.getByText("Ocupações: Pintor, Gravurista")).toBeVisible();
  await expect(page.getByText("Edvard Munch foi um dos")).toHaveText(
    "Edvard Munch foi um dos precursores do Expressionismo, conhecido por explorar temas profundos como angústia, morte, amor e ansiedade existencial em sua arte."
  );
  await expect(page.getByText("Nascido em Løten, Noruega,")).toHaveText(
    "Nascido em Løten, Noruega, Munch teve uma infância marcada por perdas familiares, o que influenciou fortemente sua visão artística e os temas sombrios de suas obras."
  );
  await expect(page.getByText("Sua obra mais célebre, 'O")).toHaveText(
    "Sua obra mais célebre, 'O Grito', tornou-se um ícone universal da angústia humana. Com cores vibrantes e formas distorcidas, Munch capturava emoções intensas com uma linguagem visual revolucionária."
  );
  await expect(page.getByText("Sua influência foi decisiva")).toHaveText(
    "Sua influência foi decisiva para o desenvolvimento da arte moderna, impactando diretamente movimentos como o Expressionismo alemão e artistas como Egon Schiele e Ernst Ludwig Kirchner."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "O Grito" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Eugène Delacroix", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("link", { name: "Eugène Delacroix Eugène" }).click();
  await expect(
    page.getByText("Nome completo: Ferdinand Victor Eugène Delacroix")
  ).toBeVisible();
  await expect(page.getByText("Nome completo: Ferdinand")).toHaveText(
    "Nome completo: Ferdinand Victor Eugène Delacroix"
  );
  await expect(page.getByText("Nascimento: 26 de abril de")).toHaveText(
    "Nascimento: 26 de abril de 1798"
  );
  await expect(page.getByText("Falecimento: 13 de agosto de")).toHaveText(
    "Falecimento: 13 de agosto de 1863"
  );
  await expect(page.getByText("Nacionalidade: Francesa")).toHaveText(
    "Nacionalidade: Francesa"
  );
  await expect(page.getByText("Movimentos:Romantismo")).toHaveText(
    "Movimentos:Romantismo"
  );
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: Pintor"
  );
  await expect(page.getByText("Eugène Delacroix foi um dos")).toHaveText(
    "Eugène Delacroix foi um dos mais importantes pintores do Romantismo e uma referência essencial na arte francesa do século XIX. Suas obras são marcadas pelo uso dramático da cor, composição dinâmica e temas carregados de emoção e movimento."
  );
  await expect(page.getByText("Delacroix estudou na Escola")).toHaveText(
    "Delacroix estudou na Escola de Belas Artes de Paris e foi influenciado pelos mestres do Barroco, como Rubens e Rembrandt. Seu estilo inovador contrastava com o Neoclassicismo predominante da época, trazendo mais expressividade e vigor às suas pinturas."
  );
  await expect(page.getByText("Entre suas obras mais cé")).toHaveText(
    "Entre suas obras mais célebres está 'A Liberdade Guiando o Povo', uma poderosa representação da Revolução de 1830, onde a figura alegórica da Liberdade lidera os revolucionários franceses em meio ao caos da batalha."
  );
  await expect(page.getByText("Delacroix influenciou")).toHaveText(
    "Delacroix influenciou profundamente o Impressionismo e o Expressionismo com seu uso inovador da cor e pinceladas soltas. Sua arte continua sendo admirada por seu impacto visual e por capturar a intensidade da emoção humana."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "A Liberdade guiando o povo" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Georges-Pierre Seurat", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("link", { name: "Georges-Pierre Seurat" }).click();
  await expect(page.getByText("Nome completo: Georges-Pierre")).toHaveText(
    "Nome completo: Georges-Pierre Seurat"
  );
  await expect(page.getByText("Nascimento: 2 de dezembro de")).toHaveText(
    "Nascimento: 2 de dezembro de 1859"
  );
  await expect(page.getByText("Falecimento: 29 de março de")).toHaveText(
    "Falecimento: 29 de março de 1891"
  );
  await expect(page.getByText("Nacionalidade: Francesa")).toHaveText(
    "Nacionalidade: Francesa"
  );
  await expect(
    page.getByText("Movimentos:NeoimpressionismoPontilhismo")
  ).toBeVisible();
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: Pintor"
  );
  await expect(page.getByText("Georges-Pierre Seurat foi o")).toHaveText(
    "Georges-Pierre Seurat foi o criador do Pontilhismo e uma figura central no desenvolvimento do Neoimpressionismo, destacando-se por sua abordagem científica da cor e da composição."
  );
  await expect(page.getByText("Nascido em Paris, Seurat")).toHaveText(
    "Nascido em Paris, Seurat estudou na École des Beaux-Arts e desenvolveu uma técnica inovadora baseada na justaposição de pequenos pontos de cor pura para criar imagens vibrantes e luminosas."
  );
  await expect(page.getByText("Sua obra-prima, 'Tarde de")).toHaveText(
    "Sua obra-prima, 'Tarde de Domingo na Ilha de Grande Jatte', é um ícone do século XIX, combinando rigor técnico com uma sensibilidade estética refinada, representando cenas cotidianas com precisão quase matemática."
  );
  await expect(page.getByText("Apesar de sua morte precoce,")).toHaveText(
    "Apesar de sua morte precoce, Seurat deixou um legado duradouro na história da arte, influenciando artistas como Signac, Van Gogh e até movimentos do século XX como o Cubismo e o Futurismo."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Uma Tarde de Domingo na Ilha" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Gustav Klimt", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("link", { name: "Gustav Klimt" }).click();
  await expect(page.getByText("Nome completo: Gustav Klimt")).toHaveText(
    "Nome completo: Gustav Klimt"
  );
  await expect(page.getByText("Nascimento: 14 de julho de")).toHaveText(
    "Nascimento: 14 de julho de 1862"
  );
  await expect(page.getByText("Falecimento: 6 de fevereiro de")).toHaveText(
    "Falecimento: 6 de fevereiro de 1918"
  );
  await expect(page.getByText("Nacionalidade: Austríaca")).toHaveText(
    "Nacionalidade: Austríaca"
  );
  await expect(page.getByText("Movimentos:SimbolismoArt")).toBeVisible();
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: Pintor"
  );
  await expect(page.getByText("Gustav Klimt foi um dos")).toHaveText(
    "Gustav Klimt foi um dos principais nomes do movimento Art Nouveau e do Simbolismo, conhecido por suas obras ornamentadas, sensuais e carregadas de simbolismo."
  );
  await expect(page.getByText("Nascido em Baumgarten, perto")).toHaveText(
    "Nascido em Baumgarten, perto de Viena, Klimt começou sua carreira como pintor acadêmico, mas logo rompeu com as convenções ao cofundar a Secessão de Viena, um movimento que buscava inovação artística e liberdade criativa."
  );
  await expect(page.getByText("Suas obras mais icônicas,")).toHaveText(
    "Suas obras mais icônicas, como 'O Beijo', destacam-se pelo uso de folhas de ouro, padrões decorativos e temas que exploram a sensualidade, o erotismo e a espiritualidade. Ele combinava influências do simbolismo, da arte bizantina e do Jugendstil."
  );
  await expect(page.getByText("Klimt teve grande")).toHaveText(
    "Klimt teve grande reconhecimento em vida e influenciou profundamente a arte do início do século XX. Sua estética ousada e inovadora permanece como referência na arte contemporânea."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "O Beijo" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Henri Rousseau", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("link", { name: "Henri Rousseau" }).click();
  await expect(page.getByText("Nome completo: Henri Rousseau")).toBeVisible();
  await expect(page.getByText("Nome completo: Henri Rousseau")).toHaveText(
    "Nome completo: Henri Rousseau"
  );
  await expect(page.getByText("Nascimento: 21 de maio de")).toHaveText(
    "Nascimento: 21 de maio de 1844"
  );
  await expect(page.getByText("Falecimento: 2 de setembro de")).toHaveText(
    "Falecimento: 2 de setembro de 1910"
  );
  await expect(page.getByText("Nacionalidade: Francesa")).toHaveText(
    "Nacionalidade: Francesa"
  );
  await expect(page.getByText("Movimentos:NaïfPrimitivismo")).toBeVisible();
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: Pintor"
  );
  await expect(page.getByText("Henri Rousseau, também")).toHaveText(
    "Henri Rousseau, também conhecido como 'Le Douanier' (o Aduaneiro), foi um pintor autodidata francês cuja obra singular e imaginativa o tornou um dos principais nomes da arte naïf."
  );
  await expect(page.getByText("Nascido em Laval, França,")).toHaveText(
    "Nascido em Laval, França, Rousseau trabalhou como funcionário da alfândega antes de se dedicar à pintura. Sem formação acadêmica, desenvolveu um estilo único, caracterizado por formas planas, cores intensas e composições oníricas."
  );
  await expect(page.getByText("Suas obras mais conhecidas,")).toHaveText(
    "Suas obras mais conhecidas, como 'O Sonho', retratam paisagens tropicais luxuriantes, repletas de animais exóticos e figuras enigmáticas, mesmo sem ele jamais ter saído da França — inspirando-se em visitas a jardins botânicos e ilustrações."
  );
  await expect(page.getByText("Inicialmente ridicularizado,")).toHaveText(
    "Inicialmente ridicularizado, Rousseau foi mais tarde admirado por artistas de vanguarda como Picasso e os surrealistas, sendo hoje reconhecido como um precursor da arte moderna e da sensibilidade poética na pintura."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "O Sonho" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Jan van Eyck", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("link", { name: "Jan van Eyck" }).click();
  await expect(page.getByText("Nome completo: Jan van Eyck")).toHaveText(
    "Nome completo: Jan van Eyck"
  );
  await expect(page.getByText("Nascimento: c.")).toHaveText(
    "Nascimento: c. 1390"
  );
  await expect(page.getByText("Falecimento: 9 de julho de")).toHaveText(
    "Falecimento: 9 de julho de 1441"
  );
  await expect(page.getByText("Nacionalidade: Flamenga")).toHaveText(
    "Nacionalidade: Flamenga"
  );
  await expect(page.getByText("Movimentos:Renascimento do")).toHaveText(
    "Movimentos:Renascimento do Norte"
  );
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: Pintor"
  );
  await expect(page.getByText("Jan van Eyck foi um dos")).toHaveText(
    "Jan van Eyck foi um dos grandes mestres do Renascimento do Norte, reconhecido por seu domínio técnico e inovação no uso da tinta a óleo, que revolucionou a pintura europeia."
  );
  await expect(page.getByText("Provavelmente nascido em")).toHaveText(
    "Provavelmente nascido em Maaseik, na região da Flandres, Van Eyck trabalhou na corte de Filipe, o Bom, e produziu obras marcadas pelo realismo minucioso, simbolismo sutil e refinamento técnico."
  );
  await expect(page.getByText("Sua obra mais famosa, 'O")).toHaveText(
    "Sua obra mais famosa, 'O Casal Arnolfini', é admirada pelo uso magistral da luz, perspectiva e pelos detalhes simbólicos que sugerem um contrato matrimonial e status social."
  );
  await expect(page.getByText("Van Eyck teve um papel")).toHaveText(
    "Van Eyck teve um papel fundamental na consolidação da pintura flamenga e influenciou profundamente gerações de artistas renascentistas. Seu lema, 'Als ich kan' ('O melhor que posso'), reflete sua busca constante pela perfeição artística."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "O Casal Arnolfini" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Johannes Vermeer", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("link", { name: "Johannes Vermeer" }).click();
  await expect(page.getByText("Nome completo: Johannes Vermeer")).toHaveText(
    "Nome completo: Johannes Vermeer"
  );
  await expect(page.getByText("Nascimento: 31 de outubro")).toHaveText(
    "Nascimento: 31 de outubro de 1632"
  );
  await expect(page.getByText("Falecimento: 15 de dezembro")).toHaveText(
    "Falecimento: 15 de dezembro de 1675"
  );
  await expect(page.getByText("Nacionalidade: Holandesa")).toHaveText(
    "Nacionalidade: Holandesa"
  );
  await expect(page.getByText("Movimentos:BarrocoIdade")).toBeVisible();
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: Pintor"
  );
  await expect(page.getByText("Johannes Vermeer foi um dos mais")).toHaveText(
    "Johannes Vermeer foi um dos mais importantes pintores da Idade de Ouro Holandesa, conhecido por suas cenas de interiores domésticos e pelo uso magistral da luz. Sua obra, marcada pela tranquilidade e pelo realismo, destaca-se pelo minucioso tratamento dos detalhes e pelas composições harmoniosas."
  );
  await expect(page.getByText("Vermeer viveu e trab")).toHaveText(
    "Vermeer viveu e trabalhou na cidade de Delft, onde produziu a maioria de suas pinturas. Seu domínio da perspectiva e sua habilidade na representação de texturas e superfícies fizeram com que suas obras se destacassem dentro do barroco holandês."
  );
  await expect(page.getByText("Apesar de sua genialidade, ")).toHaveText(
    "Apesar de sua genialidade, Vermeer não obteve grande reconhecimento em vida e enfrentou dificuldades financeiras. Sua produção foi relativamente pequena, com cerca de 35 obras conhecidas, o que torna seus quadros ainda mais valiosos nos dias de hoje."
  );
  await expect(page.getByText("Entre suas obras mais icônicas")).toHaveText(
    "Entre suas obras mais icônicas está 'Rapariga com Brinco de Pérola', frequentemente chamada de a 'Mona Lisa do Norte'. A pintura é admirada por sua simplicidade e pelo olhar enigmático da jovem retratada, além da impressionante técnica no uso da luz e das cores."
  );
  await expect(page.getByText("Após sua morte, Vermeer pe")).toHaveText(
    "Após sua morte, Vermeer permaneceu relativamente esquecido por séculos, sendo redescoberto no século XIX. Hoje, é reconhecido como um dos maiores mestres da pintura e sua obra continua a fascinar e inspirar artistas e estudiosos da arte."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Rapariga com brinco de pérola" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Kazimir Malevich", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page.getByRole("link", { name: "Kazimir Malevich Kazimir" }).click();
  await expect(page.getByText("Nome completo: Kazimir")).toHaveText(
    "Nome completo: Kazimir Severinovich Malevich"
  );
  await expect(page.getByText("Nascimento: 23 de fevereiro")).toHaveText(
    "Nascimento: 23 de fevereiro de 1879"
  );
  await expect(page.getByText("Falecimento: 15 de maio")).toHaveText(
    "Falecimento: 15 de maio de 1935"
  );
  await expect(page.getByText("Nacionalidade: Russa")).toHaveText(
    "Nacionalidade: Russa"
  );
  await expect(page.getByText("Movimentos:SuprematismoAbs")).toBeVisible();
  await expect(page.getByText("Ocupações: Pintor, Teórico")).toBeVisible();
  await expect(page.getByText("Kazimir Malevich foi um dos")).toHaveText(
    "Kazimir Malevich foi um dos pioneiros da arte abstrata e o criador do Suprematismo, movimento que enfatizava formas geométricas simples e cores puras como expressão artística máxima."
  );
  await expect(page.getByText("Nascido no Império Russo")).toHaveText(
    "Nascido no Império Russo, Malevich começou sua carreira explorando o Impressionismo e o Cubismo antes de desenvolver seu próprio estilo radical. Em 1915, apresentou sua obra mais icônica, 'Quadrado Negro', que simbolizava o rompimento total com a arte figurativa."
  );
  await expect(
    page.getByText("Seu trabalho teórico e suas pinturas ")
  ).toHaveText(
    "Seu trabalho teórico e suas pinturas influenciaram profundamente o design, a arquitetura e as vanguardas do século XX. O Suprematismo propunha a arte como uma experiência espiritual e pura, desligada da representação da realidade."
  );
  await expect(page.getByText("Malevich enfrentou perseguições")).toHaveText(
    "Malevich enfrentou perseguições durante o regime stalinista, que rejeitava a arte abstrata. No entanto, sua influência persiste até hoje, sendo um marco na história da arte moderna e na abstração geométrica."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "O Suprematismo" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Leonardo da Vinci", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page.getByRole("link", { name: "Leonardo da Vinci" }).click();
  await expect(
    page.getByText("Nome completo: Leonardo di ser Piero da Vinci")
  ).toBeVisible();
  await expect(
    page.getByText("Nome completo: Leonardo di ser Piero da Vinci")
  ).toHaveText("Nome completo: Leonardo di ser Piero da Vinci");
  await expect(page.getByText("Nascimento: 15 de abril")).toHaveText(
    "Nascimento: 15 de abril de 1452"
  );
  await expect(page.getByText("Falecimento: 2 de maio")).toHaveText(
    "Falecimento: 2 de maio de 1519"
  );
  await expect(page.getByText("Nacionalidade: Italiana")).toHaveText(
    "Nacionalidade: Italiana"
  );
  await expect(page.getByText("Movimentos:Renascimento")).toHaveText(
    "Movimentos:Renascimento"
  );
  await expect(page.getByText("Ocupações: Pintor, Escultor")).toBeVisible();
  await expect(page.getByText("Leonardo da Vinci foi um")).toHaveText(
    "Leonardo da Vinci foi um dos mais brilhantes artistas e pensadores do Renascimento. Conhecido por sua genialidade multifacetada, destacou-se não apenas na pintura, mas também na engenharia, anatomia, arquitetura e invenção. Seu espírito inquieto e sua curiosidade insaciável levaram-no a explorar diversas áreas do conhecimento, criando um legado que transcende a arte."
  );
  await expect(page.getByText("Seu talento como pintor")).toHaveText(
    "Seu talento como pintor ficou evidente em obras como 'A Última Ceia' e 'Mona Lisa', nas quais combinou técnicas inovadoras de perspectiva e sombreamento para criar um realismo impressionante. Além da arte, Leonardo se dedicou ao estudo do corpo humano, realizando dissecções detalhadas para compreender a anatomia com precisão científica."
  );
  await expect(page.getByText("Entre seus inúmeros estudos")).toHaveText(
    "Entre seus inúmeros estudos, destaca-se 'O Homem de Vitrúvio', um desenho icônico que representa as proporções ideais do corpo humano, baseado nas ideias do arquiteto romano Vitrúvio."
  );
  await expect(
    page.getByRole("img", { name: "Imagem 3 sobre Leonardo da" })
  ).toBeVisible();
  await expect(page.getByText("Leonardo também foi um visionário")).toHaveText(
    "Leonardo também foi um visionário da engenharia, criando esboços de máquinas muito à frente de seu tempo. Entre suas invenções, encontram-se projetos de máquinas voadoras, pontes móveis e armas inovadoras. Muitas dessas ideias só foram viáveis séculos depois, demonstrando sua visão futurista."
  );
  await expect(
    page.getByRole("img", { name: "Imagem 4 sobre Leonardo da" })
  ).toBeVisible();
  await expect(page.getByText("Seu legado continua")).toHaveText(
    "Seu legado continua a inspirar gerações de artistas, cientistas e inventores. Leonardo da Vinci não foi apenas um mestre da pintura, mas um verdadeiro símbolo do espírito renascentista, que buscava unir arte e ciência em busca do conhecimento absoluto."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Mona Lisa" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Maria Helena Vieira da Silva", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page
    .getByRole("link", { name: "Maria Helena Vieira da Silva" })
    .click();
  await expect(
    page.getByText("Nome completo: Maria Helena Vieira da Silva")
  ).toBeVisible();
  await expect(
    page.getByText("Nome completo: Maria Helena Vieira da Silva")
  ).toHaveText("Nome completo: Maria Helena Vieira da Silva");
  await expect(page.getByText("Nascimento: 13 de junho")).toHaveText(
    "Nascimento: 13 de junho de 1908"
  );
  await expect(page.getByText("Falecimento: 6 de março")).toHaveText(
    "Falecimento: 6 de março de 1992"
  );
  await expect(page.getByText("Nacionalidade: Portuguesa")).toHaveText(
    "Nacionalidade: Portuguesa"
  );
  await expect(page.getByText("Movimentos:AbstracionismoExp")).toBeVisible();
  await expect(page.getByText("Ocupações: Pintora")).toHaveText(
    "Ocupações: Pintora"
  );
  await expect(page.getByText("Maria Helena Vieira da Silva foi")).toHaveText(
    "Maria Helena Vieira da Silva foi uma das mais importantes pintoras portuguesas do século XX e uma figura de destaque no movimento abstracionista europeu. Sua obra é marcada por composições dinâmicas e complexas, nas quais explorava a profundidade espacial e a fragmentação da forma."
  );
  await expect(page.getByText("Nascida em Lisboa, mudou-se")).toHaveText(
    "Nascida em Lisboa, mudou-se para Paris na juventude, onde estudou arte e estabeleceu contato com diversos movimentos de vanguarda. Seu estilo evoluiu a partir do cubismo e do expressionismo, criando uma linguagem própria, caracterizada por intrincadas redes de linhas e formas geométricas que sugerem labirintos urbanos e paisagens imaginárias."
  );
  await expect(page.getByText("Durante a Segunda Guerra")).toHaveText(
    "Durante a Segunda Guerra Mundial, exilou-se no Brasil, onde continuou a desenvolver sua arte. Com o fim do conflito, retornou à França, onde consolidou sua carreira e se tornou uma das mais reconhecidas artistas abstratas do seu tempo."
  );
  await expect(
    page.getByRole("img", { name: "Imagem 3 sobre Maria Helena" })
  ).toBeVisible();
  await expect(page.getByText("Vieira da Silva recebeu")).toHaveText(
    "Vieira da Silva recebeu diversos prêmios ao longo da vida e foi a primeira mulher a receber a Ordem Nacional da Legião de Honra da França por sua contribuição à arte. Sua obra está presente em importantes coleções e museus ao redor do mundo, e seu legado permanece como um marco na pintura abstrata."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Os Baloiços e" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Maria Keil", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page.getByRole("link", { name: "Maria Keil" }).click();
  await expect(page.getByText("Nome completo: Maria Keil")).toHaveText(
    "Nome completo: Maria Keil"
  );
  await expect(page.getByText("Nascimento: 9 de agosto")).toHaveText(
    "Nascimento: 9 de agosto de 1914"
  );
  await expect(page.getByText("Falecimento: 10 de junho")).toHaveText(
    "Falecimento: 10 de junho de 2012"
  );
  await expect(page.getByText("Nacionalidade: Portuguesa")).toHaveText(
    "Nacionalidade: Portuguesa"
  );
  await expect(page.getByText("Movimentos:Modernismo")).toHaveText(
    "Movimentos:Modernismo"
  );
  await expect(page.getByText("Ocupações: Pintora, Ilustradora")).toBeVisible();
  await expect(page.getByText("Maria Keil foi")).toHaveText(
    "Maria Keil foi uma artista portuguesa multifacetada, destacando-se como uma das figuras mais importantes do modernismo em Portugal, com uma obra que atravessa pintura, ilustração, design e azulejaria."
  );
  await expect(page.getByText("Nascida em Silves, Maria")).toHaveText(
    "Nascida em Silves, Maria estudou na Escola de Belas-Artes de Lisboa. Desenvolveu uma carreira marcada pela criatividade e sensibilidade estética, deixando um legado profundamente ligado à cultura visual portuguesa do século XX."
  );
  await expect(page.getByText("É especialmente lembrada")).toHaveText(
    "É especialmente lembrada pelos painéis de azulejos criados para o Metropolitano de Lisboa, onde aliou tradição e modernidade em composições vibrantes, abstratas e cheias de ritmo visual."
  );
  await expect(page.getByText("Além da azulejaria, Maria Keil")).toHaveText(
    "Além da azulejaria, Maria Keil produziu pinturas, ilustrações infantis e capas de livros, sempre com um estilo delicado, poético e humanista. Foi uma pioneira e inspiração para gerações de artistas em Portugal."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "O Mar" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Paul Cézanne", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page.getByRole("link", { name: "Paul Cézanne" }).click();
  await expect(page.getByText("Nome completo: Paul Cézanne")).toHaveText(
    "Nome completo: Paul Cézanne"
  );
  await expect(page.getByText("Nascimento: 19 de janeiro")).toHaveText(
    "Nascimento: 19 de janeiro de 1839"
  );
  await expect(page.getByText("Falecimento: 22 de outubro")).toHaveText(
    "Falecimento: 22 de outubro de 1906"
  );
  await expect(page.getByText("Nacionalidade: Francesa")).toHaveText(
    "Nacionalidade: Francesa"
  );
  await expect(page.getByText("Movimentos:Pós-Impressionismo")).toHaveText(
    "Movimentos:Pós-Impressionismo"
  );
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: Pintor"
  );
  await expect(page.getByText("Paul Cézanne foi um")).toHaveText(
    "Paul Cézanne foi um dos mais influentes pintores do pós-impressionismo, sendo frequentemente chamado de 'o pai da arte moderna'. Seu trabalho estabeleceu as bases para o Cubismo e outras vanguardas do século XX."
  );
  await expect(page.getByText("Nascido em Aix-en-Provence")).toHaveText(
    "Nascido em Aix-en-Provence, Cézanne começou sua carreira influenciado pelo Impressionismo, mas desenvolveu um estilo único, explorando formas geométricas, perspectivas inovadoras e um uso estruturado da cor."
  );
  await expect(page.getByText("Seus estudos sobre volume")).toHaveText(
    "Seus estudos sobre volume e estrutura podem ser vistos em obras como 'As Banhistas' e suas célebres pinturas de naturezas-mortas e paisagens, onde a pincelada densa e as composições equilibradas revelam seu olhar analítico sobre a arte."
  );
  await expect(
    page.getByText("Embora tenha sido pouco reconhecido")
  ).toHaveText(
    "Embora tenha sido pouco reconhecido em vida, Cézanne influenciou profundamente artistas como Picasso e Matisse. Seu legado revolucionou a pintura, tornando-se um marco na transição entre a arte clássica e a modernidade."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "As Banhistas" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Paula Rego", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page.getByRole("link", { name: "Paula Rego" }).click();
  await expect(page.getByText("Nome completo: Dame Maria Paula")).toHaveText(
    "Nome completo: Dame Maria Paula Figueiroa Rego"
  );
  await expect(page.getByText("Nascimento: 26 de janeiro")).toHaveText(
    "Nascimento: 26 de janeiro de 1935"
  );
  await expect(page.getByText("Falecimento: 8 de junho")).toHaveText(
    "Falecimento: 8 de junho de 2022"
  );
  await expect(page.getByText("Nacionalidade: Portuguesa")).toHaveText(
    "Nacionalidade: Portuguesa"
  );
  await expect(page.getByText("Movimentos:Expressionismo")).toBeVisible();
  await expect(page.getByText("Ocupações: Pintora, Gravurista")).toBeVisible();
  await expect(page.getByText("Paula Rego foi uma das")).toHaveText(
    "Paula Rego foi uma das mais importantes artistas portuguesas do século XX e XXI, conhecida por suas obras intensas e narrativas, muitas vezes baseadas em contos, mitos e temas sociais. Sua arte desafiou convenções e abordou temas como o poder, a opressão e a condição feminina com uma força singular."
  );
  await expect(page.getByText("Nascida em Lisboa,")).toHaveText(
    "Nascida em Lisboa, mudou-se para Londres para estudar na Slade School of Fine Art, onde desenvolveu um estilo único, misturando elementos do expressionismo, surrealismo e realismo. Durante sua carreira, passou por diferentes fases estilísticas, indo da abstração inicial até um figurativismo expressivo e carregado de simbolismo."
  );
  await expect(page.getByText("Suas obras frequentemente")).toHaveText(
    "Suas obras frequentemente exploram o universo feminino, tratando de temas como violência, maternidade, sexualidade e política. Rego encontrou inspiração em histórias pessoais e no folclore português, criando imagens poderosas e muitas vezes perturbadoras."
  );
  await expect(
    page.getByRole("img", { name: "Imagem 3 sobre Paula Rego" })
  ).toBeVisible();
  await expect(page.getByText("Ao longo da sua carreira,")).toHaveText(
    "Ao longo da sua carreira, conquistou reconhecimento internacional e recebeu diversas distinções, incluindo o título de Dama Comendadora da Ordem do Império Britânico. Seu trabalho está presente em grandes museus e galerias ao redor do mundo, solidificando seu legado como uma das vozes mais importantes da arte contemporânea."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Tríptico Auto-retrato" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Piet Mondrian", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "4" }).click();
  await page.getByRole("link", { name: "Piet Mondrian" }).click();
  await expect(page.getByText("Nome completo: Pieter Cornelis")).toHaveText(
    "Nome completo: Pieter Cornelis Mondrian"
  );
  await expect(page.getByText("Nascimento: 7 de março")).toHaveText(
    "Nascimento: 7 de março de 1872"
  );
  await expect(page.getByText("Falecimento: 1 de fevereiro")).toHaveText(
    "Falecimento: 1 de fevereiro de 1944"
  );
  await expect(page.getByText("Nacionalidade: Holandesa")).toHaveText(
    "Nacionalidade: Holandesa"
  );
  await expect(page.getByText("Movimentos:NeoplasticismoAbs")).toBeVisible();
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: Pintor"
  );
  await expect(page.getByText("Piet Mondrian foi um pintor")).toHaveText(
    "Piet Mondrian foi um pintor holandês e um dos principais fundadores do movimento De Stijl, que influenciou a arte moderna. Seu trabalho começou com um estilo mais figurativo, influenciado pelo impressionismo e simbolismo, mas ele gradualmente se afastou da representação tradicional."
  );
  await expect(page.getByText("Entre 1905 e 1911")).toHaveText(
    "Entre 1905 e 1911, Mondrian experimentou com o fauvismo e o cubismo, absorvendo influências de artistas como Cézanne e Picasso. Essas explorações o levaram a desenvolver um estilo próprio, baseado na simplificação das formas e na busca por uma expressão pura."
  );
  await expect(page.getByText("Em 1917, junto com Theo")).toHaveText(
    "Em 1917, junto com Theo van Doesburg e outros artistas, fundou o movimento De Stijl. Nessa fase, sua arte passou a se concentrar exclusivamente em linhas retas, ângulos retos e no uso das cores primárias combinadas com preto, branco e cinza, resultando na estética neoplástica."
  );
  await expect(page.getByText("Mondrian viveu em Paris")).toHaveText(
    "Mondrian viveu em Paris por muitos anos, mas com a eclosão da Segunda Guerra Mundial, mudou-se para Londres e depois para Nova York, onde sua obra passou por uma nova transformação. Inspirado pelo dinamismo da cidade e pela música jazz, criou composições mais vibrantes, como 'Broadway Boogie Woogie'."
  );
  await expect(page.getByText("Seu impacto vai além da pintura")).toHaveText(
    "Seu impacto vai além da pintura, influenciando a arquitetura, o design gráfico e a moda. Mondrian faleceu em 1944, mas seu legado permanece vivo, sendo uma referência fundamental para a arte abstrata e o design contemporâneo."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Composição com" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Rafael Bordalo Pinheiro", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "4" }).click();
  await page.getByRole("link", { name: "Rafael Bordalo Pinheiro" }).click();
  await expect(
    page.getByText("Nome completo: Rafael Augusto Prostes")
  ).toHaveText("Nome completo: Rafael Augusto Prostes Bordalo Pinheiro");
  await expect(page.getByText("Nascimento: 21 de março")).toHaveText(
    "Nascimento: 21 de março de 1846"
  );
  await expect(page.getByText("Falecimento: 23 de janeiro")).toHaveText(
    "Falecimento: 23 de janeiro de 1905"
  );
  await expect(page.getByText("Nacionalidade: Portuguesa")).toHaveText(
    "Nacionalidade: Portuguesa"
  );
  await expect(page.getByText("Movimentos:NaturalismoCar")).toBeVisible();
  await expect(page.getByText("Ocupações: Desenhador, Cer")).toBeVisible();
  await expect(page.getByText("Rafael Bordalo Pinheiro foi um")).toHaveText(
    "Rafael Bordalo Pinheiro foi um dos mais importantes artistas portugueses do século XIX, destacando-se como caricaturista, ilustrador e ceramista. O seu trabalho influenciou profundamente a cultura visual portuguesa, sendo ainda hoje reconhecido pela sua irreverência e criatividade."
  );
  await expect(
    page.getByRole("img", { name: "Imagem 1 sobre Rafael Bordalo" })
  ).toBeVisible();
  await expect(page.getByText("Filho do pintor Manuel Maria")).toHaveText(
    "Filho do pintor Manuel Maria Bordalo Pinheiro, Rafael iniciou a sua carreira artística no desenho e na ilustração, colaborando com diversas publicações periódicas. Foi um dos pioneiros da caricatura política em Portugal, usando o humor para criticar a sociedade e a política da época."
  );
  await expect(
    page.getByText("Uma das suas criações mais icónicas")
  ).toHaveText(
    "Uma das suas criações mais icónicas foi a figura do Zé Povinho, símbolo do povo português, caracterizado por sua expressão crítica e satírica. Através dessa personagem, Bordalo Pinheiro conseguiu capturar o espírito e os desafios da sociedade portuguesa do final do século XIX."
  );
  await expect(page.getByText("Além da caricatura, dedicou-se")).toHaveText(
    "Além da caricatura, dedicou-se à cerâmica, fundando a Fábrica de Faianças das Caldas da Rainha, onde criou peças decorativas e utilitárias que se tornaram ícones da cultura portuguesa. O seu trabalho na cerâmica combinou inovação técnica com um estilo artístico único, inspirando gerações de artistas."
  );
  await expect(page.getByText("Rafael Bordalo Pinheiro faleceu")).toHaveText(
    "Rafael Bordalo Pinheiro faleceu em 1905, mas o seu legado permanece vivo, tanto através das suas obras gráficas quanto das suas criações cerâmicas, que continuam a ser apreciadas e produzidas nos dias de hoje."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Zé Povinho" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Vincent van Gogh", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "4" }).click();
  await page.getByRole("link", { name: "Vincent van Gogh" }).click();
  await expect(
    page.getByText("Nome completo: Vincent Willem van Gogh")
  ).toHaveText("Nome completo: Vincent Willem van Gogh");
  await expect(page.getByText("Nascimento: 30 de março")).toHaveText(
    "Nascimento: 30 de março de 1853"
  );
  await expect(page.getByText("Falecimento: 29 de julho")).toHaveText(
    "Falecimento: 29 de julho de 1890"
  );
  await expect(page.getByText("Nacionalidade: Holandesa")).toHaveText(
    "Nacionalidade: Holandesa"
  );
  await expect(page.getByText("Movimentos:Pós-Impressionismo")).toHaveText(
    "Movimentos:Pós-Impressionismo"
  );
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: Pintor"
  );
  await expect(page.getByText("Vincent van Gogh foi")).toHaveText(
    "Vincent van Gogh foi um dos mais influentes pintores do pós-impressionismo. Sua arte é caracterizada pelo uso expressivo das cores, pinceladas marcantes e uma profunda carga emocional, refletindo sua intensa visão do mundo."
  );
  await expect(page.getByText("Nascido na Holanda, Van")).toHaveText(
    "Nascido na Holanda, Van Gogh teve uma vida turbulenta e passou por diversas dificuldades emocionais e financeiras. Inicialmente, trabalhou como negociante de arte e missionário antes de se dedicar integralmente à pintura."
  );
  await expect(page.getByText("Ao longo de sua carreira, ")).toHaveText(
    "Ao longo de sua carreira, produziu mais de 2.000 obras, incluindo pinturas, desenhos e esboços. Algumas de suas peças mais icônicas, como 'Noite Estrelada' e 'Os Girassóis', são reconhecidas mundialmente por sua expressividade única."
  );
  await expect(page.getByText("Apesar de não ter alcançado")).toHaveText(
    "Apesar de não ter alcançado sucesso em vida, Van Gogh teve um impacto imenso na arte moderna. Seu estilo inovador influenciou diversas gerações de artistas e continua a ser estudado e admirado em todo o mundo."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Noite Estrelada" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Wassily Kandinsky", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "4" }).click();
  await page.getByRole("link", { name: "Wassily Kandinsky" }).click();
  await expect(page.getByText("Nome completo: Wassily Kandinsky")).toHaveText(
    "Nome completo: Wassily Kandinsky"
  );
  await expect(page.getByText("Nascimento: 16 de dezembro")).toHaveText(
    "Nascimento: 16 de dezembro de 1866"
  );
  await expect(page.getByText("Falecimento: 13 de dezembro")).toHaveText(
    "Falecimento: 13 de dezembro de 1944"
  );
  await expect(page.getByText("Nacionalidade: Russa")).toHaveText(
    "Nacionalidade: Russa"
  );
  await expect(page.getByText("Movimentos:ExpressionismoAbstr")).toBeVisible();
  await expect(page.getByText("Ocupações: Pintor, Teórico")).toHaveText(
    "Ocupações: Pintor, Teórico da arte"
  );
  await expect(page.getByText("Wassily Kandinsky foi um dos")).toHaveText(
    "Wassily Kandinsky foi um dos pioneiros da arte abstrata, reconhecido por sua busca por uma linguagem visual espiritual e não figurativa, que revolucionou a pintura do século XX."
  );
  await expect(page.getByText("Nascido em Moscovo, Kan")).toHaveText(
    "Nascido em Moscovo, Kandinsky estudou direito antes de se dedicar à arte. Influenciado pela música, pelo simbolismo e pelo folclore russo, desenvolveu uma teoria estética onde cores e formas expressam emoções e estados interiores."
  );
  await expect(page.getByText("Obras como 'Composição 8' ex")).toHaveText(
    "Obras como 'Composição 8' exemplificam seu uso dinâmico de formas geométricas, cores vibrantes e ritmos visuais, explorando a sinestesia entre arte e som, e propondo uma 'composição' pictórica quase musical."
  );
  await expect(page.getByText("Kandinsky também foi um")).toHaveText(
    "Kandinsky também foi um importante teórico, autor de livros como 'Do Espiritual na Arte', e membro do grupo Der Blaue Reiter. Seu legado influenciou profundamente movimentos como o Bauhaus, o Expressionismo e a arte abstrata em geral."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Composição 8" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Édouard Manet", async ({ page }) => {
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "4" }).click();
  await page.getByRole("link", { name: "Édouard Manet" }).click();
  await expect(page.getByText("Nome completo: Édouard Manet")).toHaveText(
    "Nome completo: Édouard Manet"
  );
  await expect(page.getByText("Nascimento: 23 de janeiro")).toHaveText(
    "Nascimento: 23 de janeiro de 1832"
  );
  await expect(page.getByText("Falecimento: 30 de abril")).toHaveText(
    "Falecimento: 30 de abril de 1883"
  );
  await expect(page.getByText("Nacionalidade: Francesa")).toHaveText(
    "Nacionalidade: Francesa"
  );
  await expect(page.getByText("Movimentos:RealismoImpre")).toBeVisible();
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: Pintor"
  );
  await expect(page.getByText("Édouard Manet foi uma f")).toHaveText(
    "Édouard Manet foi uma figura-chave na transição do Realismo para o Impressionismo, desafiando as convenções acadêmicas e abrindo caminho para a arte moderna."
  );
  await expect(page.getByText("Nascido em Paris, Manet")).toHaveText(
    "Nascido em Paris, Manet começou sua carreira influenciado pelos mestres clássicos, mas logo rompeu com a tradição ao abordar temas contemporâneos com um estilo direto e inovador."
  );
  await expect(page.getByText("Obras como 'Olympia' e")).toHaveText(
    "Obras como 'Olympia' e 'Almoço na Relva' causaram escândalo ao retratar cenas modernas com ousadia e realismo. Sua pincelada livre e o uso ousado da luz anteciparam o estilo impressionista."
  );
  await expect(page.getByText("Apesar de ter enfrentado críticas")).toHaveText(
    "Apesar de ter enfrentado críticas em sua época, Manet é hoje reconhecido como um dos pilares da arte moderna, influenciando profundamente artistas como Monet, Degas e Renoir."
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Um Bar no Folies-Bergère" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});
