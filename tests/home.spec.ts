import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://everything-about-art.vercel.app/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Tudo sobre arte/);
});

test("Validate main page title", async ({ page }) => {
  await page.goto("https://everything-about-art.vercel.app/");
  await expect(page.getByText("EVERYTHING ABOUT ART")).toBeVisible();
});

test("Validate main menu", async ({ page }) => {
  await page.goto("https://everything-about-art.vercel.app/");
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
  await page.goto("https://everything-about-art.vercel.app/");
  await expect(page.getByText("EVERY THING ABOUT ART ©")).toBeVisible();
});

test("Enter artwork index", async ({ page }) => {
  await page.goto("https://everything-about-art.vercel.app/");
  await page.getByRole("link", { name: "OBRAS" }).click();
  await expect(page.getByText("Obras de Arte")).toBeVisible();
  await expect(
    page.getByRole("textbox", { name: "Buscar por título ou artista" })
  ).toBeVisible();
  await expect(page.getByRole("combobox")).toHaveText(
    "PaísesFrançaEspanhaAlemanhaRússiaHolandaPortugalItáliaÁustriaNoruegaBrasil"
  );
});
