/* import { test, expect } from "@playwright/test";

const PAGE_URL = "http://37.27.45.218:81/";

test("has leaderboard", async ({ page }) => {
	await page.goto(PAGE_URL);

	await expect(page.getByRole("heading", { name: "Edetabel" })).toBeVisible();
});

test("can log in as user", async ({ page }) => {
	await page.goto(PAGE_URL);

	await page.getByRole("button", { name: "Logi Sisse" }).click();

	await page.getByLabel("Kasutajanimi").fill("Mart");
	await page.getByLabel("Parool").fill("qwerty");

	await page.getByRole("button", { name: "Logi Sisse" }).click();

	await expect(page.getByRole("button", { name: "Logi Välja" })).toBeVisible();
});

test("can choose difficulty", async ({ page }) => {
	await page.goto(PAGE_URL);

	await page.getByRole("button", { name: "Logi Sisse" }).click();

	await page.getByLabel("Kasutajanimi").fill("Mart");
	await page.getByLabel("Parool").fill("qwerty");

	await page.getByRole("button", { name: "Logi Sisse" }).click();

	await page.getByRole("button", { name: "Keskmine" }).click();

	const selector = page.getByRole("button", { name: "Keskmine" });
	await expect(selector).toHaveClass(/bg-green-500/);

	await page.getByRole("button", { name: "Mängima" }).click();

	await expect(page.getByText("Aega jäänud")).toBeVisible();
});
 */
