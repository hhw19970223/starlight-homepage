# E2E Tests

End-to-end tests using [Playwright](https://playwright.dev/).

## Structure

```
e2e/
├── README.md           # This documentation
├── home.spec.ts        # Homepage tests
├── auth.spec.ts        # Authentication flow tests
├── seo.spec.ts         # SEO and meta tags tests
└── accessibility.spec.ts # WCAG accessibility tests
```

## Running Tests

```bash
# Run all tests
npm run test:e2e

# Run with UI
npm run test:e2e:ui

# Run specific test file
npx playwright test e2e/home.spec.ts

# Run in debug mode
npx playwright test --debug
```

## Test Coverage

| Module | Tests | Description |
|--------|-------|-------------|
| `home.spec.ts` | 4 | Hero, navigation, sections, responsive |
| `auth.spec.ts` | 7 | Login, register, forgot-password flows |
| `seo.spec.ts` | 4 | Meta tags, sitemap, robots |
| `accessibility.spec.ts` | 3 | Headings, touch targets, form labels |

## Writing New Tests

1. Create new file: `e2e/{feature}.spec.ts`
2. Use `test.describe()` for grouping
3. Use `test.beforeEach()` for setup
4. Follow naming: `should {action} when {condition}`

## Configuration

See `playwright.config.ts` for:
- Browser settings (Chrome, Mobile)
- Base URL configuration
- Screenshot and trace settings
