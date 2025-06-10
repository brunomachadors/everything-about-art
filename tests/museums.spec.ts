import { test, expect } from "@playwright/test";

test("Search museum", async ({ page }) => {
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar museu..." })
  ).toBeVisible();
  await page.getByRole("textbox", { name: "Buscar museu..." }).fill("louvre");
  await expect(
    page.getByRole("link", { name: "Museu do Louvre" })
  ).toBeVisible();
});

test("Art Institute of Chicago", async ({ page }) => {
  const response = await page.request.get("api/location/art-institute-chicago");
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await page.getByRole("link", { name: "Art Institute of Chicago" }).click();
  await expect(
    page.getByText("📍 Localização: Chicago, Estados Unidos")
  ).toHaveText("📍 Localização: " + jsonData.city + ", " + jsonData.country);
  await expect(page.getByText("📬 Endereço: 111 South")).toHaveText(
    "📬 Endereço: " + jsonData.address
  );
  await expect(page.getByText("🛎️ Serviços:Visitas")).toHaveText(
    "🛎️ Serviços:" +
      jsonData.pricePolicy.servicos[0] +
      jsonData.pricePolicy.servicos[1] +
      jsonData.pricePolicy.servicos[2]
  );
  await expect(page.getByText("💰 Entrada Geral:")).toBeVisible();
  await expect(page.getByText("Adultos: $")).toContainText(
    jsonData.pricePolicy.entradaGeral.adultos
  );
  await expect(page.getByText("Membros: Entrada gratuita")).toContainText(
    jsonData.pricePolicy.entradaGeral.membros
  );
  await expect(
    page.getByText("Residentes De Chicago: Descontos")
  ).toContainText(jsonData.pricePolicy.entradaGeral.residentesDeChicago);
  await expect(
    page.getByText("Residentes De Illinois: Gratuito")
  ).toContainText(jsonData.pricePolicy.entradaGeral.residentesDeIllinois);
  await expect(
    page.getByText("Criancas Menores De 14 Anos: Gratuito")
  ).toContainText(jsonData.pricePolicy.entradaGeral.criancasMenoresDe14Anos);
  await expect(
    page.getByText("Estudantes EMaiores De 65 Anos: $")
  ).toContainText(jsonData.pricePolicy.entradaGeral.estudantesEMaioresDe65Anos);
  await expect(page.getByText("Fundado em 1879, o Art Institute")).toHaveText(
    jsonData.description[0].text
  );
  await expect(
    page.getByText("A pintura La Grande Jatte, concluída")
  ).toHaveText(jsonData.description[1].text);
  await expect(page.getByText("Curiosidades:")).toBeVisible();
  await expect(page.getByText("Seurat usou mais de dois milhões")).toHaveText(
    jsonData.description[2].items[0]
  );
  await expect(page.getByText("A pintura foi exibida pela")).toHaveText(
    jsonData.description[2].items[1]
  );
  await expect(page.getByText("É considerada uma das")).toHaveText(
    jsonData.description[2].items[2]
  );
  await expect(page.getByText("A obra é uma das mais visitadas")).toHaveText(
    jsonData.description[2].items[3]
  );
  await expect(page.getByText("O Art Institute of Chicago possui")).toHaveText(
    jsonData.description[2].items[4]
  );
  await expect(
    page.getByRole("img", { name: "Imagem 4 de Art Institute of" })
  ).toBeVisible();
  await expect(page.getByText("Fachada neoclássica")).toHaveText(
    jsonData.description[3].caption
  );
  await expect(
    page.getByRole("img", { name: "Imagem 5 de Art Institute of" })
  ).toBeVisible();
  await expect(page.getByText("Galeria dedicada ao")).toHaveText(
    jsonData.description[4].caption
  );
  await expect(
    page.getByRole("heading", { name: "🖼️ Obras em exibição" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Uma Tarde de Domingo na Ilha" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Museus" })
  ).toBeVisible();
});
test("Fundação Arpad Szenes – Vieira da Silva", async ({ page }) => {
  const response = await page.request.get(
    "api/location/fundacao-arpad-szenes-vieira-da-silva"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await page.getByRole("link", { name: "Fundação Arpad Szenes" }).click();
  await expect(page.getByText("📍 Localização: Lisboa, Portugal")).toHaveText(
    "📍 Localização: " + jsonData.city + ", " + jsonData.country
  );
  await expect(page.getByText("📬 Endereço: Praça das Amoreiras")).toHaveText(
    "📬 Endereço: " + jsonData.address
  );
  await expect(page.getByText("💰 Entrada Geral:")).toBeVisible();
  await expect(page.getByText("Adultos: €5")).toContainText(
    jsonData.pricePolicy.entradaGeral.adultos
  );
  await expect(page.getByText("Visitas Guiadas: Disponíveis")).toContainText(
    jsonData.pricePolicy.entradaGeral.visitasGuiadas
  );
  await expect(page.getByText("Menores De 12 Anos: Gratuito")).toContainText(
    jsonData.pricePolicy.entradaGeral.menoresDe12Anos
  );
  await expect(page.getByText("Bilhetes Conjuntos: Disponíveis")).toContainText(
    jsonData.pricePolicy.entradaGeral.bilhetesConjuntos
  );
  await expect(
    page.getByText("Residentes Em Portugal: Gratuito em")
  ).toContainText(jsonData.pricePolicy.entradaGeral.residentesEmPortugal);
  await expect(
    page.getByText("Estudantes Maiores De 65 Anos: €2,50")
  ).toContainText(jsonData.pricePolicy.entradaGeral.estudantesMaioresDe65Anos);
  await expect(page.getByText("A Fundação Arpad Szenes")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("Curiosidades:")).toBeVisible();
  await expect(page.getByText("A Fundação apresenta um núcleo")).toHaveText(
    jsonData.description[1].items[0]
  );
  await expect(
    page.getByText("Os Baloiços e A Árvore na Prisão refletem dois")
  ).toHaveText(jsonData.description[1].items[1]);
  await expect(page.getByText("O edifício do museu, recuperado")).toHaveText(
    jsonData.description[1].items[2]
  );
  await expect(
    page.getByText("A Fundação também dinamiza oficinas")
  ).toHaveText(jsonData.description[1].items[3]);
  await expect(
    page.getByRole("img", { name: "Imagem 3 de Fundação Arpad" })
  ).toBeVisible();
  await expect(page.getByText("Fachada em pedra com azulejos")).toHaveText(
    jsonData.description[2].caption
  );
  await expect(
    page.getByRole("img", { name: "Imagem 4 de Fundação Arpad" })
  ).toBeVisible();
  await expect(page.getByText("Sala com obras de grande")).toHaveText(
    jsonData.description[3].caption
  );
  await expect(
    page.getByRole("heading", { name: "🖼️ Obras em exibição" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Os Baloiços e A Árvore na" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Museus" })
  ).toBeVisible();
});
test("Fundação Calouste Gulbenkian", async ({ page }) => {
  const response = await page.request.get(
    "api/location/fundacao-calouste-gulbenkian"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await page
    .getByRole("link", { name: "Fundação Calouste Gulbenkian" })
    .click();
  await expect(page.getByText("📍 Localização: Lisboa, Portugal")).toHaveText(
    "📍 Localização: " + jsonData.city + ", " + jsonData.country
  );
  await expect(page.getByText("📬 Endereço: Av. de Berna 45A")).toHaveText(
    "📬 Endereço: " + jsonData.address
  );
  await expect(page.getByText("🛎️ Serviços:")).toBeVisible();
  await expect(page.getByText("Jardins abertos ao público")).toHaveText(
    jsonData.pricePolicy.servicos[0]
  );
  await expect(page.getByText("Entrada gratuita ao museu em ")).toHaveText(
    jsonData.pricePolicy.servicos[1]
  );
  await expect(page.getByText("Programação de concertos")).toHaveText(
    jsonData.pricePolicy.servicos[2]
  );
  await expect(page.getByText("Visitas guiadas mediante")).toHaveText(
    jsonData.pricePolicy.servicos[3]
  );
  await expect(page.getByText("💰 Entrada Geral:")).toBeVisible();
  await expect(page.getByText("Valor: Gratuita (áreas pú")).toHaveText(
    "Valor: " + jsonData.pricePolicy.entradaGeral.valor
  );
  await expect(page.getByText("Exposições Temporárias: Pagas")).toBeVisible();
  await expect(page.getByText("A Fundação Calouste Gulbenkian,")).toHaveText(
    jsonData.description[0].text
  );
  await expect(page.getByText("Entre as obras em exibição,")).toHaveText(
    jsonData.description[1].text
  );
  await expect(page.getByText("Curiosidades:")).toBeVisible();
  await expect(page.getByText("A fundação foi criada por")).toHaveText(
    jsonData.description[2].items[0]
  );
  await expect(
    page.getByText(
      "O retrato de Fernando Pessoa por Almada Negreiros é um dos ícones da arte"
    )
  ).toHaveText(jsonData.description[2].items[1]);
  await expect(page.getByText("O espaço do museu inclui")).toHaveText(
    jsonData.description[2].items[2]
  );
  await expect(page.getByText("Os jardins são considerados um dos")).toHaveText(
    jsonData.description[2].items[3]
  );
  await expect(
    page.getByRole("img", { name: "Imagem 4 de Fundação Calouste" })
  ).toBeVisible();
  await expect(page.getByText("Interior do Museu Calouste")).toHaveText(
    jsonData.description[3].caption
  );
  await expect(
    page.getByRole("img", { name: "Imagem 5 de Fundação Calouste" })
  ).toBeVisible();
  await expect(page.getByText("Vista dos jardins da Fundação")).toHaveText(
    jsonData.description[4].caption
  );
  await expect(
    page.getByRole("img", { name: "Imagem 6 de Fundação Calouste" })
  ).toBeVisible();
  await expect(page.getByText("Sala com Fernando Pessoa")).toHaveText(
    jsonData.description[5].caption
  );
  await expect(
    page.getByRole("heading", { name: "🖼️ Obras em exibição" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Fernando Pessoa Fernando" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Museus" })
  ).toBeVisible();
});
test("Galeria Belvedere", async ({ page }) => {
  const response = await page.request.get("api/location/galeria-belvedere");
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await page.getByRole("link", { name: "Galeria Belvedere" }).click();
  await expect(page.getByText("📍 Localização: Viena, Áustria")).toHaveText(
    "📍 Localização: " + jsonData.city + ", " + jsonData.country
  );
  await expect(page.getByText("📬 Endereço: Prinz Eugen-Straße")).toHaveText(
    "📬 Endereço: " + jsonData.address
  );
  await expect(page.getByText("🛎️ Serviços:")).toBeVisible();
  await expect(page.getByText("Acesso incluído às exposições")).toHaveText(
    jsonData.pricePolicy.servicos[0]
  );
  await expect(page.getByText("Exposições combinadas")).toHaveText(
    jsonData.pricePolicy.servicos[1]
  );
  await expect(page.getByText("Audioguia e visitas guiadas")).toHaveText(
    jsonData.pricePolicy.servicos[2]
  );
  await expect(page.getByText("💰 Entrada Geral:")).toBeVisible();
  await expect(page.getByText("Valor: €17,70")).toHaveText(
    "Valor: " + jsonData.pricePolicy.entradaGeral.valor
  );
  await expect(page.getByText("Combinado: Belvedere Superior")).toHaveText(
    "Combinado: " + jsonData.pricePolicy.entradaGeral.combinado
  );
  await expect(page.getByText("Redução: €14,50")).toBeVisible();
  await expect(page.getByText("Vienna Pass: Gratuito")).toHaveText(
    "Vienna Pass: " + jsonData.pricePolicy.entradaGeral.viennaPass
  );
  await expect(page.getByText("Menores De 19: Gratuito")).toHaveText(
    "Menores De 19: " + jsonData.pricePolicy.entradaGeral.menoresDe19
  );
  await expect(
    page.getByText("Recomendação: Recomenda-se compra")
  ).toBeVisible();
  await expect(page.getByText("A Galeria Belvedere é composta")).toHaveText(
    jsonData.description[0].text
  );
  await expect(
    page.getByText("A obra O Beijo é o maior ícone da arte")
  ).toHaveText(jsonData.description[1].text);
  await expect(page.getByText("Curiosidades:")).toBeVisible();
  await expect(
    page.getByText("O Beijo mede 180 x 180 cm e foi comprado")
  ).toHaveText(jsonData.description[2].items[0]);
  await expect(
    page.getByText("A sala onde está a obra é climatizada e")
  ).toHaveText(jsonData.description[2].items[1]);
  await expect(
    page.getByText("O Belvedere abriga também importantes")
  ).toHaveText(jsonData.description[2].items[2]);
  await expect(
    page.getByText("O palácio em si é patrimônio mundial")
  ).toHaveText(jsonData.description[2].items[3]);
  await expect(
    page.getByRole("img", { name: "Imagem 4 de Galeria Belvedere" })
  ).toBeVisible();
  await expect(page.getByText("Vista dos jardins com")).toHaveText(
    jsonData.description[3].caption
  );
  await expect(
    page.getByRole("img", { name: "Imagem 5 de Galeria Belvedere" })
  ).toBeVisible();
  await expect(
    page.getByText("Sala dourada com O Beijo em destaque")
  ).toHaveText(jsonData.description[4].caption);
  await expect(
    page.getByRole("img", { name: "Imagem 6 de Galeria Belvedere" })
  ).toBeVisible();
  await expect(page.getByText("Detalhes arquitetônicos dos")).toHaveText(
    jsonData.description[5].caption
  );
  await expect(
    page.getByRole("heading", { name: "🖼️ Obras em exibição" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "O Beijo" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Museus" })
  ).toBeVisible();
});
test("Galeria Nacional de Londres", async ({ page }) => {
  const response = await page.request.get(
    "api/location/galeria-nacional-londres"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await page.getByRole("link", { name: "Galeria Nacional de Londres" }).click();
  await expect(
    page.getByText("📍 Localização: Londres, Reino Unido")
  ).toHaveText("📍 Localização: " + jsonData.city + ", " + jsonData.country);
  await expect(
    page.getByText("📬 Endereço: Trafalgar Square, London")
  ).toHaveText("📬 Endereço: " + jsonData.address);
  await expect(page.getByText("🛎️ Serviços:")).toBeVisible();
  await expect(
    page.getByText("Visitas guiadas gratuitas disponíveis")
  ).toHaveText(jsonData.pricePolicy.servicos[0]);
  await expect(
    page.getByText("Entrada gratuita permanente às coleções")
  ).toHaveText(jsonData.pricePolicy.servicos[1]);
  await expect(
    page.getByText("Aberto diariamente, com horário estendido")
  ).toHaveText(jsonData.pricePolicy.servicos[2]);
  await expect(page.getByText("💰 Entrada Geral:")).toBeVisible();
  await expect(page.getByText("Valor: Gratuita")).toHaveText(
    "Valor: " + jsonData.pricePolicy.entradaGeral.valor
  );
  await expect(
    page.getByText("Exposições Temporárias: Algumas são pagas")
  ).toBeVisible();
  await expect(
    page.getByText("Fundada em 1824, a National Gallery abriga")
  ).toHaveText(jsonData.description[0].text);
  await expect(
    page.getByText("O Casal Arnolfini, pintado em 1434 por Jan van Eyck, é")
  ).toHaveText(jsonData.description[1].text);
  await expect(page.getByText("Curiosidades:")).toBeVisible();
  await expect(
    page.getByText("A inscrição na pintura diz 'Jan van Eyck esteve aqui'")
  ).toHaveText(jsonData.description[2].items[0]);
  await expect(
    page.getByText("O espelho ao fundo reflete outras duas figuras, o que")
  ).toHaveText(jsonData.description[2].items[1]);
  await expect(
    page.getByText("A National Gallery é uma das poucas grandes")
  ).toHaveText(jsonData.description[2].items[2]);
  await expect(
    page.getByText("Outras obras de destaque incluem trabalhos de Da Vinci")
  ).toHaveText(jsonData.description[2].items[3]);
  await expect(
    page.getByRole("img", { name: "Imagem 4 de Galeria Nacional" })
  ).toBeVisible();
  await expect(
    page.getByText("Galeria com luz natural e disposição")
  ).toHaveText(jsonData.description[3].caption);
  await expect(
    page.getByRole("img", { name: "Imagem 5 de Galeria Nacional" })
  ).toBeVisible();
  await expect(page.getByText("Sala com O Casal Arnolfini em")).toHaveText(
    jsonData.description[4].caption
  );
  await expect(
    page.getByRole("heading", { name: "🖼️ Obras em exibição" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "O Casal Arnolfini" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Museus" })
  ).toBeVisible();
});
test("Galeria Nacional de Oslo", async ({ page }) => {
  const response = await page.request.get("api/location/galeria-nacional-oslo");
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await page.getByRole("link", { name: "Galeria Nacional de Oslo" }).click();
  await expect(page.getByText("📍 Localização: Oslo, Noruega")).toHaveText(
    "📍 Localização: " + jsonData.city + ", " + jsonData.country
  );
  await expect(
    page.getByText("📬 Endereço: Brynjulf Bulls plass 3")
  ).toHaveText("📬 Endereço: " + jsonData.address);
  await expect(page.getByText("🛎️ Serviços:")).toBeVisible();
  await expect(
    page.getByText("Acesso incluído a exposições permanentes e temporárias")
  ).toHaveText(jsonData.pricePolicy.servicos[0]);
  await expect(
    page.getByText("Visitas guiadas disponíveis mediante reserva")
  ).toHaveText(jsonData.pricePolicy.servicos[1]);
  await expect(
    page.getByText("Audioguia por aplicativo ou dispositivos")
  ).toHaveText(jsonData.pricePolicy.servicos[2]);
  await expect(page.getByText("💰 Entrada Geral:")).toBeVisible();
  await expect(page.getByText("Valor: NOK 200")).toHaveText(
    "Valor: " + jsonData.pricePolicy.entradaGeral.valor
  );
  await expect(page.getByText("Estudantes: NOK 110")).toHaveText(
    "Estudantes: " + jsonData.pricePolicy.entradaGeral.estudantes
  );
  await expect(page.getByText("Menores De 18: Gratuito")).toHaveText(
    "Menores De 18: " + jsonData.pricePolicy.entradaGeral.menoresDe18
  );
  await expect(
    page.getByText("Gratuito Quintas: Gratuito nas quintas-feiras")
  ).toHaveText(
    "Gratuito Quintas: " + jsonData.pricePolicy.entradaGeral.gratuitoQuintas
  );
  await expect(page.getByText("Aproximado Em Euros: €17")).toHaveText(
    "Aproximado Em Euros: " +
      jsonData.pricePolicy.entradaGeral.aproximadoEmEuros
  );
  await expect(
    page.getByText("A antiga Galeria Nacional de Oslo foi integrada")
  ).toHaveText(jsonData.description[0].text);
  await expect(
    page.getByText("O Grito, de Edvard Munch, é uma das imagens")
  ).toHaveText(jsonData.description[1].text);
  await expect(page.getByText("Curiosidades:")).toBeVisible();
  await expect(
    page.getByText("Existem várias versões de O Grito, mas a mais")
  ).toHaveText(jsonData.description[2].items[0]);
  await expect(page.getByText("A obra já foi roubada duas vezes e")).toHaveText(
    jsonData.description[2].items[1]
  );
  await expect(page.getByText("O novo prédio do museu conta com")).toHaveText(
    jsonData.description[2].items[2]
  );
  await expect(
    page.getByText("Além de Munch, o museu abriga obras de")
  ).toHaveText(jsonData.description[2].items[3]);
  await expect(
    page.getByRole("img", { name: "Imagem 4 de Galeria Nacional de Oslo" })
  ).toBeVisible();
  await expect(page.getByText("Fachada moderna do novo Nasjonal")).toHaveText(
    jsonData.description[3].caption
  );
  await expect(
    page.getByRole("img", { name: "Imagem 5 de Galeria Nacional de Oslo" })
  ).toBeVisible();
  await expect(page.getByText("Sala dedicada a Edvard Munch com")).toHaveText(
    jsonData.description[4].caption
  );
  await expect(
    page.getByRole("img", { name: "Imagem 6 de Galeria Nacional de Oslo" })
  ).toBeVisible();
  await expect(
    page.getByText(
      "Vista panorâmica da galeria e seu interior escandinavo minimalista"
    )
  ).toHaveText(jsonData.description[5].caption);
  await expect(
    page.getByRole("heading", { name: "🖼️ Obras em exibição" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "O Grito" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Museus" })
  ).toBeVisible();
});
test("Instituto de Arte Courtauld", async ({ page }) => {
  const response = await page.request.get("api/location/courtauld-gallery");
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("link", { name: "Instituto de Arte Courtauld" }).click();
  await expect(
    page.getByText("📍 Localização: Londres, Reino Unido")
  ).toHaveText("📍 Localização: " + jsonData.city + ", " + jsonData.country);
  await expect(
    page.getByText("📬 Endereço: Somerset House, Strand, London")
  ).toHaveText("📬 Endereço: " + jsonData.address);
  await expect(page.getByText("🛎️ Serviços:")).toBeVisible();
  await expect(page.getByText("Visitas guiadas")).toHaveText(
    jsonData.pricePolicy.servicos[0]
  );
  await expect(page.getByText("Audioguia disponível")).toHaveText(
    jsonData.pricePolicy.servicos[1]
  );
  await expect(page.getByText("💰 Entrada Geral:")).toBeVisible();
  await expect(page.getByText("Menores De 18: Gratuito")).toHaveText(
    "Menores De 18: " + jsonData.pricePolicy.entradaGeral.menoresDe18
  );
  await expect(page.getByText("Valor De Entrada: £9")).toHaveText(
    "Valor De Entrada: " + jsonData.pricePolicy.entradaGeral.valorDeEntrada
  );
  await expect(
    page.getByText("Outras Isenções: Gratuito para membros")
  ).toBeVisible();
  await expect(page.getByText("Estudantes EMaiores De 65: £6")).toHaveText(
    "Estudantes EMaiores De 65: " +
      jsonData.pricePolicy.entradaGeral.estudantesEMaioresDe65
  );
  await expect(
    page.getByText("Gratuito Segundas Feiras 18 h 21 h: Gratuito com reserva")
  ).toHaveText(
    "Gratuito Segundas Feiras 18 h 21 h: " +
      jsonData.pricePolicy.entradaGeral.gratuitoSegundasFeiras18h21h
  );
  await expect(
    page.getByText("O Courtauld Institute of Art, fundado em 1932")
  ).toHaveText(jsonData.description[0].text);
  await expect(
    page.getByText("Um Bar no Folies-Bergère, concluído por Édouard Manet")
  ).toHaveText(jsonData.description[1].text);
  await expect(page.getByText("Curiosidades:")).toBeVisible();
  await expect(
    page.getByText("A composição desafia as noções tradicionais de")
  ).toHaveText(jsonData.description[2].items[0]);
  await expect(
    page.getByText("O rótulo da cerveja inglesa “Bass Pale Ale” no")
  ).toHaveText(jsonData.description[2].items[1]);
  await expect(
    page.getByText("A modelo foi a mesma que Manet utilizou em outras")
  ).toHaveText(jsonData.description[2].items[2]);
  await expect(
    page.getByText("A Courtauld Gallery também possui obras de Van Gogh")
  ).toHaveText(jsonData.description[2].items[3]);
  await expect(
    page.getByText("O museu reabriu em 2021 após extensa renovação, com")
  ).toHaveText(jsonData.description[2].items[4]);
  await expect(
    page.getByRole("img", { name: "Imagem 4 de Instituto de Arte" })
  ).toBeVisible();
  await expect(
    page.getByText("Galeria iluminada com luz natural exibindo")
  ).toHaveText(jsonData.description[3].caption);
  await expect(
    page.getByRole("img", { name: "Imagem 5 de Instituto de Arte" })
  ).toBeVisible();
  await expect(
    page.getByText("Ambientes elegantes com obras impressionistas em")
  ).toHaveText(jsonData.description[4].caption);
  await expect(
    page.getByRole("heading", { name: "🖼️ Obras em exibição" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Um Bar no Folies-Bergère" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Museus" })
  ).toBeVisible();
});
test("Kunsthalle de Hamburgo", async ({ page }) => {
  const response = await page.request.get("api/location/kunsthalle-hamburgo");
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("link", { name: "Kunsthalle de Hamburgo" }).click();
  await expect(page.getByText("📍 Localização: Hamburgo, Alemanha")).toHaveText(
    "📍 Localização: " + jsonData.city + ", " + jsonData.country
  );
  await expect(page.getByText("📬 Endereço: Glockengießerwall 5")).toHaveText(
    "📬 Endereço: " + jsonData.address
  );
  await expect(page.getByText("💰 Entrada Geral:")).toBeVisible();
  await expect(page.getByText("Preço: €16")).toBeVisible();
  await expect(page.getByText("Redução: €8 (estudantes,")).toBeVisible();
  await expect(page.getByText("Menores De 18: Gratuito")).toHaveText(
    "Menores De 18: " + jsonData.pricePolicy.entradaGeral.menoresDe18
  );
  await expect(
    page.getByText("Gratuito Quintas Feiras: Gratuito das 17h")
  ).toHaveText(
    "Gratuito Quintas Feiras: " +
      jsonData.pricePolicy.entradaGeral.gratuitoQuintasFeiras
  );
  await expect(page.getByText("A Hamburger Kunsthalle é um dos")).toHaveText(
    jsonData.description[0].text
  );
  await expect(
    page.getByText("A obra Caminhante sobre o Mar de Névoa é")
  ).toHaveText(jsonData.description[1].text);
  await expect(page.getByText("Curiosidades:")).toBeVisible();
  await expect(
    page.getByText("A Kunsthalle é dividida em três edifícios interligados")
  ).toHaveText(jsonData.description[2].items[0]);
  await expect(
    page.getByText("Caspar David Friedrich tem uma sala especial no museu")
  ).toHaveText(jsonData.description[2].items[1]);
  await expect(
    page.getByText("A pintura é frequentemente associada a sentimentos")
  ).toHaveText(jsonData.description[2].items[2]);
  await expect(
    page.getByRole("img", { name: "Imagem 4 de Kunsthalle de" })
  ).toBeVisible();
  await expect(page.getByText("Fachada histórica da")).toHaveText(
    jsonData.description[3].caption
  );
  await expect(
    page.getByRole("img", { name: "Imagem 5 de Kunsthalle de" })
  ).toBeVisible();
  await expect(
    page.getByText("Exposição da obra Caminhante sobre o Mar")
  ).toHaveText(jsonData.description[4].caption);
  await expect(
    page.getByRole("img", { name: "Imagem 6 de Kunsthalle de" })
  ).toBeVisible();
  await expect(page.getByText("Ambientes internos com a")).toHaveText(
    jsonData.description[5].caption
  );
  await expect(
    page.getByRole("heading", { name: "🖼️ Obras em exibição" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Caminhante Sobre o Mar de Névoa" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Museus" })
  ).toBeVisible();
});
test("Kunstmuseum Den Haag", async ({ page }) => {
  const response = await page.request.get("api/location/kunstmuseum-den-haag");
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("link", { name: "Kunstmuseum Den Haag" }).click();
  await expect(
    page.getByText("📍 Localização: Haia, Países Baixos")
  ).toHaveText("📍 Localização: " + jsonData.city + ", " + jsonData.country);
  await expect(
    page.getByText("📬 Endereço: Stadhouderslaan 41, 2517")
  ).toHaveText("📬 Endereço: " + jsonData.address);

  await expect(page.getByText("🛎️ Serviços:")).toBeVisible();
  await expect(page.getByText("Acesso às coleções permanentes e")).toHaveText(
    jsonData.pricePolicy.servicos[0]
  );
  await expect(page.getByText("Sala dedicada a Mondrian com")).toHaveText(
    jsonData.pricePolicy.servicos[1]
  );
  await expect(
    page.getByText("Audioguias e visitas guiadas disponíveis")
  ).toHaveText(jsonData.pricePolicy.servicos[2]);
  await expect(page.getByText("💰 Entrada Geral:")).toBeVisible();
  await expect(page.getByText("Valor: €17")).toHaveText(
    "Valor: " + jsonData.pricePolicy.entradaGeral.valor
  );
  await expect(page.getByText("Menores De 18: Gratuito")).toHaveText(
    "Menores De 18: " + jsonData.pricePolicy.entradaGeral.menoresDe18
  );
  await expect(page.getByText("Datas Especiais: Gratuito")).toHaveText(
    "Datas Especiais: " + jsonData.pricePolicy.entradaGeral.datasEspeciais
  );
  await expect(page.getByText("Estudantes 18 a 26: €8,50")).toHaveText(
    "Estudantes 18 a 26: " + jsonData.pricePolicy.entradaGeral.estudantes18a26
  );
  await expect(
    page.getByText("Museumkaart Rotterdam Pass: Gratuito")
  ).toHaveText(
    "Museumkaart Rotterdam Pass: " +
      jsonData.pricePolicy.entradaGeral.museumkaartRotterdamPass
  );
  await expect(page.getByText("O Kunstmuseum Den Haag é uma das")).toHaveText(
    jsonData.description[0].text
  );
  await expect(
    page.getByText("A coleção de obras de Piet Mondrian")
  ).toHaveText(jsonData.description[1].text);
  await expect(page.getByText("Curiosidades:")).toBeVisible();
  await expect(
    page.getByText("O museu tem uma sala inteiramente dedicada")
  ).toHaveText(jsonData.description[2].items[0]);
  await expect(
    page.getByText("O prédio é considerado uma obra de arte por si só")
  ).toHaveText(jsonData.description[2].items[1]);
  await expect(
    page.getByText("O acervo também inclui arte de Cézanne, Monet")
  ).toHaveText(jsonData.description[2].items[2]);
  await expect(
    page.getByRole("img", { name: "Imagem 4 de Kunstmuseum Den" })
  ).toBeVisible();
  await expect(
    page.getByText("Sala dedicada a Mondrian", { exact: true })
  ).toHaveText(jsonData.description[3].caption);
  await expect(
    page.getByRole("img", { name: "Imagem 5 de Kunstmuseum Den" })
  ).toBeVisible();
  await expect(page.getByText("Interiores com arquitetura de")).toHaveText(
    jsonData.description[4].caption
  );
  await expect(
    page.getByRole("heading", { name: "🖼️ Obras em exibição" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Composição com Vermelho, Azul e Amarelo" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Museus" })
  ).toBeVisible();
});
test("Mauritshuis", async ({ page }) => {
  const response = await page.request.get("api/location/mauritshuis");
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("link", { name: "Mauritshuis" }).click();
  await expect(
    page.getByText("📍 Localização: Haia, Países Baixos")
  ).toHaveText("📍 Localização: " + jsonData.city + ", " + jsonData.country);
  await expect(page.getByText("📬 Endereço: Plein 29, 2511")).toHaveText(
    "📬 Endereço: " + jsonData.address
  );

  await expect(page.getByText("🛎️ Serviços:")).toBeVisible();
  await expect(page.getByText("Visitas guiadas")).toHaveText(
    jsonData.pricePolicy.servicos[0]
  );
  await expect(page.getByText("Audioguia")).toHaveText(
    jsonData.pricePolicy.servicos[1]
  );
  await expect(page.getByText("Aplicação interativa disponível")).toHaveText(
    jsonData.pricePolicy.servicos[2]
  );
  await expect(page.getByText("💰 Entrada Geral:")).toBeVisible();
  await expect(page.getByText("Adultos: €17,50")).toHaveText(
    "Adultos: " + jsonData.pricePolicy.entradaGeral.adultos
  );
  await expect(page.getByText("Estudantes: €12,50")).toHaveText(
    "Estudantes: " + jsonData.pricePolicy.entradaGeral.estudantes
  );
  await expect(page.getByText("Museumkaart: Acesso incluído")).toHaveText(
    "Museumkaart: " + jsonData.pricePolicy.entradaGeral.museumkaart
  );
  await expect(page.getByText("Menores De 18 Anos: Gratuito")).toHaveText(
    "Menores De 18 Anos: " + jsonData.pricePolicy.entradaGeral.menoresDe18Anos
  );
  await expect(page.getByText("O Mauritshuis é um museu de arte")).toHaveText(
    jsonData.description[0].text
  );
  await expect(
    page.getByText("A obra Rapariga com Brinco de Pérola, pintada")
  ).toHaveText(jsonData.description[1].text);
  await expect(page.getByText("Curiosidades:")).toBeVisible();
  await expect(
    page.getByText("A identidade da rapariga é desconhecida")
  ).toHaveText(jsonData.description[2].items[0]);
  await expect(
    page.getByText("A pintura não tem fundo definido nem")
  ).toHaveText(jsonData.description[2].items[1]);
  await expect(
    page.getByText("O Mauritshuis ficou internacionalmente conhecido")
  ).toHaveText(jsonData.description[2].items[2]);
  await expect(
    page.getByText("O museu passou por uma grande renovação")
  ).toHaveText(jsonData.description[2].items[3]);
  await expect(
    page.getByText("Outras obras notáveis no acervo incluem A Lição")
  ).toHaveText(jsonData.description[2].items[4]);
  await expect(
    page.getByRole("img", { name: "Imagem 4 de Mauritshuis" })
  ).toBeVisible();
  await expect(page.getByText("Fachada elegante à beira do")).toHaveText(
    jsonData.description[3].caption
  );
  await expect(
    page.getByRole("img", { name: "Imagem 5 de Mauritshuis" })
  ).toBeVisible();
  await expect(page.getByText("Sala central com a Rapariga")).toHaveText(
    jsonData.description[4].caption
  );
  await expect(
    page.getByRole("img", { name: "Imagem 6 de Mauritshuis" })
  ).toBeVisible();
  await expect(page.getByText("Ambientes preservados com")).toHaveText(
    jsonData.description[5].caption
  );
  await expect(
    page.getByRole("heading", { name: "🖼️ Obras em exibição" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Rapariga com brinco de pérola" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Museus" })
  ).toBeVisible();
});
test("Museu Bordalo Pinheiro", async ({ page }) => {
  const response = await page.request.get(
    "api/location/museu-bordalo-pinheiro"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("link", { name: "Museu Bordalo Pinheiro" }).click();
  await expect(page.getByText("📍 Localização: Lisboa, Portugal")).toHaveText(
    "📍 Localização: " + jsonData.city + ", " + jsonData.country
  );
  await expect(page.getByText("📬 Endereço: Campo Grande, 382")).toHaveText(
    "📬 Endereço: " + jsonData.address
  );
  await expect(page.getByText("💰 Entrada Geral:")).toBeVisible();
  await expect(page.getByText("Adultos: €3")).toHaveText(
    "Adultos: " + jsonData.pricePolicy.entradaGeral.adultos
  );
  await expect(page.getByText("Menores De 13 Anos: Gratuito")).toHaveText(
    "Menores De 13 Anos: " + jsonData.pricePolicy.entradaGeral.menoresDe13Anos
  );
  await expect(
    page.getByText("Estudantes Jovens 13 a 25 EMaiores De 65: €1,50")
  ).toHaveText(
    "Estudantes Jovens 13 a 25 EMaiores De 65: " +
      jsonData.pricePolicy.entradaGeral.estudantesJovens13a25EMaioresDe65
  );
  await expect(
    page.getByText("Residentes Em Lisboa Domingos EFeriados Ate 14 h: Gratuito")
  ).toHaveText(
    "Residentes Em Lisboa Domingos EFeriados Ate 14 h: " +
      jsonData.pricePolicy.entradaGeral
        .residentesEmLisboaDomingosEFeriadosAte14h
  );
  await expect(
    page.getByText("O Museu Bordalo Pinheiro é dedicado à vida")
  ).toHaveText(jsonData.description[0].text);
  await expect(
    page.getByText("O Zé Povinho, criado por Bordalo Pinheiro em")
  ).toHaveText(jsonData.description[1].text);
  await expect(page.getByText("Curiosidades:")).toBeVisible();
  await expect(
    page.getByText("O museu está situado num pequeno palacete")
  ).toHaveText(jsonData.description[2].items[0]);
  await expect(
    page.getByText("Além de ilustrações e cerâmicas do Zé Povinho")
  ).toHaveText(jsonData.description[2].items[1]);
  await expect(
    page.getByText("O Zé Povinho foi representado em múltiplas")
  ).toHaveText(jsonData.description[2].items[2]);
  await expect(
    page.getByText("Bordalo Pinheiro foi também um pioneiro do")
  ).toHaveText(jsonData.description[2].items[3]);
  await expect(
    page.getByText("O museu promove regularmente exposições temporárias")
  ).toHaveText(jsonData.description[2].items[4]);
  await expect(
    page.getByRole("img", { name: "Imagem 4 de Museu Bordalo" })
  ).toBeVisible();
  await expect(page.getByText("Exposição de várias versões")).toHaveText(
    jsonData.description[3].caption
  );
  await expect(
    page.getByRole("img", { name: "Imagem 5 de Museu Bordalo" })
  ).toBeVisible();
  await expect(page.getByText("Vitrines com desenhos")).toHaveText(
    jsonData.description[4].caption
  );
  await expect(
    page.getByRole("img", { name: "Imagem 6 de Museu Bordalo" })
  ).toBeVisible();
  await expect(page.getByText("Jardim com esculturas e")).toHaveText(
    jsonData.description[5].caption
  );
  await expect(
    page.getByRole("heading", { name: "🖼️ Obras em exibição" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Zé Povinho" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Museus" })
  ).toBeVisible();
});
test("Museu Guggenheim de Nova Iorque", async ({ page }) => {
  const response = await page.request.get(
    "api/location/museu-guggenheim-nova-iorque"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await page.getByRole("button", { name: "2" }).click();
  await page
    .getByRole("link", { name: "Museu Guggenheim de Nova Iorque" })
    .click();
  await expect(
    page.getByText("📍 Localização: Nova Iorque, Estados Unidos")
  ).toHaveText("📍 Localização: " + jsonData.city + ", " + jsonData.country);
  await expect(
    page.getByText("📬 Endereço: 1071 Fifth Avenue, New York")
  ).toHaveText("📬 Endereço: " + jsonData.address);
  await expect(page.getByText("🛎️ Serviços:")).toBeVisible();
  await expect(page.getByText("Visitas guiadas")).toHaveText(
    jsonData.pricePolicy.servicos[0]
  );
  await expect(page.getByText("Audioguia")).toHaveText(
    jsonData.pricePolicy.servicos[1]
  );
  await expect(page.getByText("Aplicação interativa disponível")).toHaveText(
    jsonData.pricePolicy.servicos[2]
  );
  await expect(page.getByText("💰 Entrada Geral:")).toBeVisible();
  await expect(page.getByText("Valor: $30")).toHaveText(
    "Valor: " + jsonData.pricePolicy.entradaGeral.valor
  );
  await expect(page.getByText("Pay What You Wish: Sábados das 16h")).toHaveText(
    "Pay What You Wish: " + jsonData.pricePolicy.entradaGeral.payWhatYouWish
  );
  await expect(
    page.getByText("Membros EMenores De 12 Anos: Gratuito")
  ).toHaveText(
    "Membros EMenores De 12 Anos: " +
      jsonData.pricePolicy.entradaGeral.membrosEMenoresDe12Anos
  );
  await expect(
    page.getByText("Estudantes EMaiores De 65 Anos: $19")
  ).toHaveText(
    "Estudantes EMaiores De 65 Anos: " +
      jsonData.pricePolicy.entradaGeral.estudantesEMaioresDe65Anos
  );
  await expect(page.getByText("O Guggenheim é um dos museus mais")).toHaveText(
    jsonData.description[0].text
  );
  await expect(
    page.getByText("Composição 8 é uma das obras-primas")
  ).toHaveText(jsonData.description[1].text);
  await expect(page.getByText("Curiosidades:")).toBeVisible();
  await expect(
    page.getByText("O edifício do Guggenheim tem um formato")
  ).toHaveText(jsonData.description[2].items[0]);
  await expect(
    page.getByText("Kandinsky foi o primeiro artista abstrato do")
  ).toHaveText(jsonData.description[2].items[1]);
  await expect(
    page.getByText("Composição 8 foi adquirida pelo museu em 1930")
  ).toHaveText(jsonData.description[2].items[2]);
  await expect(
    page.getByRole("img", { name: "Imagem 4 de Museu Guggenheim" })
  ).toBeVisible();
  await expect(page.getByText("Fachada espiralada projetada")).toHaveText(
    jsonData.description[3].caption
  );
  await expect(
    page.getByRole("img", { name: "Imagem 5 de Museu Guggenheim" })
  ).toBeVisible();
  await expect(page.getByText("Exposição de Kandinsky com")).toHaveText(
    jsonData.description[4].caption
  );
  await expect(
    page.getByRole("heading", { name: "🖼️ Obras em exibição" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Composição 8" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Museus" })
  ).toBeVisible();
});
test("Museu Nacional de Arte Contemporânea do Chiado", async ({ page }) => {
  const response = await page.request.get(
    "api/location/museu-nacional-de-arte-contemporanea-do-chiado"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page
    .getByRole("link", {
      name: "Museu Nacional de Arte Contemporânea do Chiado",
    })
    .click();
  await expect(page.getByText("📍 Localização: Lisboa, Portugal")).toHaveText(
    "📍 Localização: " + jsonData.city + ", " + jsonData.country
  );
  await expect(page.getByText("📬 Endereço: Rua Serpa Pinto, 4")).toHaveText(
    "📬 Endereço: " + jsonData.address
  );
  await expect(page.getByText("💰 Entrada Geral:")).toBeVisible();
  await expect(page.getByText("Valor: €4,50")).toHaveText(
    "Valor: " + jsonData.pricePolicy.entradaGeral.valor
  );
  await expect(page.getByText("Reducao: €2,25 (para")).toHaveText(
    "Reducao: " + jsonData.pricePolicy.entradaGeral.reducao
  );
  await expect(
    page.getByText("Gratuito: Menores de 12 anos; domingos")
  ).toHaveText("Gratuito: " + jsonData.pricePolicy.entradaGeral.gratuito);
  await expect(
    page.getByText("O Museu do Chiado, oficialmente Museu")
  ).toHaveText(jsonData.description[0].text);
  await expect(
    page.getByText("Parto da Viola, uma das obras mais notáveis")
  ).toHaveText(jsonData.description[1].text);
  await expect(page.getByText("Curiosidades:")).toBeVisible();
  await expect(
    page.getByText("Amadeo é hoje considerado um dos pioneiros")
  ).toHaveText(jsonData.description[2].items[0]);
  await expect(page.getByText("O museu possui também obras de")).toHaveText(
    jsonData.description[2].items[1]
  );
  await expect(
    page.getByText("O edifício é um antigo convento adaptado, com um")
  ).toHaveText(jsonData.description[2].items[2]);
  await expect(
    page.getByText("O acervo cruza linguagens como pintura, escultura")
  ).toHaveText(jsonData.description[2].items[3]);
  await expect(
    page.getByRole("img", { name: "Imagem 4 de Museu Nacional de" })
  ).toBeVisible();
  await expect(
    page.getByText("Fachada do museu no Chiado, entre edifícios históricos")
  ).toHaveText(jsonData.description[3].caption);
  await expect(
    page.getByRole("img", { name: "Imagem 5 de Museu Nacional de" })
  ).toBeVisible();
  await expect(
    page.getByText("Galeria principal com pé-direito alto")
  ).toHaveText(jsonData.description[4].caption);
  await expect(
    page.getByRole("img", { name: "Imagem 6 de Museu Nacional de" })
  ).toBeVisible();
  await expect(
    page.getByText("Vista de Parto da Viola em sala dedicada")
  ).toHaveText(jsonData.description[5].caption);
  await expect(
    page.getByRole("heading", { name: "🖼️ Obras em exibição" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Parto da Viola" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Museus" })
  ).toBeVisible();
});
test("Museu Nacional de Belas Artes", async ({ page }) => {
  const response = await page.request.get(
    "api/location/museu-nacional-de-belas-artes"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page
    .getByRole("link", {
      name: "Museu Nacional de Belas Artes",
    })
    .click();
  await expect(
    page.getByText("📍 Localização: Rio de Janeiro, Brasil")
  ).toHaveText("📍 Localização: " + jsonData.city + ", " + jsonData.country);
  await expect(
    page.getByText("📬 Endereço: Avenida Rio Branco, 199")
  ).toHaveText("📬 Endereço: " + jsonData.address);
  await expect(page.getByText("💰 Entrada Geral:")).toBeVisible();
  await expect(page.getByText("Valor: R$ 10,00")).toHaveText(
    "Valor: " + jsonData.pricePolicy.entradaGeral.valor
  );
  await expect(page.getByText("Isentos: Professores, crianças")).toHaveText(
    "Isentos: " + jsonData.pricePolicy.entradaGeral.isentos
  );
  await expect(page.getByText("Gratuito: Domingos e terças-feiras")).toHaveText(
    "Gratuito: " + jsonData.pricePolicy.entradaGeral.gratuito
  );
  await expect(page.getByText("Meia Entrada: R$ 5,00 (estudantes")).toHaveText(
    "Meia Entrada: " + jsonData.pricePolicy.entradaGeral.meiaEntrada
  );
  await expect(page.getByText("Inaugurado em 1937 e situado no")).toHaveText(
    jsonData.description[0].text
  );
  await expect(
    page.getByText("A obra O Lavrador de Café (1934), de")
  ).toHaveText(jsonData.description[1].text);
  await expect(page.getByText("Curiosidades:")).toBeVisible();
  await expect(
    page.getByText("O edifício foi originalmente construído para")
  ).toHaveText(jsonData.description[2].items[0]);
  await expect(
    page.getByText("O acervo inclui também importantes obras de Almeida")
  ).toHaveText(jsonData.description[2].items[1]);
  await expect(
    page.getByText("O Lavrador de Café é uma das obras mais")
  ).toHaveText(jsonData.description[2].items[2]);
  await expect(
    page.getByText("O museu frequentemente realiza exposições temáticas")
  ).toHaveText(jsonData.description[2].items[3]);
  await expect(
    page.getByRole("img", { name: "Imagem 4 de Museu Nacional de Belas Artes" })
  ).toBeVisible();
  await expect(page.getByText("Fachada monumental na Cinelândia")).toHaveText(
    jsonData.description[3].caption
  );
  await expect(
    page.getByRole("img", { name: "Imagem 5 de Museu Nacional de Belas Artes" })
  ).toBeVisible();
  await expect(
    page.getByText("Salão nobre com teto pintado e lustres históricos")
  ).toHaveText(jsonData.description[4].caption);
  await expect(
    page.getByRole("img", { name: "Imagem 6 de Museu Nacional de Belas Artes" })
  ).toBeVisible();
  await expect(page.getByText("Vista da obra O Lavrador de")).toHaveText(
    jsonData.description[5].caption
  );
  await expect(
    page.getByRole("heading", { name: "🖼️ Obras em exibição" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "O Lavrador de Café" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Museus" })
  ).toBeVisible();
});
test("Museu de Arte Moderna (MoMA)", async ({ page }) => {
  const response = await page.request.get("api/location/moma-nova-iorque");
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page
    .getByRole("link", {
      name: "Museu de Arte Moderna (MoMA)",
    })
    .click();
  await expect(
    page.getByText("📍 Localização: Nova Iorque, Estados Unidos")
  ).toHaveText("📍 Localização: " + jsonData.city + ", " + jsonData.country);
  await expect(
    page.getByText("📬 Endereço: 11 West 53rd Street, New York")
  ).toHaveText("📬 Endereço: " + jsonData.address);
  await expect(page.getByText("💰 Entrada Geral:")).toBeVisible();
  await expect(page.getByText("Valor: $30")).toHaveText(
    "Valor: " + jsonData.pricePolicy.entradaGeral.valor
  );
  await expect(page.getByText("Idosos: $22")).toHaveText(
    "Idosos: " + jsonData.pricePolicy.entradaGeral.idosos
  );
  await expect(
    page.getByText("Gratuito: Sextas-feiras, das 17h30 às")
  ).toBeVisible();
  await expect(page.getByText("Estudantes: $17")).toHaveText(
    "Estudantes: " + jsonData.pricePolicy.entradaGeral.estudantes
  );
  await expect(page.getByText("Menores De 16: Gratuito")).toHaveText(
    "Menores De 16: " + jsonData.pricePolicy.entradaGeral.menoresDe16
  );
  await expect(
    page.getByText("O MoMA é um dos museus mais influentes")
  ).toHaveText(jsonData.description[0].text);
  await expect(page.getByText("Curiosidades:")).toBeVisible();
  await expect(
    page.getByText("Noite Estrelada, de Van Gogh, é uma das")
  ).toHaveText(jsonData.description[1].items[0]);
  await expect(
    page.getByText("O Sonho, de Rousseau, é um exemplo icônico da arte")
  ).toHaveText(jsonData.description[1].items[1]);
  await expect(
    page.getByText("O MoMA foi um dos primeiros museus ocidentais")
  ).toHaveText(jsonData.description[1].items[2]);
  await expect(
    page.getByText("O museu passou por uma grande renovação")
  ).toHaveText(jsonData.description[1].items[3]);
  await expect(
    page.getByRole("img", { name: "Imagem 3 de Museu de Arte" })
  ).toBeVisible();
  await expect(page.getByText("Galeria com Noite Estrelada")).toHaveText(
    jsonData.description[2].caption
  );
  await expect(
    page.getByRole("img", { name: "Imagem 4 de Museu de Arte" })
  ).toBeVisible();
  await expect(page.getByText("Sala dedicada ao primitivismo")).toHaveText(
    jsonData.description[3].caption
  );
  await expect(
    page.getByRole("img", { name: "Imagem 5 de Museu de Arte" })
  ).toBeVisible();
  await expect(page.getByText("Exposição de arte russa com")).toHaveText(
    jsonData.description[4].caption
  );
  await expect(
    page.getByRole("img", { name: "Imagem 6 de Museu de Arte" })
  ).toBeVisible();
  await expect(
    page.getByText("Ambientes amplos com design minimalista")
  ).toHaveText(jsonData.description[5].caption);
  await expect(
    page.getByRole("heading", { name: "🖼️ Obras em exibição" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "O Suprematismo" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Noite Estrelada" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "O Sonho" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Museus" })
  ).toBeVisible();
});
test("Museu de Arte de Filadélfia", async ({ page }) => {
  const response = await page.request.get(
    "api/location/museu-de-arte-de-filadelfia"
  );
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page
    .getByRole("link", {
      name: "Museu de Arte de Filadélfia",
    })
    .click();
  await expect(
    page.getByText("📍 Localização: Filadélfia, Estados Unidos")
  ).toHaveText("📍 Localização: " + jsonData.city + ", " + jsonData.country);
  await expect(
    page.getByText("📬 Endereço: 2600 Benjamin Franklin Parkway")
  ).toHaveText("📬 Endereço: " + jsonData.address);
  await expect(page.getByText("💰 Entrada Geral:")).toBeVisible();
  await expect(page.getByText("Adultos: $30")).toHaveText(
    "Adultos: " + jsonData.pricePolicy.entradaGeral.adultos
  );
  await expect(page.getByText("Senior 65 Mais: $28")).toHaveText(
    "Senior 65 Mais: " + jsonData.pricePolicy.entradaGeral.senior65Mais
  );
  await expect(
    page.getByText("Pay What You Wish: Domingos após as 17h")
  ).toHaveText(
    "Pay What You Wish: " + jsonData.pricePolicy.entradaGeral.payWhatYouWish
  );
  await expect(page.getByText("Estudantes Com ID: $23")).toHaveText(
    "Estudantes Com ID: " + jsonData.pricePolicy.entradaGeral.estudantesComID
  );
  await expect(page.getByText("Menores De 18 Anos: Gratuito")).toHaveText(
    "Menores De 18 Anos: " + jsonData.pricePolicy.entradaGeral.menoresDe18Anos
  );
  await expect(
    page.getByText("O Museu de Arte de Filadélfia é uma das instituições")
  ).toHaveText(jsonData.description[0].text);
  await expect(
    page.getByText("Seu acervo é especialmente forte em")
  ).toHaveText(jsonData.description[1].text);
  await expect(page.getByText("Curiosidades:")).toBeVisible();
  await expect(
    page.getByText("As Banhistas é considerada uma das últimas")
  ).toHaveText(jsonData.description[2].items[0]);
  await expect(
    page.getByText("O museu tem uma ala especial dedicada à arte")
  ).toHaveText(jsonData.description[2].items[1]);
  await expect(
    page.getByText("A escadaria do museu é um ícone da cultura pop")
  ).toHaveText(jsonData.description[2].items[2]);
  await expect(
    page.getByRole("img", { name: "Imagem 4 de Museu de Arte de Filadélfia" })
  ).toBeVisible();
  await expect(
    page.getByText("Fachada principal com as escadarias icônicas")
  ).toHaveText(jsonData.description[3].caption);
  await expect(
    page.getByRole("img", { name: "Imagem 5 de Museu de Arte de Filadélfia" })
  ).toBeVisible();
  await expect(
    page.getByText("Escadaria eternizada no filme Rocky")
  ).toHaveText(jsonData.description[4].caption);
  await expect(
    page.getByRole("img", { name: "Imagem 6 de Museu de Arte de Filadélfia" })
  ).toBeVisible();
  await expect(
    page.getByText("Vista interna da galeria de arte europeia com")
  ).toHaveText(jsonData.description[5].caption);
  await expect(
    page.getByRole("img", { name: "Imagem 7 de Museu de Arte de Filadélfia" })
  ).toBeVisible();
  await expect(
    page.getByText("Painel da obra As Banhistas em exibição")
  ).toHaveText(jsonData.description[6].caption);
  await expect(
    page.getByRole("img", { name: "Imagem 8 de Museu de Arte de Filadélfia" })
  ).toBeVisible();
  await expect(
    page.getByText("Áreas internas com destaque para o grande hall")
  ).toHaveText(jsonData.description[7].caption);
  await expect(
    page.getByRole("heading", { name: "🖼️ Obras em exibição" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "As Banhistas" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Museus" })
  ).toBeVisible();
});
test("Museu do Louvre", async ({ page }) => {
  const response = await page.request.get("api/location/museu-do-louvre");
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page
    .getByRole("link", {
      name: "Museu do Louvre",
    })
    .click();
  await expect(page.getByText("📍 Localização: Paris, França")).toHaveText(
    "📍 Localização: " + jsonData.city + ", " + jsonData.country
  );
  await expect(page.getByText("📬 Endereço: Rue de Rivoli, 75001")).toHaveText(
    "📬 Endereço: " + jsonData.address
  );
  await expect(page.getByText("💰 Entrada Geral:")).toBeVisible();
  await expect(page.getByText("Valor: €17 (compra online)")).toHaveText(
    "Valor: " + jsonData.pricePolicy.entradaGeral.valor
  );
  await expect(
    page.getByText("Gratuito: Primeiro sábado de cada mês")
  ).toHaveText("Gratuito: " + jsonData.pricePolicy.entradaGeral.gratuito);
  await expect(
    page.getByText("Recomendacao: É recomendável comprar")
  ).toHaveText(
    "Recomendacao: " + jsonData.pricePolicy.entradaGeral.recomendacao
  );
  await expect(
    page.getByText("O Museu do Louvre é o maior museu de arte")
  ).toHaveText(jsonData.description[0].text);
  await expect(
    page.getByText("Com mais de 35 mil obras em exibição, o Louvre")
  ).toHaveText(jsonData.description[1].text);
  await expect(page.getByText("Curiosidades:")).toBeVisible();
  await expect(
    page.getByText("O Louvre recebe mais de 7 milhões de")
  ).toHaveText(jsonData.description[2].items[0]);
  await expect(
    page.getByText("A famosa pirâmide de vidro, projetada pelo arquiteto Ieoh")
  ).toHaveText(jsonData.description[2].items[1]);
  await expect(
    page.getByText("A Mona Lisa é uma das obras mais visitadas do mundo")
  ).toHaveText(jsonData.description[2].items[2]);
  await expect(
    page.getByRole("img", { name: "Imagem 4 de Museu do Louvre" })
  ).toBeVisible();
  await expect(
    page.getByText("Fachada externa com a pirâmide de vidro")
  ).toHaveText(jsonData.description[3].caption);
  await expect(
    page.getByRole("img", { name: "Imagem 5 de Museu do Louvre" })
  ).toBeVisible();
  await expect(page.getByText("Sala da Mona Lisa com visitantes")).toHaveText(
    jsonData.description[4].caption
  );
  await expect(
    page.getByRole("img", { name: "Imagem 6 de Museu do Louvre" })
  ).toBeVisible();
  await expect(page.getByText("Galeria das pinturas do século XIX")).toHaveText(
    jsonData.description[5].caption
  );
  await expect(
    page.getByRole("img", { name: "Imagem 7 de Museu do Louvre" })
  ).toBeVisible();
  await expect(
    page.getByText("Detalhes do interior do museu, como a escadaria")
  ).toHaveText(jsonData.description[6].caption);
  await expect(
    page.getByRole("heading", { name: "🖼️ Obras em exibição" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Mona Lisa" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "A Liberdade guiando o povo" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Museus" })
  ).toBeVisible();
});
test("Museu do Prado", async ({ page }) => {
  const response = await page.request.get("api/location/museu-do-prado");
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await page.getByRole("button", { name: "3" }).click();
  await page
    .getByRole("link", {
      name: "Museu do Prado",
    })
    .click();
  await expect(page.getByText("📍 Localização: Madrid, Espanha")).toHaveText(
    "📍 Localização: " + jsonData.city + ", " + jsonData.country
  );
  await expect(
    page.getByText("📬 Endereço: Calle de Ruiz de Alarcón 23")
  ).toHaveText("📬 Endereço: " + jsonData.address);
  await expect(page.getByText("💰 Entrada Geral:")).toBeVisible();
  await expect(page.getByText("Valor: €15")).toHaveText(
    "Valor: " + jsonData.pricePolicy.entradaGeral.valor
  );
  await expect(page.getByText("Reducao: €7,50 (para estudantes")).toHaveText(
    "Reducao: " + jsonData.pricePolicy.entradaGeral.reducao
  );
  await expect(page.getByText("Gratuito: Segunda a sábado das")).toHaveText(
    "Gratuito: " + jsonData.pricePolicy.entradaGeral.gratuito
  );
  await expect(
    page.getByText("O Museu do Prado é o principal museu de arte")
  ).toHaveText(jsonData.description[0].text);
  await expect(
    page.getByText("A pintura As Meninas, de Diego Velázquez")
  ).toHaveText(jsonData.description[1].text);
  await expect(page.getByText("Curiosidades:")).toBeVisible();
  await expect(
    page.getByText("O museu possui mais de 8.000 pinturas em seu")
  ).toHaveText(jsonData.description[2].items[0]);
  await expect(
    page.getByText("As Meninas é considerada uma das obras")
  ).toHaveText(jsonData.description[2].items[1]);
  await expect(
    page.getByText("Velázquez pintou a si mesmo na obra")
  ).toHaveText(jsonData.description[2].items[2]);
  await expect(
    page.getByText("O edifício foi originalmente projetado para abrigar")
  ).toHaveText(jsonData.description[2].items[3]);
  await expect(
    page.getByRole("img", { name: "Imagem 4 de Museu do Prado" })
  ).toBeVisible();
  await expect(
    page.getByText("Fachada neoclássica do edifício principal")
  ).toHaveText(jsonData.description[3].caption);
  await expect(
    page.getByRole("img", { name: "Imagem 5 de Museu do Prado" })
  ).toBeVisible();
  await expect(
    page.getByText("Detalhe da sala dedicada a Velázquez")
  ).toHaveText(jsonData.description[4].caption);
  await expect(
    page.getByRole("img", { name: "Imagem 6 de Museu do Prado" })
  ).toBeVisible();
  await expect(page.getByText("Interior com a escadaria principal")).toHaveText(
    jsonData.description[5].caption
  );
  await expect(
    page.getByRole("heading", { name: "🖼️ Obras em exibição" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "As Meninas" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Museus" })
  ).toBeVisible();
});
