import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Tudo sobre arte/);
});

test("Validate main page title", async ({ page }) => {
  await page.goto("");
  await expect(page.getByText("EVERYTHING ABOUT ART")).toBeVisible();
});

test("Validate main menu", async ({ page }) => {
  await page.goto("");
  await expect(page.getByRole("link", { name: "HOME" })).toHaveText("HOME");
  await expect(page.getByRole("link", { name: "OBRAS" })).toHaveText("OBRAS");
  await expect(page.getByRole("link", { name: "ARTISTAS" })).toHaveText(
    "ARTISTAS"
  );
  await expect(page.getByRole("link", { name: "MUSEUS" })).toHaveText("MUSEUS");
  await expect(page.getByRole("link", { name: "ARTE URBANA" })).toHaveText(
    "ARTE URBANA"
  );
  await expect(page.getByRole("link", { name: "SOBRE" })).toHaveText("SOBRE");
});

test("Validate footer", async ({ page }) => {
  await page.goto("");
  await expect(page.getByText("EVERY THING ABOUT ART ©")).toBeVisible();
});

test("Enter artwork index", async ({ page }) => {
  await page.goto("");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar por título ou artista" })
  ).toBeVisible();
  await expect(page.getByRole("combobox")).toHaveText(
    "PaísesFrançaEspanhaAlemanhaRússiaHolandaPortugalItáliaÁustriaNoruegaBrasil"
  );
});

test("Enter artist index", async ({ page }) => {
  await page.goto("");
  await page.getByRole("link", { name: "ARTISTAS" }).click();
  await expect(page.getByRole("heading", { name: "Artistas" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar artista..." })
  ).toBeVisible();
});

test("Enter museum index", async ({ page }) => {
  await page.goto("");
  await page.getByRole("link", { name: "MUSEUS" }).click();
  await expect(page.getByRole("heading", { name: "Museus" })).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar museu..." })
  ).toBeVisible();
});

test("Enter street art index", async ({ page }) => {
  await page.goto("");
  await page.getByRole("link", { name: "ARTE URBANA" }).click();
  await expect(
    page.getByRole("heading", { name: "Arte Urbana" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Avenida Infante Santo" })
  ).toBeVisible();
});

test("Enter about us", async ({ page }) => {
  await page.goto("");
  await page.getByRole("link", { name: "SOBRE" }).click();
  await expect(page.getByRole("heading", { name: "Sobre nós" })).toBeVisible();
});
