import { test, expect } from "@playwright/test"

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("should display hero section with correct content", async ({ page }) => {
    await expect(page.locator("h1")).toBeVisible()
    await expect(page.getByRole("link", { name: /get started/i })).toBeVisible()
  })

  test("should have working navigation", async ({ page }) => {
    const header = page.locator("header")
    await expect(header).toBeVisible()
    await expect(header.getByRole("link", { name: /login/i })).toBeVisible()
  })

  test("should display all main sections", async ({ page }) => {
    // Solutions section
    await expect(page.getByText(/comprehensive solutions/i)).toBeVisible()
    // Platforms section
    await expect(page.getByText(/supported platforms/i)).toBeVisible()
    // Features section
    await expect(page.getByText(/why choose/i)).toBeVisible()
    // CTA section
    await expect(page.getByText(/ready to scale/i)).toBeVisible()
    // Footer
    await expect(page.locator("footer")).toBeVisible()
  })

  test("should be responsive on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await expect(page.locator("header")).toBeVisible()
    // Mobile menu button should be visible
    await expect(page.getByRole("button", { name: /menu/i })).toBeVisible()
  })
})
