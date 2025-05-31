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
  let response = await page.request.get("api/artists/almada-negreiros");
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("link", { name: "Almada Negreiros Almada" }).click();
  await expect(
    page.getByText("Nome completo: José Sobral de Almada Negreiros")
  ).toBeVisible();
  await expect(page.getByText("José Sobral")).toHaveText(
    "Nome completo: " + jsonData.fullName
  );
  await expect(page.getByText("Nascimento: 7 de abril de")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 15 de junho de")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Portuguesa")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(
    page.getByText("Movimentos:ModernismoFuturismoAbstracionismo")
  ).toHaveText(
    "Movimentos:" +
      jsonData.movements[0] +
      jsonData.movements[1] +
      jsonData.movements[2]
  );
  await expect(page.getByText("Ocupações: Pintor, Escritor,")).toHaveText(
    "Ocupações: " +
      jsonData.occupations[0] +
      ", " +
      jsonData.occupations[1] +
      ", " +
      jsonData.occupations[2] +
      ", " +
      jsonData.occupations[3]
  );
  await expect(page.getByText("José de Almada Negreiros foi")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Além de ser um artista plá")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(
    page.getByRole("img", { name: "Imagem 2 sobre Almada" })
  ).toBeVisible();
  await expect(page.getByText("A sua obra inclui murais,")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Fernando Pessoa Fernando" })
  ).toHaveText(jsonData.artworks[0].title);
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Amadeo de Souza-Cardoso", async ({ page }) => {
  const response = await page.request.get(
    "api/artists/amadeo-de-souza-cardoso"
  );
  const jsonData = await response.json();
  console.log(jsonData);
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("link", { name: "Amadeo de Souza-Cardoso" }).click();
  await expect(
    page.getByText("Nome completo: Amadeo de Souza-Cardoso")
  ).toBeVisible();
  await expect(page.getByText("Nome completo: Amadeo de")).toHaveText(
    "Nome completo: " + jsonData.fullName
  );
  await expect(page.getByText("Nascimento: 14 de novembro de")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 25 de outubro de")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Portuguesa")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(
    page.getByText("Movimentos:ModernismoCubismoFuturismo")
  ).toHaveText(
    "Movimentos:" +
      jsonData.movements[0] +
      jsonData.movements[1] +
      jsonData.movements[2]
  );
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: " + jsonData.occupations
  );
  await expect(page.getByText("Amadeo de Souza-Cardoso foi")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Após iniciar estudos de")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("Amadeo conviveu com artistas")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(
    page.getByRole("img", { name: "Imagem 3 sobre Amadeo de" })
  ).toBeVisible();
  await expect(page.getByText("Em 1916, realizou exposições")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(page.getByText("Infelizmente, sua carreira")).toHaveText(
    jsonData.bio[4].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Parto da Viola Parto da Viola" })
  ).toHaveText(jsonData.artworks[0].title);
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Caspar David Friedrich", async ({ page }) => {
  const response = await page.request.get("api/artists/caspar-david-friedrich");
  const jsonData = await response.json();
  console.log(jsonData);
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page
    .getByRole("link", { name: "Caspar David Friedrich Caspar" })
    .click();
  await expect(
    page.getByText("Nome completo: Caspar David Friedrich")
  ).toBeVisible();
  await expect(page.getByText("Nome completo: Caspar David")).toHaveText(
    "Nome completo: " + jsonData.fullName
  );
  await expect(page.getByText("Nascimento: 5 de setembro de")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 7 de maio de")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Alemã")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(page.getByText("Movimentos:Romantismo")).toHaveText(
    "Movimentos:" + jsonData.movements
  );
  await expect(page.getByText("Caspar David Friedrich foi um")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Nascido em Greifswald,")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("Sua obra mais icônica, '")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(page.getByText("Embora tenha sido")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Caminhante Sobre o Mar de Né" })
  ).toHaveText(jsonData.artworks[0].title);
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Cândido Portinari", async ({ page }) => {
  const response = await page.request.get("api/artists/candido-portinari");
  const jsonData = await response.json();
  console.log(jsonData);
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("link", { name: "Cândido Portinari Cândido" }).click();
  await expect(
    page.getByText("Nome completo: Cândido Torquato Portinari")
  ).toBeVisible();
  await expect(page.getByText("Nome completo: Cândido")).toHaveText(
    "Nome completo: " + jsonData.fullName
  );
  await expect(page.getByText("Nascimento: 29 de dezembro de")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 6 de fevereiro de")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Brasileira")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(page.getByText("Movimentos:ModernismoRealismo")).toHaveText(
    "Movimentos:" + jsonData.movements[0] + jsonData.movements[1]
  );
  await expect(page.getByText("Ocupações: Pintor, Muralista")).toHaveText(
    "Ocupações: " + jsonData.occupations[0] + ", " + jsonData.occupations[1]
  );
  await expect(page.getByText("Cândido Portinari foi um dos")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Nascido em uma fazenda de caf")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("Seus trabalhos retrataram a")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(
    page.getByRole("img", { name: "Imagem 3 sobre Cândido" })
  ).toBeVisible();
  await expect(page.getByText("Além da pintura, Portinari")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "O Lavrador de Café O Lavrador" })
  ).toHaveText(jsonData.artworks[0].title);
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Diego Velázquez", async ({ page }) => {
  const response = await page.request.get("api/artists/diego-velazquez");
  const jsonData = await response.json();
  console.log(jsonData);
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("link", { name: "Diego Velázquez Diego Velá" }).click();
  await expect(
    page.getByText("Nome completo: Diego Rodríguez de Silva y Velázquez")
  ).toBeVisible();
  await expect(page.getByText("Nome completo: Diego Rodrí")).toHaveText(
    "Nome completo: " + jsonData.fullName
  );
  await expect(page.getByText("Nascimento: 6 de junho de")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 6 de agosto de")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Espanhola")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(page.getByText("Movimentos:Barroco")).toHaveText(
    "Movimentos:" + jsonData.movements
  );
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: " + jsonData.occupations
  );
  await expect(page.getByText("Diego Velázquez foi um dos")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Nascido em Sevilha, Velázquez")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("Entre suas obras mais icô")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(page.getByText("Seu legado influenciou geraçõ")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "As Meninas As Meninas" })
  ).toHaveText(jsonData.artworks[0].title);
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Edvard Munch", async ({ page }) => {
  const response = await page.request.get("api/artists/edvard-munch");
  const jsonData = await response.json();
  console.log(jsonData);
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("link", { name: "Edvard Munch Edvard Munch" }).click();
  await expect(page.getByText("Nome completo: Edvard Munch")).toBeVisible();
  await expect(page.getByText("Nome completo: Edvard Munch")).toHaveText(
    "Nome completo: " + jsonData.fullName
  );
  await expect(page.getByText("Nascimento: 12 de dezembro de")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 23 de janeiro de")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Norueguesa")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(
    page.getByText("Movimentos:ExpressionismoSimbolismo")
  ).toHaveText("Movimentos:" + jsonData.movements[0] + jsonData.movements[1]);
  await expect(page.getByText("Ocupações: Pintor, Gravurista")).toHaveText(
    "Ocupações: " + jsonData.occupations[0] + ", " + jsonData.occupations[1]
  );
  await expect(page.getByText("Edvard Munch foi um dos")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Nascido em Løten, Noruega,")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("Sua obra mais célebre, 'O")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(page.getByText("Sua influência foi decisiva")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "O Grito O Grito" })).toHaveText(
    jsonData.artworks[0].title
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Eugène Delacroix", async ({ page }) => {
  const response = await page.request.get("api/artists/eugene-delacroix");
  const jsonData = await response.json();
  console.log(jsonData);
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
    "Nome completo: " + jsonData.fullName
  );
  await expect(page.getByText("Nascimento: 26 de abril de")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 13 de agosto de")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Francesa")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(page.getByText("Movimentos:Romantismo")).toHaveText(
    "Movimentos:" + jsonData.movements
  );
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: " + jsonData.occupations
  );
  await expect(page.getByText("Eugène Delacroix foi um dos")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Delacroix estudou na Escola")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("Entre suas obras mais cé")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(page.getByText("Delacroix influenciou")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "A Liberdade guiando o povo A" })
  ).toHaveText(jsonData.artworks[0].title);
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Georges-Pierre Seurat", async ({ page }) => {
  const response = await page.request.get("api/artists/georges-pierre-seurat");
  const jsonData = await response.json();
  console.log(jsonData);
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page
    .getByRole("link", { name: "Georges-Pierre Seurat Georges" })
    .click();
  await expect(
    page.getByText("Nome completo: Georges-Pierre Seurat")
  ).toBeVisible();
  await expect(page.getByText("Nome completo: Georges-Pierre")).toHaveText(
    "Nome completo: " + jsonData.fullName
  );
  await expect(page.getByText("Nascimento: 2 de dezembro de")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 29 de março de")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Francesa")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(
    page.getByText("Movimentos:NeoimpressionismoPontilhismo")
  ).toHaveText("Movimentos:" + jsonData.movements[0] + jsonData.movements[1]);
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: " + jsonData.occupations
  );
  await expect(page.getByText("Georges-Pierre Seurat foi o")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Nascido em Paris, Seurat")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("Sua obra-prima, 'Tarde de")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(page.getByText("Apesar de sua morte precoce,")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Uma Tarde de Domingo na Ilha" })
  ).toHaveText(jsonData.artworks[0].title);
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Gustav Klimt", async ({ page }) => {
  const response = await page.request.get("api/artists/gustav-klimt");
  const jsonData = await response.json();
  console.log(jsonData);
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("link", { name: "Gustav Klimt Gustav Klimt" }).click();
  await expect(page.getByText("Nome completo: Gustav Klimt")).toBeVisible();
  await expect(page.getByText("Nome completo: Gustav Klimt")).toHaveText(
    "Nome completo: " + jsonData.fullName
  );
  await expect(page.getByText("Nascimento: 14 de julho de")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 6 de fevereiro de")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Austríaca")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(page.getByText("Movimentos:SimbolismoArt")).toHaveText(
    "Movimentos:" + jsonData.movements[0] + jsonData.movements[1]
  );
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: " + jsonData.occupations
  );
  await expect(page.getByText("Gustav Klimt foi um dos")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Nascido em Baumgarten, perto")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("Suas obras mais icônicas,")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(page.getByText("Klimt teve grande")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "O Beijo O Beijo" })).toHaveText(
    jsonData.artworks[0].title
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Henri Rousseau", async ({ page }) => {
  const response = await page.request.get("api/artists/henri-rousseau");
  const jsonData = await response.json();
  console.log(jsonData);
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page
    .getByRole("link", { name: "Henri Rousseau Henri Rousseau" })
    .click();
  await expect(page.getByText("Nome completo: Henri Rousseau")).toBeVisible();
  await expect(page.getByText("Nome completo: Henri Rousseau")).toHaveText(
    "Nome completo: " + jsonData.fullName
  );
  await expect(page.getByText("Nascimento: 21 de maio de")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 2 de setembro de")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Francesa")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(page.getByText("Movimentos:NaïfPrimitivismo")).toHaveText(
    "Movimentos:" + jsonData.movements[0] + jsonData.movements[1]
  );
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: " + jsonData.occupations
  );
  await expect(page.getByText("Henri Rousseau, também")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Nascido em Laval, França,")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("Suas obras mais conhecidas,")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(page.getByText("Inicialmente ridicularizado,")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "O Sonho O Sonho" })).toHaveText(
    jsonData.artworks[0].title
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Jan van Eyck", async ({ page }) => {
  const response = await page.request.get("api/artists/jan-van-eyck");
  const jsonData = await response.json();
  console.log(jsonData);
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page
    .getByRole("link", { name: "Jan van Eyck Jan van Eyck Jan" })
    .click();
  await expect(page.getByText("Nome completo: Jan van Eyck")).toBeVisible();
  await expect(page.getByText("Nome completo: Jan van Eyck")).toHaveText(
    "Nome completo: " + jsonData.fullName
  );
  await expect(page.getByText("Nascimento: c.")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 9 de julho de")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Flamenga")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(page.getByText("Movimentos:Renascimento do")).toHaveText(
    "Movimentos:" + jsonData.movements
  );
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: " + jsonData.occupations
  );
  await expect(page.getByText("Jan van Eyck foi um dos")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Provavelmente nascido em")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("Sua obra mais famosa, 'O")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(page.getByText("Van Eyck teve um papel")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "O Casal Arnolfini O Casal" })
  ).toHaveText(jsonData.artworks[0].title);
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Johannes Vermeer", async ({ page }) => {
  const response = await page.request.get("api/artists/johannes-vermeer");
  const jsonData = await response.json();
  console.log(jsonData);
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("link", { name: "Johannes Vermeer Johannes" }).click();
  await expect(page.getByText("Nome completo: Johannes Vermeer")).toBeVisible();
  await expect(page.getByText("Nome completo: Johannes Vermeer")).toHaveText(
    "Nome completo: " + jsonData.fullName
  );
  await expect(page.getByText("Nascimento: 31 de outubro")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 15 de dezembro")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Holandesa")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(page.getByText("Movimentos:BarrocoIdade")).toHaveText(
    "Movimentos:" + jsonData.movements[0] + jsonData.movements[1]
  );
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: " + jsonData.occupations
  );
  await expect(page.getByText("Johannes Vermeer foi um dos mais")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Vermeer viveu e trab")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("Apesar de sua genialidade, ")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(page.getByText("Entre suas obras mais icônicas")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(page.getByText("Após sua morte, Vermeer pe")).toHaveText(
    jsonData.bio[4].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Rapariga com brinco de pérola" })
  ).toHaveText(jsonData.artworks[0].title);
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Kazimir Malevich", async ({ page }) => {
  const response = await page.request.get("api/artists/kazimir-malevich");
  const jsonData = await response.json();
  console.log(jsonData);
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page.getByRole("link", { name: "Kazimir Malevich Kazimir" }).click();
  await expect(
    page.getByText("Nome completo: Kazimir Severinovich Malevich")
  ).toBeVisible();
  await expect(page.getByText("Nome completo: Kazimir")).toHaveText(
    "Nome completo: " + jsonData.fullName
  );
  await expect(page.getByText("Nascimento: 23 de fevereiro")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 15 de maio")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Russa")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(page.getByText("Movimentos:SuprematismoAbs")).toHaveText(
    "Movimentos:" + jsonData.movements[0] + jsonData.movements[1]
  );
  await expect(page.getByText("Ocupações: Pintor, Teórico")).toHaveText(
    "Ocupações: " + jsonData.occupations[0] + ", " + jsonData.occupations[1]
  );
  await expect(page.getByText("Kazimir Malevich foi um dos")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Nascido no Império Russo")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(
    page.getByText("Seu trabalho teórico e suas pinturas ")
  ).toHaveText(jsonData.bio[2].text);
  await expect(page.getByText("Malevich enfrentou perseguições")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "O Suprematismo" })).toHaveText(
    jsonData.artworks[0].title
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Leonardo da Vinci", async ({ page }) => {
  const response = await page.request.get("api/artists/leonardo-da-vinci");
  const jsonData = await response.json();
  console.log(jsonData);
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
  ).toHaveText("Nome completo: " + jsonData.fullName);
  await expect(page.getByText("Nascimento: 15 de abril")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 2 de maio")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Italiana")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(page.getByText("Movimentos:Renascimento")).toHaveText(
    "Movimentos:" + jsonData.movements
  );
  await expect(page.getByText("Ocupações: Pintor, Escultor")).toHaveText(
    "Ocupações: " +
      jsonData.occupations[0] +
      ", " +
      jsonData.occupations[1] +
      ", " +
      jsonData.occupations[2] +
      ", " +
      jsonData.occupations[3] +
      ", " +
      jsonData.occupations[4]
  );
  await expect(page.getByText("Leonardo da Vinci foi um")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Seu talento como pintor")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("Entre seus inúmeros estudos")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(
    page.getByRole("img", { name: "Imagem 3 sobre Leonardo da" })
  ).toBeVisible();
  await expect(page.getByText("Leonardo também foi um visionário")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(
    page.getByRole("img", { name: "Imagem 4 sobre Leonardo da" })
  ).toBeVisible();
  await expect(page.getByText("Seu legado continua")).toHaveText(
    jsonData.bio[4].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Mona Lisa" })).toHaveText(
    jsonData.artworks[0].title
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Maria Helena Vieira da Silva", async ({ page }) => {
  const response = await page.request.get("api/artists/vieira-da-silva");
  const jsonData = await response.json();
  console.log(jsonData);
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
  ).toHaveText("Nome completo: " + jsonData.fullName);
  await expect(page.getByText("Nascimento: 13 de junho")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 6 de março")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Portuguesa")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(page.getByText("Movimentos:AbstracionismoExp")).toHaveText(
    "Movimentos:" + jsonData.movements[0] + jsonData.movements[1]
  );
  await expect(page.getByText("Ocupações: Pintora")).toHaveText(
    "Ocupações: " + jsonData.occupations
  );
  await expect(page.getByText("Maria Helena Vieira da Silva foi")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Nascida em Lisboa, mudou-se")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("Durante a Segunda Guerra")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(
    page.getByRole("img", { name: "Imagem 3 sobre Maria Helena" })
  ).toBeVisible();
  await expect(page.getByText("Vieira da Silva recebeu")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Os Baloiços e" })).toHaveText(
    jsonData.artworks[0].title
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Maria Keil", async ({ page }) => {
  const response = await page.request.get("api/artists/maria-keil");
  const jsonData = await response.json();
  console.log(jsonData);
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page.getByRole("link", { name: "Maria Keil" }).click();
  await expect(page.getByText("Nome completo: Maria Keil")).toBeVisible();
  await expect(page.getByText("Nome completo: Maria Keil")).toHaveText(
    "Nome completo: " + jsonData.fullName
  );
  await expect(page.getByText("Nascimento: 9 de agosto")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 10 de junho")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Portuguesa")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(page.getByText("Movimentos:Modernismo")).toHaveText(
    "Movimentos:" + jsonData.movements
  );
  await expect(page.getByText("Ocupações: Pintora, Ilustradora")).toHaveText(
    "Ocupações: " +
      jsonData.occupations[0] +
      ", " +
      jsonData.occupations[1] +
      ", " +
      jsonData.occupations[2] +
      ", " +
      jsonData.occupations[3]
  );
  await expect(page.getByText("Maria Keil foi")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Nascida em Silves, Maria")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("É especialmente lembrada")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(page.getByText("Além da azulejaria, Maria Keil")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "O Mar" })).toHaveText(
    jsonData.artworks[0].title
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Paul Cézanne", async ({ page }) => {
  const response = await page.request.get("api/artists/paul-cezanne");
  const jsonData = await response.json();
  console.log(jsonData);
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page.getByRole("link", { name: "Paul Cézanne" }).click();
  await expect(page.getByText("Nome completo: Paul Cézanne")).toBeVisible();
  await expect(page.getByText("Nome completo: Paul Cézanne")).toHaveText(
    "Nome completo: " + jsonData.fullName
  );
  await expect(page.getByText("Nascimento: 19 de janeiro")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 22 de outubro")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Francesa")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(page.getByText("Movimentos:Pós-Impressionismo")).toHaveText(
    "Movimentos:" + jsonData.movements
  );
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: " + jsonData.occupations
  );
  await expect(page.getByText("Paul Cézanne foi um")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Nascido em Aix-en-Provence")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("Seus estudos sobre volume")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(
    page.getByText("Embora tenha sido pouco reconhecido")
  ).toHaveText(jsonData.bio[3].text);
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "As Banhistas" })).toHaveText(
    jsonData.artworks[0].title
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Paula Rego", async ({ page }) => {
  const response = await page.request.get("api/artists/paula-rego");
  const jsonData = await response.json();
  console.log(jsonData);
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page.getByRole("link", { name: "Paula Rego" }).click();
  await expect(
    page.getByText("Nome completo: Dame Maria Paula Figueiroa Rego")
  ).toBeVisible();
  await expect(page.getByText("Nome completo: Dame Maria Paula")).toHaveText(
    "Nome completo: " + jsonData.fullName
  );
  await expect(page.getByText("Nascimento: 26 de janeiro")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 8 de junho")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Portuguesa")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(page.getByText("Movimentos:Expressionismo")).toHaveText(
    "Movimentos:" +
      jsonData.movements[0] +
      jsonData.movements[1] +
      jsonData.movements[2]
  );
  await expect(page.getByText("Ocupações: Pintora, Gravurista")).toHaveText(
    "Ocupações: " + jsonData.occupations[0] + ", " + jsonData.occupations[1]
  );
  await expect(page.getByText("Paula Rego foi uma das")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Nascida em Lisboa,")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("Suas obras frequentemente")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(
    page.getByRole("img", { name: "Imagem 3 sobre Paula Rego" })
  ).toBeVisible();
  await expect(page.getByText("Ao longo da sua carreira,")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Tríptico Auto-retrato" })
  ).toHaveText(jsonData.artworks[0].title);
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Piet Mondrian", async ({ page }) => {
  const response = await page.request.get("api/artists/piet-mondrian");
  const jsonData = await response.json();
  console.log(jsonData);
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "4" }).click();
  await page.getByRole("link", { name: "Piet Mondrian" }).click();
  await expect(
    page.getByText("Nome completo: Pieter Cornelis Mondrian")
  ).toBeVisible();
  await expect(page.getByText("Nome completo: Pieter Cornelis")).toHaveText(
    "Nome completo: " + jsonData.fullName
  );
  await expect(page.getByText("Nascimento: 7 de março")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 1 de fevereiro")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Holandesa")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(page.getByText("Movimentos:NeoplasticismoAbs")).toHaveText(
    "Movimentos:" + jsonData.movements[0] + jsonData.movements[1]
  );
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: " + jsonData.occupations
  );
  await expect(page.getByText("Piet Mondrian foi um pintor")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Entre 1905 e 1911")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("Em 1917, junto com Theo")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(page.getByText("Mondrian viveu em Paris")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(page.getByText("Seu impacto vai além da pintura")).toHaveText(
    jsonData.bio[4].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Composição com" })).toHaveText(
    jsonData.artworks[0].title
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Rafael Bordalo Pinheiro", async ({ page }) => {
  const response = await page.request.get(
    "api/artists/rafael-bordalo-pinheiro"
  );
  const jsonData = await response.json();
  console.log(jsonData);
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "4" }).click();
  await page.getByRole("link", { name: "Rafael Bordalo Pinheiro" }).click();
  await expect(
    page.getByText("Nome completo: Rafael Augusto Prostes Bordalo Pinheiro")
  ).toBeVisible();
  await expect(
    page.getByText("Nome completo: Rafael Augusto Prostes")
  ).toHaveText("Nome completo: " + jsonData.fullName);
  await expect(page.getByText("Nascimento: 21 de março")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 23 de janeiro")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Portuguesa")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(page.getByText("Movimentos:NaturalismoCar")).toHaveText(
    "Movimentos:" +
      jsonData.movements[0] +
      jsonData.movements[1] +
      jsonData.movements[2]
  );
  await expect(page.getByText("Ocupações: Desenhador, Cer")).toHaveText(
    "Ocupações: " +
      jsonData.occupations[0] +
      ", " +
      jsonData.occupations[1] +
      ", " +
      jsonData.occupations[2] +
      ", " +
      jsonData.occupations[3]
  );
  await expect(page.getByText("Rafael Bordalo Pinheiro foi um")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(
    page.getByRole("img", { name: "Imagem 1 sobre Rafael Bordalo" })
  ).toBeVisible();
  await expect(page.getByText("Filho do pintor Manuel Maria")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(
    page.getByText("Uma das suas criações mais icónicas")
  ).toHaveText(jsonData.bio[2].text);
  await expect(page.getByText("Além da caricatura, dedicou-se")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(page.getByText("Rafael Bordalo Pinheiro faleceu")).toHaveText(
    jsonData.bio[4].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Zé Povinho" })).toHaveText(
    jsonData.artworks[0].title
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Vincent van Gogh", async ({ page }) => {
  const response = await page.request.get("api/artists/vincent-van-gogh");
  const jsonData = await response.json();
  console.log(jsonData);
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
  ).toBeVisible();
  await expect(
    page.getByText("Nome completo: Vincent Willem van Gogh")
  ).toHaveText("Nome completo: " + jsonData.fullName);
  await expect(page.getByText("Nascimento: 30 de março")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 29 de julho")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Holandesa")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(page.getByText("Movimentos:Pós-Impressionismo")).toHaveText(
    "Movimentos:" + jsonData.movements
  );
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: " + jsonData.occupations
  );
  await expect(page.getByText("Vincent van Gogh foi")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Nascido na Holanda, Van")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("Ao longo de sua carreira, ")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(page.getByText("Apesar de não ter alcançado")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Noite Estrelada" })).toHaveText(
    jsonData.artworks[0].title
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Wassily Kandinsky", async ({ page }) => {
  const response = await page.request.get("api/artists/wassily-kandinsky");
  const jsonData = await response.json();
  console.log(jsonData);
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "4" }).click();
  await page.getByRole("link", { name: "Wassily Kandinsky" }).click();
  await expect(
    page.getByText("Nome completo: Wassily Kandinsky")
  ).toBeVisible();
  await expect(page.getByText("Nome completo: Wassily Kandinsky")).toHaveText(
    "Nome completo: " + jsonData.fullName
  );
  await expect(page.getByText("Nascimento: 16 de dezembro")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 13 de dezembro")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Russa")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(page.getByText("Movimentos:ExpressionismoAbstr")).toHaveText(
    "Movimentos:" + jsonData.movements[0] + jsonData.movements[1]
  );
  await expect(page.getByText("Ocupações: Pintor, Teórico")).toHaveText(
    "Ocupações: " + jsonData.occupations[0] + ", " + jsonData.occupations[1]
  );
  await expect(page.getByText("Wassily Kandinsky foi um dos")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Nascido em Moscovo, Kan")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("Obras como 'Composição 8' ex")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(page.getByText("Kandinsky também foi um")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Composição 8" })).toHaveText(
    jsonData.artworks[0].title
  );
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});

test("Édouard Manet", async ({ page }) => {
  const response = await page.request.get("api/artists/edouard-manet");
  const jsonData = await response.json();
  console.log(jsonData);
  await page.goto(" ");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
  await page.getByRole("button", { name: "4" }).click();
  await page.getByRole("link", { name: "Édouard Manet" }).click();
  await expect(page.getByText("Nome completo: Édouard Manet")).toBeVisible();
  await expect(page.getByText("Nome completo: Édouard Manet")).toHaveText(
    "Nome completo: " + jsonData.fullName
  );
  await expect(page.getByText("Nascimento: 23 de janeiro")).toHaveText(
    "Nascimento: " + jsonData.birthDate
  );
  await expect(page.getByText("Falecimento: 30 de abril")).toHaveText(
    "Falecimento: " + jsonData.deathDate
  );
  await expect(page.getByText("Nacionalidade: Francesa")).toHaveText(
    "Nacionalidade: " + jsonData.nationality
  );
  await expect(page.getByText("Movimentos:RealismoImpre")).toHaveText(
    "Movimentos:" + jsonData.movements[0] + jsonData.movements[1]
  );
  await expect(page.getByText("Ocupações: Pintor")).toHaveText(
    "Ocupações: " + jsonData.occupations
  );
  await expect(page.getByText("Édouard Manet foi uma f")).toHaveText(
    jsonData.bio[0].text
  );
  await expect(page.getByText("Nascido em Paris, Manet")).toHaveText(
    jsonData.bio[1].text
  );
  await expect(page.getByText("Obras como 'Olympia' e")).toHaveText(
    jsonData.bio[2].text
  );
  await expect(page.getByText("Apesar de ter enfrentado críticas")).toHaveText(
    jsonData.bio[3].text
  );
  await expect(
    page.getByRole("heading", { name: "Obras conhecidas" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Um Bar no Folies-Bergère" })
  ).toHaveText(jsonData.artworks[0].title);
  await expect(
    page.getByRole("link", { name: "Voltar para Artistas" })
  ).toBeVisible();
});
