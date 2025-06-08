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
  ).toBeVisible();
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
  await expect(
    page.getByText("📍 Localização: Lisboa, Portugal")
  ).toBeVisible();
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
});
