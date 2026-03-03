import { test, expect } from "@playwright/test"

test.describe("Authentication Pages", () => {
  test.describe("Login Page", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/login")
    })

    test("should display login form", async ({ page }) => {
      await expect(page.getByRole("heading", { name: /welcome/i })).toBeVisible()
      await expect(page.getByPlaceholder(/email/i)).toBeVisible()
    })

    test("should switch between email code and password tabs", async ({ page }) => {
      // Default is email code tab
      await expect(page.getByPlaceholder(/verification code/i)).toBeVisible()
      
      // Switch to password tab
      await page.getByRole("button", { name: /password/i }).click()
      await expect(page.getByPlaceholder(/password/i)).toBeVisible()
    })

    test("should have link to register page", async ({ page }) => {
      const registerLink = page.getByRole("link", { name: /create account/i })
      await expect(registerLink).toBeVisible()
      await registerLink.click()
      await expect(page).toHaveURL(/\/register/)
    })

    test("should have link to forgot password", async ({ page }) => {
      const forgotLink = page.getByRole("link", { name: /forgot password/i })
      await expect(forgotLink).toBeVisible()
      await forgotLink.click()
      await expect(page).toHaveURL(/\/forgot-password/)
    })

    test("should validate email format", async ({ page }) => {
      const emailInput = page.getByPlaceholder(/email/i)
      await emailInput.fill("invalid-email")
      await page.getByRole("button", { name: /sign in/i }).click()
      // HTML5 validation should prevent submission
    })
  })

  test.describe("Register Page", () => {
    test("should display registration form", async ({ page }) => {
      await page.goto("/register")
      await expect(page.getByRole("heading", { name: /create account/i })).toBeVisible()
      await expect(page.getByPlaceholder(/full name/i)).toBeVisible()
      await expect(page.getByPlaceholder(/email/i)).toBeVisible()
    })

    test("should have link back to login", async ({ page }) => {
      await page.goto("/register")
      const loginLink = page.getByRole("link", { name: /sign in/i })
      await expect(loginLink).toBeVisible()
    })
  })

  test.describe("Forgot Password Page", () => {
    test("should display forgot password form", async ({ page }) => {
      await page.goto("/forgot-password")
      await expect(page.getByRole("heading", { name: /forgot password/i })).toBeVisible()
      await expect(page.getByPlaceholder(/email/i)).toBeVisible()
    })
  })
})
