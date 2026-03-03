# Lib Directory

Utility functions and shared logic.

## Files

| File | Description |
|------|-------------|
| `utils.ts` | `cn()` classname merger + utilities |

## Usage

```tsx
import { cn } from "@/lib/utils"

<div className={cn("base-class", condition && "conditional-class")} />
```

## Adding Utilities

1. Add function to `utils.ts` (if small)
2. Create new file for larger utilities
3. Export from `utils.ts` or create index.ts
4. Update this README
