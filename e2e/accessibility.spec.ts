import { test, expect } from "@playwright/test"

test.describe("Accessibility", () => {
  test("home page should have proper heading hierarchy", async ({ page }) => {
    await page.goto("/")
    
    // Should have exactly one h1
    const h1s = page.locator("h1")
    await expect(h1s).toHaveCount(1)
    
    // All images should have alt text
    const images = page.locator("img")
    const count = await images.count()
    for (let i = 0; i < count; i++) {
      const img = images.nth(i)
      await expect(img).toHaveAttribute("alt")
    }
  })

  test("interactive elements should have min 44px touch target", async ({ page }) => {
    await page.goto("/")
    
    const buttons = page.locator("button")
    const count = await buttons.count()
    for (let i = 0; i < Math.min(count, 5); i++) {
      const button = buttons.nth(i)
      const box = await button.boundingBox()
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(44)
      }
    }
  })

  test("forms should have associated labels", async ({ page }) => {
    await page.goto("/login")
    
    const inputs = page.locator('input:not([type="hidden"]):not([type="checkbox"])')
    const count = await inputs.count()
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i)
      // Should have placeholder or aria-label
      const placeholder = await input.getAttribute("placeholder")
      const ariaLabel = await input.getAttribute("aria-label")
      expect(placeholder || ariaLabel).toBeTruthy()
    }
  })
})
