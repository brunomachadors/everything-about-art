import { test, expect } from "@playwright/test";

test("All about us", async ({ page }) => {
  await page.goto("");
  await page.getByRole("link", { name: "SOBRE" }).click();
  await expect(page.getByRole("heading", { name: "Sobre nós" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "🎯 Nossa Missão" })
  ).toBeVisible();
  await expect(page.getByText('O projeto "Everything About')).toHaveText(
    'O projeto "Everything About Art" nasceu da paixão compartilhada por arte e tecnologia. Nosso objetivo é criar uma plataforma que una essas duas áreas, proporcionando uma experiência enriquecedora para os amantes da arte e desenvolvedores.'
  );
  await expect(
    page.getByRole("heading", { name: "🛤️ Nossa Jornada" })
  ).toBeVisible();
  await expect(page.getByText("Tudo começou quando Bruno")).toHaveText(
    'Tudo começou quando Bruno Machado, profissional da Mindera, conheceu Luís Moreira durante um estágio focado em neurodiversidade. Bruno tornou-se mentor de Luís, ensinando sobre qualidade e testes de software. Durante esse período, desenvolveram o hábito de, após o almoço, assistir a episódios do programa "duARTe: uma peça de arte", descobrindo um interesse comum por arte.'
  );
  await expect(page.getByText("Após o término do estágio,")).toHaveText(
    "Após o término do estágio, continuaram a se reunir e decidiram iniciar este projeto. Inspirados pelas obras apresentadas no programa, criaram uma página frontend e APIs para alimentar o site com informações, visando aprimorar suas habilidades e construir um portfólio. Aplicaram diversas técnicas de teste, tanto manuais quanto automáticas, ao longo do desenvolvimento."
  );
  await expect(
    page.getByRole("heading", { name: "👥 Quem Somos" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Bruno Machado", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Bruno Machado" })
  ).toBeVisible();
  await expect(page.getByText("Profissional da Mindera, Bruno")).toHaveText(
    "Profissional da Mindera, Bruno atua na área de qualidade de software. Com experiência em testes e mentoria, é apaixonado por arte e tecnologia."
  );
  await expect(
    page.getByRole("link", { name: "LinkedIn de Bruno Machado" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Luís Moreira", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Luís Moreira" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "LinkedIn de Luís Moreira" })
  ).toBeVisible();
});
