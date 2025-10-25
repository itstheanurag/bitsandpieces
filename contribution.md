# Contributing to BitsAndPieces

Thank you for your interest in contributing to **BitsAndPieces**! This open-source React component collection library aims to provide beautiful, modern UI components for developers.

## 📚 Project Structure

BitsAndPieces is divided into two main categories:

### **Bits** 🎨

Small, reusable design utilities that can be copied directly into your project:

- Shadows
- Borders
- Backgrounds
- Animations
- Gradients
- Typography styles

### **Pieces** 🧩

Full-featured React components built with shadcn/ui that can be installed via CLI:

- Navbars
- Login pages
- Buttons
- Cards
- Carousels
- Forms
- And more...

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git
- Basic knowledge of React and TypeScript
- Familiarity with Tailwind CSS

### Setup

1. **Fork the repository**

   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/bitsandpieces.git
   cd bitsandpieces
   ```

2. **Install dependencies**

   ```bash
   bun install
   # or
   npm install
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Contribution Guidelines

### For Bits (Design Utilities)

1. **File Structure**

   ```
   src/bits/
   ├── shadows/
   │   ├── shadow-styles.ts
   │   └── README.md
   ├── borders/
   │   ├── border-styles.ts
   │   └── README.md
   └── backgrounds/
       ├── background-styles.ts
       └── README.md
   ```

2. **Code Standards**

   - Use **Tailwind CSS** classes only
   - Use **shadcn/ui color palette** (slate, zinc, neutral, stone, etc.)
   - Provide both light and dark mode variants
   - Export as an array of objects with clear naming

3. **Example Bit Contribution**

   ```typescript
   // src/bits/shadows/shadow-styles.ts
   export const shadowStyles = [
     {
       name: "Soft Shadow",
       class: "shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50",
       description: "A soft, elevated shadow effect",
     },
     // ... more styles
   ];
   ```

4. **Documentation**
   - Include a `README.md` in each bit category
   - Show usage examples
   - Include visual previews if possible

### For Pieces (React Components)

1. **File Structure**

   ```
   src/pieces/
   ├── floating-navbar/
   │   ├── FloatingNavbar.tsx
   │   ├── FloatingNavbar.stories.tsx
   │   ├── README.md
   │   └── package.json
   └── animated-card/
       ├── AnimatedCard.tsx
       ├── AnimatedCard.stories.tsx
       ├── README.md
       └── package.json
   ```

2. **Component Standards**

   - Built with **shadcn/ui** components as base
   - Fully typed with **TypeScript**
   - Responsive design (mobile-first)
   - Accessible (ARIA labels, keyboard navigation)
   - Support light and dark modes
   - Use **Tailwind CSS** for styling
   - Include prop documentation

3. **Example Piece Contribution**

   ```tsx
   // src/pieces/floating-navbar/FloatingNavbar.tsx
   import React from "react";

   interface FloatingNavbarProps {
     /** Navigation items to display */
     items: Array<{ label: string; href: string }>;
     /** Position of the navbar */
     position?: "top" | "bottom";
     /** Custom className */
     className?: string;
   }

   export const FloatingNavbar: React.FC<FloatingNavbarProps> = ({
     items,
     position = "top",
     className,
   }) => {
     // Component implementation
   };
   ```

4. **Package Configuration**
   Each piece must have a `package.json`:

   ```json
   {
     "name": "@bitsandpieces/floating-navbar",
     "version": "1.0.0",
     "description": "A floating navigation bar component",
     "main": "FloatingNavbar.tsx",
     "dependencies": {
       "@radix-ui/react-navigation-menu": "^1.0.0"
     }
   }
   ```

5. **Installation Command**
   Components should be installable via:
   ```bash
   bunx @bitsandpieces/cli add floating-navbar
   # or
   npx @bitsandpieces/cli add floating-navbar
   ```

## 🎨 Design Standards

### Colors

- Use **shadcn/ui color system**: slate, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
- Always provide dark mode variants
- Use semantic color names (primary, secondary, destructive, etc.)

### Accessibility

- Minimum contrast ratio of 4.5:1 for text
- Keyboard navigable
- Screen reader friendly (proper ARIA labels)
- Focus indicators visible

### Responsiveness

- Mobile-first approach
- Test on common breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Use Tailwind's responsive utilities

## 🧪 Testing

1. **Visual Testing**

   - Test in light and dark mode
   - Test on different screen sizes
   - Test in different browsers (Chrome, Firefox, Safari)

2. **Component Testing**

   ```bash
   bun test
   # or
   npm test
   ```

3. **Accessibility Testing**
   - Use browser dev tools
   - Test keyboard navigation
   - Use screen reader if possible

## 📤 Submitting Changes

1. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add floating navbar component"
   ```

2. **Follow conventional commits**

   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

3. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template
   - Link any relevant issues

## 📋 Pull Request Checklist

- [ ] Code follows the project's style guidelines
- [ ] Component is fully typed with TypeScript
- [ ] Includes light and dark mode support
- [ ] Responsive on all breakpoints
- [ ] Accessible (keyboard navigation, ARIA labels)
- [ ] Documentation is complete (README, prop descriptions)
- [ ] Tests pass (if applicable)
- [ ] No console errors or warnings
- [ ] Screenshots/GIFs included (for visual components)

## 🤝 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow the project's guidelines

## 💡 Need Help?

- Open an issue for bugs or feature requests
- Join our Discord community (link)
- Check existing issues and PRs
- Read the documentation

## 🎯 Priority Areas

We're especially looking for contributions in:

- [ ] Accessibility improvements
- [ ] Dark mode refinements
- [ ] Mobile responsiveness
- [ ] Performance optimizations
- [ ] Documentation and examples
- [ ] New component ideas

## 📜 License

By contributing, you agree that your contributions will be licensed under the project's MIT License.

---

Thank you for contributing to BitsAndPieces! 🎉
