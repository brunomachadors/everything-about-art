import { test, expect } from "@playwright/test";

test("Avenida Infante Santo", async ({ page }) => {
  const response = await page.request.get("api/location/avenida-infante-santo");
  console.log(await response.json());
  const jsonData = await response.json();
  await page.goto("");
  await page.getByRole("link", { name: "ARTE URBANA" }).click();
  await expect(
    page.getByRole("heading", { name: "Arte Urbana" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Avenida Infante Santo" })
  ).toBeVisible();
  await page.getByRole("link", { name: "Avenida Infante Santo" }).click();
  await expect(
    page.getByText("📍 Localização: Lisboa, Portugal")
  ).toBeVisible();
  await expect(page.getByText("📍 Localização: Lisboa, Portugal")).toHaveText(
    "📍 Localização: " + jsonData.city + ", " + jsonData.country
  );
  await expect(page.getByText("📬 Endereço: Avenida Infante Santo")).toHaveText(
    "📬 Endereço: " + jsonData.address
  );
  await expect(page.getByText("A Avenida Infante Santo, uma")).toHaveText(
    jsonData.description[0].text
  );
  await expect(
    page.getByText("Entre os painéis mais notáveis está")
  ).toHaveText(jsonData.description[1].text);
  await expect(page.getByText("Curiosidades:")).toBeVisible();
  await expect(page.getByText("Curiosidades:O painel 'O Mar")).toBeVisible();
  await expect(page.getByText("O painel 'O Mar' foi criado")).toHaveText(
    jsonData.description[2].items[0]
  );
  await expect(page.getByText("Maria Keil é reconhecida como")).toHaveText(
    jsonData.description[2].items[1]
  );
  await expect(page.getByText("A Avenida Infante Santo inclui")).toHaveText(
    jsonData.description[2].items[2]
  );
  await expect(page.getByText("As obras fazem parte de um projeto")).toHaveText(
    jsonData.description[2].items[3]
  );
  await expect(
    page.getByRole("img", { name: "Imagem 4 de Avenida Infante" })
  ).toBeVisible();
  await expect(page.getByText("Painel de azulejos")).toHaveText(
    jsonData.description[3].caption
  );
  await expect(
    page.getByRole("heading", { name: "🖼️ Obras em exibição" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "O Mar" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Voltar para Arte Urbana" })
  ).toBeVisible();
});
