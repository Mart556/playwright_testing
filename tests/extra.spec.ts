const PAGE_URL = "https://siseveeb.voco.ee/veebivormid/tunniplaan";

import { test, expect } from "@playwright/test";

/* test("open VS24 tunniplaan", async ({ page }) => {
	await page.goto(PAGE_URL);

	await page.getByRole("link", { name: "VS24" }).click();

	await page.waitForTimeout(2000);

	await expect(page.locator(".chosen-single").getByText("VS24")).toBeVisible();

	await page.screenshot({ path: "tunniplaan.png", fullPage: true });
}); */

/* test("check Aly Valvas timetable", async ({ page }) => {
	await page.goto(PAGE_URL);

	await page.waitForTimeout(1000);

	await page.locator("#ui-id-2").click();

	await page.waitForTimeout(1000);

	await page.screenshot({ path: "aly_valvas.png", fullPage: true });

	await page.getByRole("link", { name: "Valvas, Aly" }).click();

	await page.waitForTimeout(2000);

	await page.screenshot({ path: "aly_valvas.png", fullPage: true });
});

test("test tunniplaan performance", async ({ page }) => {
	const start = performance.now();
	await page.goto(PAGE_URL);
	const end = performance.now();
	const loadTime = end - start;
	console.log(`Page load time: ${loadTime} ms`);
	expect(loadTime).toBeLessThan(3000);
}); */

const PAGE_URL2 = "https://siseveeb.voco.ee/";

test("false credentials login test", async ({ page }) => {
	await page.goto(PAGE_URL2);
	await page.locator("#username").fill("ValeKasutaja");
	await page.locator("#password").fill("ValeParool");
	await page.locator("#form_submit").click();
	await page.waitForTimeout(1000);
	await page.screenshot({ path: "false.png", fullPage: true });
});
