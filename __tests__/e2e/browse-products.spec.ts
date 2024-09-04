import { test, expect } from "@playwright/test";

test("can open page", async ({ page }) => {
  await page.goto("http://localhost:8081");

  const firstProduct = page.getByLabel(
    "Product: Essence Mascara Lash Princess",
  );

  await expect(firstProduct).toBeVisible();
});

test("can browse products", async ({ page }) => {
  await page.goto("http://localhost:8081");

  const firstProduct = page.getByLabel(
    "Product: Essence Mascara Lash Princess",
  );

  await expect(firstProduct).toBeVisible();

  const lastProduct = page.getByLabel("Product: Annibale Colombo Sofa");
  await lastProduct.scrollIntoViewIfNeeded();
  await expect(lastProduct).toBeVisible();

  const nextPage = page.getByLabel("Next page");
  await nextPage.click();

  await expect(
    page.getByLabel("Product: Bedside Table African Cherry"),
  ).toBeVisible();

  const chooseCategory = page.getByLabel("Choose category");
  await chooseCategory.click();

  const fragrancesCategory = page.getByLabel("Fragrances");
  await fragrancesCategory.click();

  await expect(page.getByLabel("Product: Calvin Klein CK One")).toBeVisible();
});
