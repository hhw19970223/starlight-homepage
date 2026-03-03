# Molecules

Composite components built from atoms.

## Components

| Component | Description |
|-----------|-------------|
| `FormInput` | Input field with icon and validation |
| `TabSwitcher` | Tab navigation component |
| `SocialButton` | OAuth provider button |
| `CountdownButton` | Button with countdown timer |

## Usage

```tsx
import { FormInput } from "@/components/molecules/FormInput"

<FormInput
  type="email"
  icon={<Mail />}
  placeholder="Email address"
  value={email}
  onChange={setEmail}
/>
```

## Guidelines

- Combine 2-5 atoms
- Accept callbacks for user interactions
- Keep under 80 lines
- Single responsibility
