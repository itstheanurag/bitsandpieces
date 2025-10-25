# GEMINI.md - AI Agent Rulebook for BitsAndPieces

> **Purpose**: This document provides strict rules and guidelines for AI agents (specifically Gemini) working on the BitsAndPieces project. Follow these rules to ensure consistency, quality, and maintainability.

---

## 🎯 Project Context

**BitsAndPieces** is an open-source React component collection library built for modern web applications.

### Project Stack (MANDATORY)

```json
{
  "runtime": "Bun",
  "framework": "Next.js 14+",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "animations": "Framer Motion",
  "components": "shadcn/ui (for Pieces only)",
  "colorScheme": "Neutral colors (slate, zinc, stone, gray)"
}
```

### Project Structure

```
components/
├── bits/           # Copyable design utilities (shadows, borders, backgrounds)
├── pieces/         # Installable React components (navbars, cards, etc.)
├── examples/       # Usage examples
└── docs/          # Documentation
```

---

## 🚫 CRITICAL RULES - NEVER VIOLATE

### Rule 1: Color Palette Restrictions

**ONLY USE NEUTRAL COLORS FROM TAILWIND**

✅ **ALLOWED**:

- `slate-*` 
- `zinc-*`
- `stone-*`
- `gray-*`
- `neutral-*` (primary choice)

❌ **FORBIDDEN**:

- NO vibrant colors (red, blue, green, purple, pink, etc.)
- NO custom color values (`#hexcode`, `rgb()`, `hsl()`)
- NO colored shadows unless using neutral variants

```typescript
// ✅ CORRECT
className = "bg-slate-900 border-slate-700 text-slate-100";

// ❌ WRONG
className = "bg-blue-500 border-purple-600 text-red-100";
```

### Rule 2: Dark Mode is MANDATORY

**EVERY component MUST support both light and dark modes**

✅ **CORRECT APPROACH**:

```typescript
// Use Tailwind's dark: modifier
className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"

// Or use isDark prop pattern (for Bits)
className={isDark ? 'bg-slate-950' : 'bg-white'}
```

❌ **FORBIDDEN**:

- Light mode only implementations
- Hard-coded colors that don't change with theme
- Missing dark mode variants

### Rule 3: Technology Stack Compliance

**ONLY USE APPROVED TECHNOLOGIES**

✅ **MUST USE**:

- **Bun** for package management and scripts
- **Next.js** patterns (App Router preferred)
- **TypeScript** with strict typing (no `any` types)
- **Tailwind CSS** utility classes ONLY
- **Framer Motion** for animations
- **shadcn/ui** components (for Pieces only)

❌ **NEVER USE**:

- npm or yarn commands (use `bun` instead)
- Custom CSS files or `<style>` tags
- Inline styles (except for dynamic values)
- Animation libraries other than Framer Motion
- Any UI library other than shadcn/ui for Pieces

### Rule 4: Component Categories

**Respect the Bits vs Pieces distinction**

#### BITS (Copyable Utilities)

- Simple design utilities
- Pure Tailwind classes
- No external dependencies
- Exported as arrays or objects
- Examples: shadows, borders, backgrounds, animations

```typescript
// ✅ CORRECT: Bit format
export const shadowStyles = [
  {
    name: "Soft Shadow",
    class: "shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50",
    description: "Subtle elevation effect",
  },
];
```

#### PIECES (React Components)

- Full React components
- Can use shadcn/ui components
- Can have complex logic
- Installable via CLI
- Examples: navbars, cards, forms, modals

```typescript
// ✅ CORRECT: Piece format
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface FloatingNavbarProps {
  items: Array<{ label: string; href: string }>;
}

export function FloatingNavbar({ items }: FloatingNavbarProps) {
  // Component implementation
}
```

---

## 📋 MANDATORY PATTERNS

### Pattern 1: TypeScript Typing

**NO `any` TYPES - EVER**

```typescript
// ✅ CORRECT
interface ButtonProps {
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

// ❌ WRONG
interface ButtonProps {
  variant?: any;
  onClick?: any;
  children: any;
}
```

### Pattern 2: Framer Motion Usage

**Use Framer Motion for ALL animations**

```typescript
// ✅ CORRECT
import { motion } from "framer-motion"

<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
  className="..."
>
  Content
</motion.div>

// ❌ WRONG: Using CSS animations or other libraries
<div className="animate-fadeIn">Content</div>
```

### Pattern 3: Responsive Design

**Mobile-first, always responsive**

```typescript
// ✅ CORRECT
className = "w-full md:w-1/2 lg:w-1/3 p-4 md:p-6 lg:p-8";

// ❌ WRONG: Desktop-only or fixed sizes
className = "w-[800px] p-8";
```

### Pattern 4: Accessibility

**WCAG 2.1 Level AA compliance required**

```typescript
// ✅ CORRECT
<button
  aria-label="Close menu"
  onClick={handleClose}
  className="..."
>
  <X className="h-4 w-4" />
</button>

// ❌ WRONG: Missing accessibility
<button onClick={handleClose}>
  <X className="h-4 w-4" />
</button>
```

---

## 🎨 STYLING RULES

### Rule 1: Tailwind Only

**NO custom CSS - Use Tailwind utilities exclusively**

```typescript
// ✅ CORRECT
<div className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-900 rounded-lg shadow-md">

// ❌ WRONG
<div style={{ display: 'flex', padding: '16px', backgroundColor: '#f1f5f9' }}>
```

### Rule 2: Dark Mode Implementation

**Use Tailwind's dark: modifier**

```typescript
// ✅ CORRECT
className="bg-white dark:bg-slate-950
           text-slate-900 dark:text-slate-100
           border-slate-200 dark:border-slate-800"

// ❌ WRONG
className="bg-white text-slate-900"
```

### Rule 3: Neutral Color Shades

**Use appropriate shades for hierarchy**

```
Background: 50, 100, 950
Borders: 200, 300, 700, 800
Text: 600, 700, 900, 100, 200
Accents: 400, 500
```

```typescript
// ✅ CORRECT
<div className="bg-slate-50 dark:bg-slate-950">
  <h1 className="text-slate-900 dark:text-slate-100">Title</h1>
  <p className="text-slate-600 dark:text-slate-400">Description</p>
  <div className="border border-slate-200 dark:border-slate-800">Content</div>
</div>
```

---

## 🎭 ANIMATION RULES

### Rule 1: Framer Motion Variants

**Use variants pattern for complex animations**

```typescript
// ✅ CORRECT
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>;
```

### Rule 2: Performance

**Use GPU-accelerated properties**

✅ **GOOD**: `opacity`, `transform`, `scale`, `rotate`, `translateX/Y`
❌ **BAD**: `width`, `height`, `top`, `left`, `margin`

### Rule 3: Reduced Motion

**Respect user preferences**

```typescript
// ✅ CORRECT
import { useReducedMotion } from "framer-motion"

const shouldReduceMotion = useReducedMotion();

<motion.div
  animate={{
    opacity: 1,
    y: shouldReduceMotion ? 0 : -20
  }}
  transition={{
    duration: shouldReduceMotion ? 0 : 0.3
  }}
>
```

---

## 📦 COMPONENT STRUCTURE RULES

### For PIECES (React Components)

**Mandatory File Structure**:

```
pieces/floating-navbar/
├── FloatingNavbar.tsx       # Main component (REQUIRED)
├── index.ts                 # Export file (REQUIRED)
├── README.md                # Documentation (REQUIRED)
├── package.json             # Dependencies (REQUIRED)
└── FloatingNavbar.test.tsx  # Tests (OPTIONAL)
```

**Component Template**:

````typescript
"use client"; // If using client-side features

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * FloatingNavbar - A floating navigation component
 *
 * @example
 * ```tsx
 * <FloatingNavbar
 *   items={[
 *     { label: "Home", href: "/" },
 *     { label: "About", href: "/about" }
 *   ]}
 * />
 * ```
 */
interface FloatingNavbarProps {
  /** Navigation items to display */
  items: Array<{
    label: string;
    href: string;
    icon?: React.ReactNode;
  }>;
  /** Position of the navbar */
  position?: "top" | "bottom";
  /** Additional CSS classes */
  className?: string;
}

export function FloatingNavbar({
  items,
  position = "top",
  className,
}: FloatingNavbarProps) {
  // Implementation

  return (
    <motion.nav
      initial={{ opacity: 0, y: position === "top" ? -20 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "fixed z-50 flex items-center gap-4 px-6 py-3 rounded-full",
        "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md",
        "border border-slate-200 dark:border-slate-800",
        "shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50",
        position === "top" ? "top-4" : "bottom-4",
        "left-1/2 -translate-x-1/2",
        className
      )}
    >
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
        >
          {item.icon && <span className="mr-2">{item.icon}</span>}
          {item.label}
        </a>
      ))}
    </motion.nav>
  );
}
````

### For BITS (Design Utilities)

**Mandatory Structure**:

```typescript
// bits/borders/border-styles.ts

export interface BorderStyle {
  name: string;
  outerClass: string;
  innerClass: string;
  contentWrapper?: (children: React.ReactNode) => React.ReactElement;
  description?: string;
}

export const borderStyles: BorderStyle[] = [
  {
    name: "Corner Plus Signs",
    outerClass:
      "relative px-8 py-6 rounded-lg border border-slate-200 dark:border-slate-800",
    innerClass: "relative z-10",
    contentWrapper: (children) => (
      <>
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-x-0 h-[2px] bg-slate-400 dark:bg-slate-600 top-1/2 -translate-y-1/2" />
          <div className="absolute inset-y-0 w-[2px] bg-slate-400 dark:bg-slate-600 left-1/2 -translate-x-1/2" />
        </div>
        {/* Repeat for other corners */}
        {children}
      </>
    ),
    description: "Modern corner plus sign decorations",
  },
];
```

---

## 🧪 TESTING REQUIREMENTS

### Rule 1: Type Safety

```bash
# Must pass without errors
bun run tsc --noEmit
```

### Rule 2: Component Testing

```typescript
// Use React Testing Library
import { render, screen } from "@testing-library/react";
import { FloatingNavbar } from "./FloatingNavbar";

describe("FloatingNavbar", () => {
  it("renders navigation items", () => {
    const items = [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
    ];

    render(<FloatingNavbar items={items} />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });
});
```

---

## 📝 DOCUMENTATION REQUIREMENTS

### Rule 1: JSDoc Comments

**Every exported component/function must have JSDoc**

````typescript
/**
 * FloatingNavbar Component
 *
 * A responsive navigation bar that floats above content with blur backdrop.
 * Supports both light and dark modes with smooth animations.
 *
 * @param items - Array of navigation items with label and href
 * @param position - Position of navbar (top or bottom)
 * @param className - Additional Tailwind classes
 *
 * @example
 * ```tsx
 * <FloatingNavbar
 *   items={[{ label: "Home", href: "/" }]}
 *   position="top"
 * />
 * ```
 */
````

### Rule 2: README.md Structure

Every piece must include:

```markdown
# ComponentName

Brief description

## Features

- Feature 1
- Feature 2

## Installation

\`\`\`bash
bun bunx @bitsandpieces/cli add component-name
\`\`\`

## Usage

\`\`\`tsx
import { ComponentName } from "@/components/pieces/component-name"

export default function Page() {
return <ComponentName {...props} />
}
\`\`\`

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| ...  | ...  | ...     | ...         |

## Accessibility

- Keyboard navigation support
- Screen reader friendly
- Focus management

## Customization

How to customize...
```

---

## ⚡ PERFORMANCE RULES

### Rule 1: Bundle Size

- Minimize dependencies
- Tree-shakeable exports
- No unnecessary imports

### Rule 2: React Optimization

```typescript
// ✅ Use React.memo for expensive components
export const ExpensiveComponent = React.memo(function ExpensiveComponent(
  props
) {
  // ...
});

// ✅ Use useMemo for expensive calculations
const sortedItems = React.useMemo(
  () => items.sort((a, b) => a.name.localeCompare(b.name)),
  [items]
);

// ✅ Use useCallback for event handlers passed to children
const handleClick = React.useCallback(() => {
  // handler logic
}, [dependencies]);
```

### Rule 3: Code Splitting

```typescript
// ✅ Dynamic imports for heavy components
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <div>Loading...</div>,
});
```

---

## 🚨 VALIDATION CHECKLIST

Before submitting code, verify:

### ✅ Code Quality

- [ ] TypeScript with no `any` types
- [ ] No console.log or debug code
- [ ] Proper error handling
- [ ] Comments for complex logic

### ✅ Styling

- [ ] Only Tailwind utility classes
- [ ] Only neutral colors (slate, zinc, stone, gray)
- [ ] Dark mode support with `dark:` prefix
- [ ] Responsive design (mobile-first)
- [ ] No custom CSS or inline styles

### ✅ Animations

- [ ] Uses Framer Motion exclusively
- [ ] Respects reduced motion preferences
- [ ] GPU-accelerated properties only
- [ ] Smooth 60fps animations

### ✅ Accessibility

- [ ] ARIA labels present
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Semantic HTML used
- [ ] Color contrast meets WCAG AA

### ✅ Dependencies

- [ ] Uses Bun (not npm/yarn)
- [ ] shadcn/ui for base components (Pieces only)
- [ ] Framer Motion for animations
- [ ] No unnecessary dependencies

### ✅ Documentation

- [ ] JSDoc comments on all exports
- [ ] README.md included
- [ ] Usage examples provided
- [ ] Props documented

---

## 🎯 GEMINI-SPECIFIC INSTRUCTIONS

### When Asked to Create a Component:

1. **Always ask for clarification** if requirements are vague
2. **Start with the structure** before implementation
3. **Show dark mode** in all examples
4. **Use neutral colors** exclusively
5. **Include Framer Motion** animations
6. **Provide complete TypeScript** types
7. **Add accessibility** features by default
8. **Make it responsive** automatically

### Response Format:

```
I'll create [ComponentName] following BitsAndPieces standards.

**Key Decisions:**
- Using slate-* colors for neutral palette
- Framer Motion for animations
- Dark mode support via Tailwind dark: modifier
- Mobile-first responsive design

[Provide complete implementation]

**Validation:**
✅ TypeScript (no any types)
✅ Neutral colors only
✅ Dark mode support
✅ Framer Motion animations
✅ Accessibility features
✅ Responsive design
✅ Documentation included
```

---

## ❌ COMMON MISTAKES TO AVOID

1. **Using vibrant colors** - Only neutral colors allowed
2. **Forgetting dark mode** - Must support both themes
3. **Using CSS animations** - Use Framer Motion
4. **Missing TypeScript types** - Strict typing required
5. **Ignoring accessibility** - WCAG AA compliance needed
6. **Using npm/yarn** - Use Bun exclusively
7. **Custom CSS** - Tailwind utilities only
8. **Any types** - Proper TypeScript typing required
9. **Not testing responsive** - Mobile-first approach
10. **Missing documentation** - JSDoc and README required

---

## 📞 WHEN IN DOUBT

If you're unsure about:

- **Colors**: Use `slate-*` (default safe choice)
- **Animation**: Use Framer Motion
- **Components**: Check if shadcn/ui has it
- **Styling**: Use Tailwind utilities
- **Dark Mode**: Use `dark:` prefix
- **Types**: Be explicit, avoid `any`

---

**Remember**: Quality over speed. Take time to follow these rules correctly rather than rushing and violating standards.
