import { test, expect } from "@playwright/test"

test.describe("SEO", () => {
  test("home page should have correct meta tags", async ({ page }) => {
    await page.goto("/")
    
    // Title
    await expect(page).toHaveTitle(/ABC|Cross-Border/i)
    
    // Meta description
    const metaDesc = page.locator('meta[name="description"]')
    await expect(metaDesc).toHaveAttribute("content", /.+/)
    
    // Open Graph
    const ogTitle = page.locator('meta[property="og:title"]')
    await expect(ogTitle).toHaveAttribute("content", /.+/)
  })

  test("sitemap should be accessible", async ({ page }) => {
    const response = await page.goto("/sitemap.xml")
    expect(response?.status()).toBe(200)
  })

  test("robots.txt should be accessible", async ({ page }) => {
    const response = await page.goto("/robots.txt")
    expect(response?.status()).toBe(200)
  })

  test("auth pages should have noindex", async ({ page }) => {
    await page.goto("/login")
    const robots = page.locator('meta[name="robots"]')
    await expect(robots).toHaveAttribute("content", /noindex/)
  })
})
