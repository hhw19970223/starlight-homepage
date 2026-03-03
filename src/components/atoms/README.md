# Atoms

Basic building blocks - smallest reusable UI components.

## Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Button` | `variant`, `size`, `disabled`, `loading` | Primary action button with multiple variants |

## Usage

```tsx
import { Button } from "@/components/atoms/Button"

<Button variant="primary" size="lg">
  Click Me
</Button>
```

## Design Tokens

- Min height: 44px (touch target)
- Border radius: `rounded-lg` (8px)
- Font weight: `font-semibold` (600)

## Adding New Atoms

1. Create `{ComponentName}.tsx`
2. Export from `index.ts`
3. Keep under 50 lines
4. No business logic
5. Update this README
