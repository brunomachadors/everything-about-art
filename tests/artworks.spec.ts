import { test, expect } from "@playwright/test";

test("Search artwork by artwork name", async ({ page }) => {
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar por título ou artista" })
  ).toBeVisible();
  await expect(page.getByRole("combobox")).toHaveText(
    "PaísesFrançaEspanhaAlemanhaRússiaHolandaPortugalItáliaÁustriaNoruegaBrasil"
  );
  await page
    .getByRole("textbox", { name: "Buscar por título ou artista" })
    .fill("mona lisa");
  await expect(
    page.getByRole("link", { name: "Mona Lisa Mona Lisa Leonardo" })
  ).toBeVisible();
});

test("Search artwork by artist name", async ({ page }) => {
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar por título ou artista" })
  ).toBeVisible();
  await expect(page.getByRole("combobox")).toHaveText(
    "PaísesFrançaEspanhaAlemanhaRússiaHolandaPortugalItáliaÁustriaNoruegaBrasil"
  );
  await page
    .getByRole("textbox", { name: "Buscar por título ou artista" })
    .fill("friedrich");
  await expect(
    page.getByRole("link", { name: "Caminhante Sobre o Mar de Né" })
  ).toBeVisible();
});

test("Search artwork by country", async ({ page }) => {
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar por título ou artista" })
  ).toBeVisible();
  await expect(page.getByRole("combobox")).toHaveText(
    "PaísesFrançaEspanhaAlemanhaRússiaHolandaPortugalItáliaÁustriaNoruegaBrasil"
  );
  await page.getByRole("combobox").selectOption("Portugal");
  await expect(
    page.getByRole("link", { name: "Fernando Pessoa Fernando" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "O Mar O Mar Maria Keil" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Os Baloiços e A Árvore na" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Parto da Viola Parto da Viola" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Tríptico Auto-retrato, Sonho" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Zé Povinho Zé Povinho Rafael" })
  ).toBeVisible();
});

test("A Liberdade guiando o povo", async ({ page }) => {
  const response = await page.request.get("api/artworks/delacroix-a-liberdade");
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("link", { name: "A Liberdade guiando o povo" }).click();
  await expect(page.getByText("🎨 Artista: Eugène Delacroix")).toBeVisible();
  await expect(page.getByText("🎨 Artista: Eugène Delacroix")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: 1830")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: França")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Romantismo")).toHaveText(
    "🧩 Estilo: " + jsonData.styleArray
  );
  await expect(page.getByText("🖌️ Técnica: Óleo sobre tela")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(page.getByText("🏛️ Localização: Museu do")).toHaveText(
    "🏛️ Localização: " + jsonData.location
  );
  await expect(page.getByText("💰 Primeira Venda: Em 1831, o")).toHaveText(
    "💰 Primeira Venda: " + jsonData.pricehistory.firstSale
  );
  await expect(page.getByText("📈 Última Revenda: A obra")).toHaveText(
    "📈 Última Revenda: " + jsonData.pricehistory.resale
  );
  await expect(page.getByText('"O meu mau humor está a')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("Esta obra é da autoria do")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("As pessoas nesta altura")).toHaveText(
    jsonData.description[1].text
  );
  await expect(page.getByText("O pintor estava numa casa pró")).toHaveText(
    jsonData.description[2].text
  );
  await expect(
    page.getByRole("paragraph").filter({ hasText: "O meu mau humor está a" })
  ).toHaveText(jsonData.description[3].text);
  await expect(page.getByText("A mulher que segura a")).toHaveText(
    jsonData.description[4].text
  );
  await expect(page.getByText("Há um menino que segura duas")).toHaveText(
    jsonData.description[5].text
  );
  await expect(page.getByText("No lado esquerdo está também")).toHaveText(
    jsonData.description[6].text
  );
  await expect(page.getByText("No fundo, está a catedral de")).toHaveText(
    jsonData.description[7].text
  );
  await expect(page.getByText("Nem toda a gente gostou desta")).toHaveText(
    jsonData.description[8].text
  );
  await expect(
    page.getByRole("img", { name: "Foto de Eugène Delacroix" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(page.getByRole("link", { name: "Eugène Delacroix" })).toHaveText(
    jsonData.author.name
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("As Banhistas", async ({ page }) => {
  const response = await page.request.get(
    "api/artworks/paul-cezanne-as-banhistas"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("link", { name: "As Banhistas" }).click();
  await expect(page.getByText("🎨 Artista: Paul Cézanne")).toBeVisible();
  await expect(page.getByText("🎨 Artista: Paul Cézanne")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: 1898")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: França")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Pós-Impressionismo")).toHaveText(
    "🧩 Estilo: " + jsonData.styleArray
  );
  await expect(page.getByText("🖌️ Técnica: Óleo sobre tela")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(
    page.getByText("🏛️ Localização: Museu de Arte de Philadelphia")
  ).toHaveText("🏛️ Localização: " + jsonData.location);
  await expect(
    page.getByText("💰 Primeira Venda: Por ser uma obra")
  ).toHaveText("💰 Primeira Venda: " + jsonData.pricehistory.firstSale);
  await expect(
    page.getByText("📈 Última Revenda:  A obra foi comprada pelo Museu")
  ).toHaveText("📈 Última Revenda: " + jsonData.pricehistory.resale);
  await expect(page.getByText('"Eu faço da cor o meu alfabeto.')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("Esta obra é da autoria do pintor")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("Cézanne nasceu em 1839 e")).toHaveText(
    jsonData.description[1].text
  );
  await expect(
    page.getByText("As mulheres no quadro não têm cara.")
  ).toHaveText(jsonData.description[2].text);
  await expect(
    page.getByText("Se traçarmos uma linha a meio da obra")
  ).toHaveText(jsonData.description[3].text);
  await expect(page.getByText("Do outro lado da margem")).toHaveText(
    jsonData.description[4].text
  );
  await expect(page.getByText("Mais à frente, parece haver")).toHaveText(
    jsonData.description[5].text
  );
  await expect(page.getByText("Cézanne era pós-impressionista.")).toHaveText(
    jsonData.description[6].text
  );
  await expect(
    page.getByText("Cézanne inspirou muitos artistas, como Pablo")
  ).toHaveText(jsonData.description[7].text);
  await expect(
    page.getByRole("img", { name: "Foto de Paul Cézanne" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(page.getByRole("link", { name: "Paul Cézanne" })).toHaveText(
    jsonData.author.name
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("As Meninas", async ({ page }) => {
  const response = await page.request.get(
    "api/artworks/diego-velazquez-as-meninas"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("link", { name: "As Meninas" }).click();
  await expect(page.getByText("🎨 Artista: Diego Velázquez")).toBeVisible();
  await expect(page.getByText("🎨 Artista: Diego Velázquez")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: 1656")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: Espanha")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Barroco")).toHaveText(
    "🧩 Estilo: " + jsonData.styleArray
  );
  await expect(page.getByText("🖌️ Técnica: Óleo sobre tela")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(page.getByText("🏛️ Localização: Museu do Prado")).toHaveText(
    "🏛️ Localização: " + jsonData.location
  );
  await expect(
    page.getByText("💰 Primeira Venda: Não houve uma venda oficial.")
  ).toHaveText("💰 Primeira Venda: " + jsonData.pricehistory.firstSale);
  await expect(
    page.getByText("📈 Última Revenda:  Nunca foi revendida")
  ).toHaveText("📈 Última Revenda: " + jsonData.pricehistory.resale);
  await expect(
    page.getByText('"A pintura é uma arte de pensamento')
  ).toContainText(jsonData.quote);
  await expect(page.getByText("Esta obra é da autoria do pintor")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("A figura central é a princesa")).toHaveText(
    jsonData.description[1].text
  );
  await expect(page.getByText("A aia da esquerda chama-se Maria.")).toHaveText(
    jsonData.description[2].text
  );
  await expect(page.getByText("A aia à direita chama-se Isabel,")).toHaveText(
    jsonData.description[3].text
  );
  await expect(page.getByText("A senhora mais à direita")).toHaveText(
    jsonData.description[4].text
  );
  await expect(
    page.getByText("Atrás desta família está o próprio pintor")
  ).toHaveText(jsonData.description[5].text);
  await expect(
    page.getByText("O espelho que está no fundo reflecte")
  ).toHaveText(jsonData.description[6].text);
  await expect(
    page.getByRole("img", { name: "Foto de Diego Velázquez" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(page.getByRole("link", { name: "Diego Velázquez" })).toHaveText(
    jsonData.author.name
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Caminhante Sobre o Mar de Névoa", async ({ page }) => {
  const response = await page.request.get(
    "api/artworks/friedrich-caminhante-sobre-o-mar-de-nevoa"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("link", { name: "Caminhante Sobre o Mar" }).click();
  await expect(
    page.getByText("🎨 Artista: Caspar David Friedrich")
  ).toBeVisible();
  await expect(page.getByText("🎨 Artista: Caspar David Friedrich")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: 1818")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: Alemanha")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Romantismo")).toHaveText(
    "🧩 Estilo: " + jsonData.styleArray
  );
  await expect(page.getByText("🖌️ Técnica: Óleo sobre tela")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(
    page.getByText("🏛️ Localização: Hamburger Kunsthalle")
  ).toHaveText("🏛️ Localização: " + jsonData.location);
  await expect(page.getByText("💰 Primeira Venda: Nenhuma")).toHaveText(
    "💰 Primeira Venda: " + jsonData.pricehistory.firstSale
  );
  await expect(page.getByText("📈 Última Revenda:  Nenhuma")).toHaveText(
    "📈 Última Revenda: " + jsonData.pricehistory.resale
  );
  await expect(page.getByText('"Não se deve apenas pintar')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("Esta obra é da autoria do pintor")).toHaveText(
    jsonData.description[0].text
  );
  await expect(
    page.getByText("O pintor apenas começou a pintar com 34 anos")
  ).toHaveText(jsonData.description[1].text);
  await expect(page.getByText("Ele criticava os pintores")).toHaveText(
    jsonData.description[2].text
  );
  await expect(page.getByText("Há quem diga que o homem no quadro")).toHaveText(
    jsonData.description[3].text
  );
  await expect(
    page.getByText("As nuvens parecem ondas a fazer espuma")
  ).toHaveText(jsonData.description[4].text);
  await expect(page.getByText("No final da sua vida, Friedrich")).toHaveText(
    jsonData.description[5].text
  );
  await expect(
    page.getByRole("img", { name: "Foto de Caspar David Friedrich" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Caspar David Friedrich" })
  ).toHaveText(jsonData.author.name);
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Composição 8", async ({ page }) => {
  const response = await page.request.get(
    "api/artworks/kandinsky-composicao-8"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("link", { name: "Composição 8" }).click();
  await expect(page.getByText("🎨 Artista: Wassily Kandinsky")).toBeVisible();
  await expect(page.getByText("🎨 Artista: Wassily Kandinsky")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: 1923")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: Rússia")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Abstracionismo")).toHaveText(
    "🧩 Estilo: " + jsonData.styleArray
  );
  await expect(page.getByText("🖌️ Técnica: Óleo sobre tela")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(page.getByText("🏛️ Localização: Museu Guggenheim")).toHaveText(
    "🏛️ Localização: " + jsonData.location
  );
  await expect(page.getByText("💰 Primeira Venda: Nenhuma")).toHaveText(
    "💰 Primeira Venda: " + jsonData.pricehistory.firstSale
  );
  await expect(page.getByText("📈 Última Revenda:  Nenhuma")).toHaveText(
    "📈 Última Revenda: " + jsonData.pricehistory.resale
  );
  await expect(page.getByText('"A cor é o teclado,')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("Esta obra é da autoria do pintor")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("Kandinsky foi considerado")).toHaveText(
    jsonData.description[1].text
  );
  await expect(page.getByText("Quando era pequeno, Kandinsky")).toHaveText(
    jsonData.description[2].text
  );
  await expect(page.getByText("Começou a ligar a pintura")).toHaveText(
    jsonData.description[3].text
  );
  await expect(page.getByText("Apesar de não ser a primeira")).toHaveText(
    jsonData.description[4].text
  );
  await expect(
    page.getByText("Kandinsky ficou famoso por desenvolver")
  ).toHaveText(jsonData.description[5].text);
  await expect(page.getByText("A parte da direita chama-nos")).toHaveText(
    jsonData.description[6].text
  );
  await expect(
    page.getByRole("img", { name: "Foto de Wassily Kandinsky" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Wassily Kandinsky" })
  ).toHaveText(jsonData.author.name);
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Composição com Vermelho, Azul e Amarelo", async ({ page }) => {
  const response = await page.request.get(
    "api/artworks/composicao-vermelho-azul-amarelo"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page
    .getByRole("link", { name: "Composição com Vermelho, Azul" })
    .click();
  await expect(page.getByText("🎨 Artista: Piet Mondrian")).toBeVisible();
  await expect(page.getByText("🎨 Artista: Piet Mondrian")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: 1930")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: Holanda")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Neoplasticismo,")).toBeVisible;
  await expect(page.getByText("🖌️ Técnica: Óleo sobre tela")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(
    page.getByText("🏛️ Localização: Museu Gemeentemuseum")
  ).toHaveText("🏛️ Localização: " + jsonData.location);
  await expect(page.getByText("💰 Primeira Venda: Desconhecido")).toHaveText(
    "💰 Primeira Venda: " + jsonData.pricehistory.firstSale
  );
  await expect(page.getByText("📈 Última Revenda:  Desconhecido")).toHaveText(
    "📈 Última Revenda: " + jsonData.pricehistory.resale
  );
  await expect(page.getByText('"O mínimo é o máximo.')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("Esta obra é da autoria do pintor")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("Mondrian era um pintor modernista")).toHaveText(
    jsonData.description[1].text
  );
  await expect(page.getByText("O preto presente no quadro")).toHaveText(
    jsonData.description[2].text
  );
  await expect(page.getByText("Quando Mondrian esteve em")).toHaveText(
    jsonData.description[3].text
  );
  await expect(page.getByText("Agora passemos à forma")).toHaveText(
    jsonData.description[4].text
  );
  await expect(page.getByText("Para Piet Mondrian, o")).toHaveText(
    jsonData.description[5].text
  );
  await expect(
    page.getByRole("img", { name: "Foto de Piet Mondrian" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(page.getByRole("link", { name: "Piet Mondrian" })).toHaveText(
    jsonData.author.name
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Fernando Pessoa", async ({ page }) => {
  const response = await page.request.get(
    "api/artworks/fernando-pessoa-almada-negreiros"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("link", { name: "Fernando Pessoa" }).click();
  await expect(page.getByText("🎨 Artista: Almada Negreiros")).toBeVisible();
  await expect(page.getByText("🎨 Artista: Almada Negreiros")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: 1915")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: Portugal")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Modernismo,")).toBeVisible;
  await expect(page.getByText("🖌️ Técnica: Óleo sobre tela")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(page.getByText("🏛️ Localização: Centro de Arte")).toHaveText(
    "🏛️ Localização: " + jsonData.location
  );
  await expect(page.getByText("💰 Primeira Venda: 30 contos")).toHaveText(
    "💰 Primeira Venda: " + jsonData.pricehistory.firstSale
  );
  await expect(page.getByText("📈 Última Revenda: 6.700 euros")).toHaveText(
    "📈 Última Revenda: " + jsonData.pricehistory.resale
  );
  await expect(page.getByText('"Um homem é do tam')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("Esta obra é da autoria do pintor")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("Era Verão de 1915 e, na obra")).toHaveText(
    jsonData.description[1].text
  );
  await expect(page.getByText("O chão e o fundo do quadro")).toHaveText(
    jsonData.description[2].text
  );
  await expect(page.getByText("Reparem no açucareiro: está")).toHaveText(
    jsonData.description[3].text
  );
  await expect(page.getByText("Quando este quadro foi vendido")).toHaveText(
    jsonData.description[4].text
  );
  await expect(page.getByText("Alguém pagou 6.700 euros, ou seja")).toHaveText(
    jsonData.description[5].text
  );
  await expect(page.getByText("E aqui fica uma frase")).toHaveText(
    jsonData.description[6].text
  );
  await expect(
    page.getByRole("img", { name: "Foto de Almada Negreiros" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(page.getByRole("link", { name: "Almada Negreiros" })).toHaveText(
    jsonData.author.name
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Mona Lisa", async ({ page }) => {
  const response = await page.request.get(
    "api/artworks/mona-lisa-leonardo-da-vinci"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("link", { name: "Mona Lisa" }).click();
  await expect(page.getByText("🎨 Artista: Leonardo da Vinci")).toBeVisible();
  await expect(page.getByText("🎨 Artista: Leonardo da Vinci")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: 1503")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: Itália")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Renascimento")).toHaveText(
    "🧩 Estilo: " + jsonData.styleArray
  );
  await expect(page.getByText("🖌️ Técnica: Óleo sobre madeira")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(page.getByText("🏛️ Localização: Museu do Louvre")).toHaveText(
    "🏛️ Localização: " + jsonData.location
  );
  await expect(
    page.getByText("💰 Primeira Venda: Comprada pelo rei")
  ).toHaveText("💰 Primeira Venda: " + jsonData.pricehistory.firstSale);
  await expect(
    page.getByText("📈 Última Revenda: Nunca foi revendida")
  ).toHaveText("📈 Última Revenda: " + jsonData.pricehistory.resale);
  await expect(page.getByText('"O sorriso mais famoso da')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("Esta obra é da autoria do pintor")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("Leonardo procurava a perfeição e")).toHaveText(
    jsonData.description[1].text
  );
  await expect(
    page.getByText("No quadro, ela parece estar sentada")
  ).toHaveText(jsonData.description[2].text);
  await expect(page.getByText("Se olharmos melhor, vemos que a")).toHaveText(
    jsonData.description[3].text
  );
  await expect(
    page.getByText("Agora vamos ao sorriso. Não parecia")
  ).toHaveText(jsonData.description[4].text);
  await expect(page.getByText("Este quadro já esteve na casa")).toHaveText(
    jsonData.description[5].text
  );
  await expect(
    page.getByRole("img", { name: "Foto de Leonardo da Vinci" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Leonardo da Vinci" })
  ).toHaveText(jsonData.author.name);
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Noite Estrelada", async ({ page }) => {
  const response = await page.request.get(
    "api/artworks/vincent-van-gogh-noite-estrelada"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("link", { name: "Noite Estrelada" }).click();
  await expect(page.getByText("🎨 Artista: Vincent van Gogh")).toBeVisible();
  await expect(page.getByText("🎨 Artista: Vincent van Gogh")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: 1889")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: Holanda")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Pós-Impressionismo")).toHaveText(
    "🧩 Estilo: " + jsonData.styleArray
  );
  await expect(page.getByText("🖌️ Técnica: Óleo sobre tela")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(
    page.getByText("🏛️ Localização: Museu de Arte Moderna")
  ).toHaveText("🏛️ Localização: " + jsonData.location);
  await expect(
    page.getByText("💰 Primeira Venda: Van Gogh nunca vendeu")
  ).toHaveText("💰 Primeira Venda: " + jsonData.pricehistory.firstSale);
  await expect(
    page.getByText("📈 Última Revenda: O valor estimado")
  ).toHaveText("📈 Última Revenda: " + jsonData.pricehistory.resale);
  await expect(page.getByText('"Esta manhã vi o campo')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("Esta obra é da autoria do pintor")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("Van Gogh nasceu em 1853 em")).toHaveText(
    jsonData.description[1].text
  );
  await expect(
    page.getByText("Observando o quadro, vemos uma noite")
  ).toHaveText(jsonData.description[2].text);
  await expect(page.getByText("Contrariamente à confusão no céu,")).toHaveText(
    jsonData.description[3].text
  );
  await expect(
    page.getByText("O céu parece estar em movimento, como")
  ).toHaveText(jsonData.description[4].text);
  await expect(page.getByText("Este quadro foi pintado num quarto")).toHaveText(
    jsonData.description[5].text
  );
  await expect(
    page.getByRole("img", { name: "Foto de Vincent van Gogh" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(page.getByRole("link", { name: "Vincent van Gogh" })).toHaveText(
    jsonData.author.name
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("O Beijo", async ({ page }) => {
  const response = await page.request.get("api/artworks/gustav-klimt-o-beijo");
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("link", { name: "O Beijo" }).click();
  await expect(page.getByText("🎨 Artista: Gustav Klimt")).toBeVisible();
  await expect(page.getByText("🎨 Artista: Gustav Klimt")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: 1907")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: Áustria")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Simbolismo")).toHaveText(
    "🧩 Estilo: " + jsonData.styleArray
  );
  await expect(page.getByText("🖌️ Técnica: Óleo sobre tela")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(page.getByText("🏛️ Localização: Galeria Belvedere")).toHaveText(
    "🏛️ Localização: " + jsonData.location
  );
  await expect(page.getByText("💰 Primeira Venda: Nenhuma")).toHaveText(
    "💰 Primeira Venda: " + jsonData.pricehistory.firstSale
  );
  await expect(page.getByText("📈 Última Revenda: Nenhuma")).toHaveText(
    "📈 Última Revenda: " + jsonData.pricehistory.resale
  );
  await expect(page.getByText('"A arte é a expressão')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("Esta obra é da autoria do pintor")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("É um quadro muito bonito")).toHaveText(
    jsonData.description[1].text
  );
  await expect(page.getByText("A textura que se vê no quadro")).toHaveText(
    jsonData.description[2].text
  );
  await expect(page.getByText("A pintura tem a forma de uma torre")).toHaveText(
    jsonData.description[3].text
  );
  await expect(page.getByText("Contudo, há um lado menos")).toHaveText(
    jsonData.description[4].text
  );
  await expect(
    page.getByText("Klimt tinha muito respeito pelas mulheres.")
  ).toHaveText(jsonData.description[5].text);
  await expect(
    page.getByRole("img", { name: "Foto de Gustav Klimt" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(page.getByRole("link", { name: "Gustav Klimt" })).toHaveText(
    jsonData.author.name
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("O Casal Arnolfini", async ({ page }) => {
  const response = await page.request.get(
    "api/artworks/jan-van-eyck-casal-arnolfini"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("link", { name: "O Casal Arnolfini" }).click();
  await expect(page.getByText("🎨 Artista: Jan van Eyck")).toBeVisible();
  await expect(page.getByText("🎨 Artista: Jan van Eyck")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: 1434")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: Holanda")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Renascimento do Norte")).toHaveText(
    "🧩 Estilo: " + jsonData.styleArray
  );
  await expect(page.getByText("🖌️ Técnica: Óleo sobre madeira")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(page.getByText("🏛️ Localização: Galeria Nacional")).toHaveText(
    "🏛️ Localização: " + jsonData.location
  );
  await expect(page.getByText("💰 Primeira Venda: Nenhuma")).toHaveText(
    "💰 Primeira Venda: " + jsonData.pricehistory.firstSale
  );
  await expect(page.getByText("📈 Última Revenda: Nenhuma")).toHaveText(
    "📈 Última Revenda: " + jsonData.pricehistory.resale
  );
  await expect(page.getByText('"Johannes de Eyck fuit hic')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("Esta obra é da autoria do pintor")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("Os dois membros do casal")).toHaveText(
    jsonData.description[1].text
  );
  await expect(page.getByText("Giovanni jura ser fiel, com a mão")).toHaveText(
    jsonData.description[2].text
  );
  await expect(
    page.getByText("Este quadro foi pintado um ano depois")
  ).toHaveText(jsonData.description[3].text);
  await expect(
    page.getByRole("img", { name: "Foto de Jan van Eyck" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(page.getByRole("link", { name: "Jan van Eyck" })).toHaveText(
    jsonData.author.name
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("O Grito", async ({ page }) => {
  const response = await page.request.get("api/artworks/edvard-munch-o-grito");
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("link", { name: "O Grito" }).click();
  await expect(page.getByText("🎨 Artista: Edvard Munch")).toBeVisible();
  await expect(page.getByText("🎨 Artista: Edvard Munch")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: 1893")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: Noruega")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Expressionismo")).toHaveText(
    "🧩 Estilo: " + jsonData.styleArray
  );
  await expect(page.getByText("🖌️ Técnica: Óleo sobre tela")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(page.getByText("🏛️ Localização: Galeria Nacional")).toHaveText(
    "🏛️ Localização: " + jsonData.location
  );
  await expect(
    page.getByText("💰 Primeira Venda: A primeira versão de O Grito")
  ).toHaveText("💰 Primeira Venda: " + jsonData.pricehistory.firstSale);
  await expect(
    page.getByText("📈 Última Revenda: A versão mais famosa de O Grito")
  ).toHaveText("📈 Última Revenda: " + jsonData.pricehistory.resale);
  await expect(page.getByText('"Eu estava a andar com dois')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("Esta obra é da autoria do pintor")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("A primeira versão foi pintada")).toHaveText(
    jsonData.description[1].text
  );
  await expect(page.getByText("Comecemos pela primeira versão.")).toHaveText(
    jsonData.description[2].text
  );
  await expect(page.getByText("Nos últimos anos de vida, Munch")).toHaveText(
    jsonData.description[3].text
  );
  await expect(
    page.getByText("Esta série de obras pertence ao Expressionismo.")
  ).toHaveText(jsonData.description[4].text);
  await expect(page.getByText("A versão pintada em 1910")).toHaveText(
    jsonData.description[5].text
  );
  await expect(
    page.getByRole("img", { name: "Foto de Edvard Munch" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(page.getByRole("link", { name: "Edvard Munch" })).toHaveText(
    jsonData.author.name
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("O Lavrador de Café", async ({ page }) => {
  const response = await page.request.get(
    "api/artworks/candido-portinari-lavrador-cafe"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page.getByRole("link", { name: "O Lavrador de Café" }).click();
  await expect(page.getByText("🎨 Artista: Cândido Portinari")).toBeVisible();
  await expect(page.getByText("🎨 Artista: Cândido Portinari")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: 1934")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: Brasil")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Modernismo,")).toBeVisible();
  await expect(page.getByText("🖌️ Técnica: Óleo sobre tela")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(
    page.getByText("🏛️ Localização: Museu de Belas-Artes")
  ).toHaveText("🏛️ Localização: " + jsonData.location);
  await expect(page.getByText("💰 Primeira Venda: Desconhecido")).toHaveText(
    "💰 Primeira Venda: " + jsonData.pricehistory.firstSale
  );
  await expect(
    page.getByText("📈 Última Revenda: Obras de Portinari já")
  ).toHaveText("📈 Última Revenda: " + jsonData.pricehistory.resale);
  await expect(
    page.getByText('"Pinto o que vejo, pinto o que sei')
  ).toContainText(jsonData.quote);
  await expect(page.getByText("Esta obra é da autoria do pintor")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("O pintor nasceu em 1903")).toHaveText(
    jsonData.description[1].text
  );
  await expect(page.getByText("Portinari pintava com cores fortes")).toHaveText(
    jsonData.description[2].text
  );
  await expect(
    page.getByText("Os pés e os braços do lavrador são enormes.")
  ).toHaveText(jsonData.description[3].text);
  await expect(page.getByText("Portinari foi um dos pintores mais")).toHaveText(
    jsonData.description[4].text
  );
  await expect(
    page.getByRole("img", { name: "Foto de Cândido Portinari" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Cândido Portinari" })
  ).toHaveText(jsonData.author.name);
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("O Mar", async ({ page }) => {
  const response = await page.request.get("api/artworks/maria-keil-o-mar");
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page.getByRole("link", { name: "O Mar O Mar Maria Keil" }).click();
  await expect(page.getByText("🎨 Artista: Maria Keil")).toBeVisible();
  await expect(page.getByText("🎨 Artista: Maria Keil")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: 1958")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: Portugal")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Modernismo")).toHaveText(
    "🧩 Estilo: " + jsonData.styleArray
  );
  await expect(page.getByText("🖌️ Técnica: Azulejo")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(
    page.getByText("🏛️ Localização: Avenida Infante Santo")
  ).toHaveText("🏛️ Localização: " + jsonData.location);
  await expect(page.getByText("💰 Primeira Venda: Nenhuma")).toHaveText(
    "💰 Primeira Venda: " + jsonData.pricehistory.firstSale
  );
  await expect(page.getByText("📈 Última Revenda: Nenhuma")).toHaveText(
    "📈 Última Revenda: " + jsonData.pricehistory.resale
  );
  await expect(page.getByText('"A azulejaria, para mim,')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("Este enorme azulejo é da autoria")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("Maria Keil era uma mulher")).toHaveText(
    jsonData.description[1].text
  );
  await expect(page.getByText("Esta obra é uma homenagem")).toHaveText(
    jsonData.description[2].text
  );
  await expect(page.getByText("Por exemplo, na base das escadas")).toHaveText(
    jsonData.description[3].text
  );
  await expect(page.getByText("As escadas estão perfeitamente")).toHaveText(
    jsonData.description[4].text
  );
  await expect(
    page.getByRole("img", { name: "Foto de Maria Keil" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(page.getByRole("link", { name: "Maria Keil" })).toHaveText(
    jsonData.author.name
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("O Sonho", async ({ page }) => {
  const response = await page.request.get(
    "api/artworks/henri-rousseau-o-sonho"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page.getByRole("link", { name: "O Sonho" }).click();
  await expect(page.getByText("🎨 Artista: Henri Rousseau")).toBeVisible();
  await expect(page.getByText("🎨 Artista: Henri Rousseau")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: 1910")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: França")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Impressionismo")).toHaveText(
    "🧩 Estilo: " + jsonData.styleArray
  );
  await expect(page.getByText("🖌️ Técnica: Óleo sobre tela")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(
    page.getByText("🏛️ Localização: Museu de Arte Moderna")
  ).toHaveText("🏛️ Localização: " + jsonData.location);
  await expect(page.getByText("💰 Primeira Venda: Nenhuma")).toHaveText(
    "💰 Primeira Venda: " + jsonData.pricehistory.firstSale
  );
  await expect(page.getByText("📈 Última Revenda: Nenhuma")).toHaveText(
    "📈 Última Revenda: " + jsonData.pricehistory.resale
  );
  await expect(page.getByText('"Nada me faz mais feliz')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("Esta obra é da autoria do pintor")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("Rousseau nasceu em Laval, França")).toHaveText(
    jsonData.description[1].text
  );
  await expect(page.getByText("Embora Rousseau já tivesse pintado")).toHaveText(
    jsonData.description[2].text
  );
  await expect(page.getByText("Nós somos os maiores artistas")).toHaveText(
    jsonData.description[3].text
  );
  await expect(
    page.getByText("A partir de 1910, Rousseau começou a")
  ).toHaveText(jsonData.description[4].text);
  await expect(
    page.getByText("Esta foi a última obra de Rousseau.")
  ).toHaveText(jsonData.description[5].text);
  await expect(
    page.getByRole("img", { name: "Foto de Henri Rousseau" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(page.getByRole("link", { name: "Henri Rousseau" })).toHaveText(
    jsonData.author.name
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("O Suprematismo", async ({ page }) => {
  const response = await page.request.get(
    "api/artworks/malevich-o-suprematismo"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page.getByRole("link", { name: "O Suprematismo" }).click();
  await expect(page.getByText("🎨 Artista: Kazimir Malevich")).toBeVisible();
  await expect(page.getByText("🎨 Artista: Kazimir Malevich")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: 1913")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: Rússia")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Suprematismo")).toHaveText(
    "🧩 Estilo: " + jsonData.styleArray
  );
  await expect(page.getByText("🖌️ Técnica: Materiais e formas")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(
    page.getByText("🏛️ Localização: Museu de Arte Moderna")
  ).toHaveText("🏛️ Localização: " + jsonData.location);
  await expect(
    page.getByText("💰 Primeira Venda: Nenhum. Durante a sua vida")
  ).toHaveText("💰 Primeira Venda: " + jsonData.pricehistory.firstSale);
  await expect(
    page.getByText("📈 Última Revenda: Quanto ao preço da última")
  ).toHaveText("📈 Última Revenda: " + jsonData.pricehistory.resale);
  await expect(page.getByText('"A arte não é um reflexo')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("Este movimento era seguido")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("O pintor nasceu em 1879, em Kiev")).toHaveText(
    jsonData.description[1].text
  );
  await expect(
    page.getByText("O percurso de Malevich foi muito rápido.")
  ).toHaveText(jsonData.description[2].text);
  await expect(
    page.getByText("As geometrias flutuam sem peso, espaço")
  ).toHaveText(jsonData.description[3].text);
  await expect(page.getByText("Vivia-se uma revolução na Rússia")).toHaveText(
    jsonData.description[4].text
  );
  await expect(
    page.getByRole("img", { name: "Foto de Kazimir Malevich" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(page.getByRole("link", { name: "Kazimir Malevich" })).toHaveText(
    jsonData.author.name
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Os Baloiços e A Árvore na Prisão", async ({ page }) => {
  const response = await page.request.get(
    "api/artworks/maria-helena-vieira-da-silva"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page.getByRole("link", { name: "Os Baloiços e A Árvore na" }).click();
  await expect(
    page.getByText("🎨 Artista: Maria Helena Vieira da Silva")
  ).toBeVisible();
  await expect(
    page.getByText("🎨 Artista: Maria Helena Vieira da Silva")
  ).toHaveText("🎨 Artista: " + jsonData.artist);
  await expect(page.getByText("📅 Ano: 1931")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: Portugal")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Expressionismo,")).toBeVisible();
  await expect(page.getByText("🖌️ Técnica: Óleo sobre tela")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(
    page.getByText("🏛️ Localização: Fundação Arpad Szenes")
  ).toHaveText("🏛️ Localização: " + jsonData.location);
  await expect(page.getByText("💰 Primeira Venda: Desconhecido")).toHaveText(
    "💰 Primeira Venda: " + jsonData.pricehistory.firstSale
  );
  await expect(
    page.getByText("📈 Última Revenda: Algumas obras de Vieira da Silva")
  ).toHaveText("📈 Última Revenda: " + jsonData.pricehistory.resale);
  await expect(
    page.getByText('"A arte é uma forma de liberdade.')
  ).toContainText(jsonData.quote);
  await expect(page.getByText("Estas duas obras são da autoria")).toHaveText(
    jsonData.description[0].text
  );
  await expect(
    page.getByText("A pintora nasceu no final da Primavera")
  ).toHaveText(jsonData.description[1].text);
  await expect(page.getByText("Aprendeu a ler, a tocar piano")).toHaveText(
    jsonData.description[2].text
  );
  await expect(
    page.getByText("O primeiro, com o título “Os Baloiços”,")
  ).toHaveText(jsonData.description[3].text);
  await expect(page.getByText("O segundo quadro, com o título")).toHaveText(
    jsonData.description[4].text
  );
  await expect(
    page.getByRole("img", { name: "Foto de Maria Helena Vieira" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Maria Helena Vieira da Silva" })
  ).toHaveText(jsonData.author.name);
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Parto da Viola", async ({ page }) => {
  const response = await page.request.get(
    "api/artworks/trou-de-la-serrure-amadeo-de-souza-cardoso"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page.getByRole("link", { name: "Parto da Viola" }).click();
  await expect(
    page.getByText("🎨 Artista: Amadeo de Souza-Cardoso")
  ).toBeVisible();
  await expect(
    page.getByText("🎨 Artista: Amadeo de Souza-Cardoso")
  ).toHaveText("🎨 Artista: " + jsonData.artist);
  await expect(page.getByText("📅 Ano: 1916")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: Portugal")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Modernismo,")).toBeVisible();
  await expect(page.getByText("🖌️ Técnica: Óleo sobre tela")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(page.getByText("🏛️ Localização: Museu do Chiado")).toHaveText(
    "🏛️ Localização: " + jsonData.location
  );
  await expect(page.getByText("💰 Primeira Venda: Desconhecido")).toHaveText(
    "💰 Primeira Venda: " + jsonData.pricehistory.firstSale
  );
  await expect(
    page.getByText("📈 Última Revenda: Último leilão conhecido")
  ).toHaveText("📈 Última Revenda: " + jsonData.pricehistory.resale);
  await expect(page.getByText('"A beleza deste quadro é')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("Esta obra é da autoria do pintor")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("O buraco da fechadura")).toHaveText(
    jsonData.description[1].text
  );
  await expect(page.getByText("A viola que aparece no quadro")).toHaveText(
    jsonData.description[2].text
  );
  await expect(
    page.getByText("A parte correspondente a 'boa casa' é ")
  ).toHaveText(jsonData.description[3].text);
  await expect(
    page.getByText("A parte correspondente ao 'morango vanguarda' é")
  ).toHaveText(jsonData.description[4].text);
  await page.getByText(
    "A beleza deste quadro é a quantidade de coisas que se podem experimentar.",
    { exact: true }
  );
  await expect(page.getByText("Amadeo de Souza-Cardoso era")).toHaveText(
    jsonData.description[6].text
  );
  await expect(page.getByText("Contudo, o pintor tinha outros")).toHaveText(
    jsonData.description[7].text
  );
  await expect(page.getByText("A parte mais triste desta análise")).toHaveText(
    jsonData.description[8].text
  );
  await expect(
    page.getByRole("img", { name: "Foto de Amadeo de Souza-" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Amadeo de Souza-Cardoso" })
  ).toHaveText(jsonData.author.name);
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Rapariga com brinco de pérola", async ({ page }) => {
  const response = await page.request.get(
    "api/artworks/vermeer-rapariga-com-brinco-de-perola"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("button", { name: "4" }).click();
  await page
    .getByRole("link", { name: "Rapariga com brinco de pérola" })
    .click();
  await expect(page.getByText("🎨 Artista: Johannes Vermeer")).toBeVisible();
  await expect(page.getByText("🎨 Artista: Johannes Vermeer")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: 1665")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: Holanda")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Barroco")).toHaveText(
    "🧩 Estilo: " + jsonData.styleArray
  );
  await expect(page.getByText("🖌️ Técnica: Óleo sobre tela")).toHaveText(
    "🖌️ Técnica:  " + jsonData.technique
  );
  await expect(page.getByText("🏛️ Localização: Mauritshuis")).toHaveText(
    "🏛️ Localização: " + jsonData.location
  );
  await expect(page.getByText("💰 Primeira Venda: 2 florins")).toHaveText(
    "💰 Primeira Venda: " + jsonData.pricehistory.firstSale
  );
  await expect(page.getByText("📈 Última Revenda: Valor")).toHaveText(
    "📈 Última Revenda: " + jsonData.pricehistory.resale
  );
  await expect(page.getByText('"O tempo parou, e ela')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("Este retrato é da autoria do")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("Um tronie não é bem um")).toHaveText(
    jsonData.description[1].text
  );
  await expect(page.getByText("Analisemos agora a Rapariga")).toHaveText(
    jsonData.description[2].text
  );
  await expect(page.getByText("Quando este quadro foi")).toHaveText(
    jsonData.description[3].text
  );
  await expect(page.getByText("Sobre a rapariga, ninguém")).toHaveText(
    jsonData.description[4].text
  );
  await expect(page.getByText("Esta obra é conhecida no")).toHaveText(
    jsonData.description[5].text
  );
  await expect(
    page.getByRole("img", { name: "Foto de Johannes Vermeer" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(page.getByRole("link", { name: "Johannes Vermeer" })).toHaveText(
    jsonData.author.name
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Tríptico Auto-retrato, Sonho e Família", async ({ page }) => {
  const response = await page.request.get(
    "api/artworks/triptico-auto-retrato-sonho-familia-paula-rego"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("button", { name: "4" }).click();
  await page
    .getByRole("link", { name: "Tríptico Auto-retrato, Sonho" })
    .click();
  await expect(page.getByText("🎨 Artista: Paula Rego")).toBeVisible();
  await expect(page.getByText("🎨 Artista: Paula Rego")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: Desconhecido")).toBeVisible();
  await expect(page.getByText("🌍 País de Origem: Portugal")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Expressionismo,")).toBeVisible();
  await expect(page.getByText("🖌️ Técnica: Óleo sobre tela")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(page.getByText("🏛️ Localização: Desconhecido")).toHaveText(
    "🏛️ Localização: " + jsonData.location
  );
  await expect(
    page.getByText("💰 Primeira Venda: Sem registros de venda pública.")
  ).toHaveText("💰 Primeira Venda: " + jsonData.pricehistory.firstSale);
  await expect(
    page.getByText("📈 Última Revenda: Sem registros de revenda conhecidos.")
  ).toHaveText("📈 Última Revenda: " + jsonData.pricehistory.resale);
  await expect(page.getByText('"Quando estava contente, os')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("Este tríptico é da autoria da")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("Aqui está a obra. É uma histó")).toHaveText(
    jsonData.description[1].text
  );
  await expect(
    page.getByRole("img", { name: "Imagem de Tríptico Auto-" }).first()
  ).toBeVisible();
  await expect(page.getByText("O segundo momento é o Sonho.")).toHaveText(
    jsonData.description[2].text
  );
  await expect(page.getByText("O terceiro momento é a Famí")).toHaveText(
    jsonData.description[3].text
  );
  await expect(
    page.getByRole("img", { name: "Imagem de Tríptico Auto-" }).nth(1)
  ).toBeVisible();
  await expect(page.getByText("Paula continuou a pintar o")).toHaveText(
    jsonData.description[4].text
  );
  await expect(
    page.getByRole("img", { name: "Foto de Paula Rego" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(page.getByRole("link", { name: "Paula Rego" })).toHaveText(
    jsonData.author.name
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Um Bar no Folies-Bergère", async ({ page }) => {
  const response = await page.request.get(
    "api/artworks/edouard-manet-folies-bergere"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("button", { name: "4" }).click();
  await page.getByRole("link", { name: "Um Bar no Folies-Bergère" }).click();
  await expect(page.getByText("🎨 Artista: Édouard Manet")).toBeVisible();
  await expect(page.getByText("🎨 Artista: Édouard Manet")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: 1882")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: França")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Impressionismo")).toHaveText(
    "🧩 Estilo: " + jsonData.styleArray
  );
  await expect(page.getByText("🖌️ Técnica: Óleo sobre tela")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(page.getByText("🏛️ Localização: Instituto de")).toHaveText(
    "🏛️ Localização: " + jsonData.location
  );
  await expect(page.getByText("💰 Primeira Venda: Nenhuma")).toHaveText(
    "💰 Primeira Venda: " + jsonData.pricehistory.firstSale
  );
  await expect(page.getByText("📈 Última Revenda: Nenhuma")).toHaveText(
    "📈 Última Revenda: " + jsonData.pricehistory.resale
  );
  await expect(page.getByText('"Eu pinto o que vejo e não o')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("Esta obra é da autoria do")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("Folies-Bergère é o nome de")).toHaveText(
    jsonData.description[1].text
  );
  await expect(page.getByText("A figura central no quadro é")).toHaveText(
    jsonData.description[2].text
  );
  await expect(page.getByText("Era um sítio onde todos se")).toHaveText(
    jsonData.description[3].text
  );
  await expect(
    page.getByRole("img", { name: "Foto de Édouard Manet" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(page.getByRole("link", { name: "Édouard Manet" })).toHaveText(
    jsonData.author.name
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Uma Tarde de Domingo na Ilha de Grande Jatte", async ({ page }) => {
  const response = await page.request.get(
    "api/artworks/seurat-la-grande-jatte"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("button", { name: "4" }).click();
  await page
    .getByRole("link", { name: "Uma Tarde de Domingo na Ilha" })
    .click();
  await expect(
    page.getByText("🎨 Artista: Georges-Pierre Seurat")
  ).toBeVisible();
  await expect(page.getByText("🎨 Artista: Georges-Pierre Seurat")).toHaveText(
    "🎨 Artista: " + jsonData.artist
  );
  await expect(page.getByText("📅 Ano: 1884")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: França")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Pós-Impressionismo")).toHaveText(
    "🧩 Estilo: " + jsonData.styleArray
  );
  await expect(page.getByText("🖌️ Técnica: Pontilhismo")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(page.getByText("🏛️ Localização: Art")).toHaveText(
    "🏛️ Localização: " + jsonData.location
  );
  await expect(page.getByText("💰 Primeira Venda: Nenhuma")).toHaveText(
    "💰 Primeira Venda: " + jsonData.pricehistory.firstSale
  );
  await expect(page.getByText("📈 Última Revenda: Adquirida")).toHaveText(
    "📈 Última Revenda: " + jsonData.pricehistory.resale
  );
  await expect(page.getByText('"A cor é o olho da pintura, o')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("Esta obra é da autoria do")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("Seurat nasceu em 1859, em")).toHaveText(
    jsonData.description[1].text
  );
  await expect(page.getByText("O pintor começou a estudar a")).toHaveText(
    jsonData.description[2].text
  );
  await expect(page.getByText("O vestido da senhora que")).toHaveText(
    jsonData.description[3].text
  );
  await expect(page.getByText("Por exemplo, muitas delas não")).toHaveText(
    jsonData.description[4].text
  );
  await expect(page.getByText("O casal à direita parece")).toHaveText(
    jsonData.description[5].text
  );
  await expect(page.getByText("Também há uma obra de Seurat")).toHaveText(
    jsonData.description[6].text
  );
  await expect(
    page.getByRole("img", { name: "Imagem de Uma Tarde de" })
  ).toBeVisible();
  await expect(page.getByText("Mostra um grupo de")).toHaveText(
    jsonData.description[7].text
  );
  await expect(
    page.getByRole("img", { name: "Foto de Georges-Pierre Seurat" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Georges-Pierre Seurat" })
  ).toHaveText(jsonData.author.name);
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Zé Povinho", async ({ page }) => {
  const response = await page.request.get(
    "api/artworks/ze-povinho-bordalo-pinheiro"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await page.getByRole("button", { name: "4" }).click();
  await page.getByRole("link", { name: "Zé Povinho" }).click();
  await expect(
    page.getByText("🎨 Artista: Rafael Bordalo Pinheiro")
  ).toBeVisible();
  await expect(
    page.getByText("🎨 Artista: Rafael Bordalo Pinheiro")
  ).toHaveText("🎨 Artista: " + jsonData.artist);
  await expect(page.getByText("📅 Ano: 1875")).toHaveText(
    "📅 Ano: " + jsonData.year
  );
  await expect(page.getByText("🌍 País de Origem: Portugal")).toHaveText(
    "🌍 País de Origem: " + jsonData.origin
  );
  await expect(page.getByText("🧩 Estilo: Caricatura, Sátira")).toBeVisible();
  await expect(page.getByText("🖌️ Técnica: Ilustração, Cerâ")).toHaveText(
    "🖌️ Técnica: " + jsonData.technique
  );
  await expect(page.getByText("🏛️ Localização: Museu")).toHaveText(
    "🏛️ Localização: " + jsonData.location
  );
  await expect(page.getByText("💰 Primeira Venda: 30 réis (~")).toHaveText(
    "💰 Primeira Venda: " + jsonData.pricehistory.firstSale
  );
  await expect(page.getByText("📈 Última Revenda: 6.700")).toHaveText(
    "📈 Última Revenda: " + jsonData.pricehistory.resale
  );
  await expect(page.getByText('"O povo é que manda no país,')).toContainText(
    jsonData.quote
  );
  await expect(page.getByText("O Zé Povinho foi inventado")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("Eis como ele é numa foto do Á")).toHaveText(
    jsonData.description[1].text
  );
  await expect(
    page.getByRole("img", { name: "Imagem de Zé Povinho" }).first()
  ).toBeVisible();
  await expect(page.getByText("Esta é a primeira caricatura")).toHaveText(
    jsonData.description[2].text
  );
  await expect(page.getByText("O Zé Povinho também era")).toHaveText(
    jsonData.description[3].text
  );
  await expect(
    page.getByRole("img", { name: "Imagem de Zé Povinho" }).nth(1)
  ).toBeVisible();
  await expect(page.getByText("Consegue-se ver que as")).toHaveText(
    jsonData.description[4].text
  );
  await expect(page.getByText("Além de suas caricaturas,")).toHaveText(
    jsonData.description[5].text
  );
  await expect(
    page.getByRole("img", { name: "Imagem de Zé Povinho" }).nth(2)
  ).toBeVisible();
  await expect(
    page.getByRole("img", { name: "Foto de Rafael Bordalo" })
  ).toBeVisible();
  await expect(page.getByText("Veja mais sobre o artista:")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Rafael Bordalo Pinheiro" })
  ).toHaveText(jsonData.author.name);
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});
