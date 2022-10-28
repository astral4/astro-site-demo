import { test, expect } from "@playwright/test";

test("homepage has proper title in title", async ({
	page,
}) => {
	await page.goto("http://localhost:3000/introduction");

	// Expect a title "to contain" a substring.

	await expect(page).toHaveTitle("Data Structures and Algorithms");
});
