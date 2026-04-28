# 📋 Manual Copy Guide - Get Your Code to VS Code

Since you can't download directly, follow these steps to manually copy the code.

## 🎯 Step-by-Step: Copy Your Code

### Step 1: Create Project Folder on Your Computer

```bash
# On your computer, create a new folder
mkdir union-international-website
cd union-international-website
```

### Step 2: Copy Essential Files

Copy these files **ONE BY ONE** from Figma Make to your computer:

---

## 📄 ROOT FILES (Copy to root folder)

### 1. package.json
```json
{
  "name": "union-international-website",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emotion/react": "11.14.0",
    "@emotion/styled": "11.14.1",
    "@mui/icons-material": "7.3.5",
    "@mui/material": "7.3.5",
    "@popperjs/core": "2.11.8",
    "@radix-ui/react-accordion": "1.2.3",
    "@radix-ui/react-alert-dialog": "1.1.6",
    "@radix-ui/react-aspect-ratio": "1.1.2",
    "@radix-ui/react-avatar": "1.1.3",
    "@radix-ui/react-checkbox": "1.1.4",
    "@radix-ui/react-collapsible": "1.1.3",
    "@radix-ui/react-context-menu": "2.2.6",
    "@radix-ui/react-dialog": "1.1.6",
    "@radix-ui/react-dropdown-menu": "2.1.6",
    "@radix-ui/react-hover-card": "1.1.6",
    "@radix-ui/react-label": "2.1.2",
    "@radix-ui/react-menubar": "1.1.6",
    "@radix-ui/react-navigation-menu": "1.2.5",
    "@radix-ui/react-popover": "1.1.6",
    "@radix-ui/react-progress": "1.1.2",
    "@radix-ui/react-radio-group": "1.2.3",
    "@radix-ui/react-scroll-area": "1.2.3",
    "@radix-ui/react-select": "2.1.6",
    "@radix-ui/react-separator": "1.1.2",
    "@radix-ui/react-slider": "1.2.3",
    "@radix-ui/react-slot": "1.1.2",
    "@radix-ui/react-switch": "1.1.3",
    "@radix-ui/react-tabs": "1.1.3",
    "@radix-ui/react-toggle": "1.1.2",
    "@radix-ui/react-toggle-group": "1.1.2",
    "@radix-ui/react-tooltip": "1.1.8",
    "class-variance-authority": "0.7.1",
    "clsx": "2.1.1",
    "cmdk": "1.1.1",
    "date-fns": "3.6.0",
    "embla-carousel-react": "8.6.0",
    "input-otp": "1.4.2",
    "lucide-react": "0.487.0",
    "motion": "12.23.24",
    "next-themes": "0.4.6",
    "react": "18.3.1",
    "react-day-picker": "8.10.1",
    "react-dnd": "16.0.1",
    "react-dnd-html5-backend": "16.0.1",
    "react-dom": "18.3.1",
    "react-hook-form": "7.55.0",
    "react-intersection-observer": "10.0.2",
    "react-popper": "2.3.0",
    "react-resizable-panels": "2.1.7",
    "react-responsive-masonry": "2.7.1",
    "react-router-dom": "7.13.0",
    "react-slick": "0.31.0",
    "recharts": "2.15.2",
    "sonner": "2.0.3",
    "tailwind-merge": "3.2.0",
    "tw-animate-css": "1.3.8",
    "vaul": "1.1.2"
  },
  "devDependencies": {
    "@tailwindcss/vite": "4.1.12",
    "@types/react": "18.3.3",
    "@types/react-dom": "18.3.0",
    "@vitejs/plugin-react": "4.7.0",
    "tailwindcss": "4.1.12",
    "typescript": "5.6.3",
    "vite": "6.3.5"
  }
}
```

### 2. vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### 3. tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 4. tsconfig.node.json
```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

### 5. index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Union International Limited: Licensed Customs Agent #1 in Kenya. Expert cargo tracking, eSeal solutions, imports/exports, ICT services & fleet management across East Africa." />
    <title>Union International Limited - Licensed Customs Agent #1</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### 6. README.md
(Copy the README.md file from the project)

---

## 🚀 Quick Setup Method

Instead of copying files one by one, **use GitHub** (much easier):

### Option 2: Push to GitHub (EASIEST!)

1. **In Figma Make interface**, look for:
   - "Push to GitHub" button
   - "Export to GitHub" option
   - "Connect to GitHub" setting

2. **Or manually push**:
   ```bash
   # If you have access to terminal in Figma Make
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/union-international.git
   git push -u origin main
   ```

3. **Then on your computer**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/union-international.git
   cd union-international
   pnpm install
   pnpm dev
   ```

---

## 💡 Can You Access the File System?

If you can browse the file system in Figma Make:

**Location**: `/workspaces/default/code/`

**Download these folders/files**:
- `src/` (entire folder)
- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `tsconfig.node.json`
- `index.html`
- `README.md`
- `SETUP_GUIDE.md`

---

## 📧 Alternative: Email Me the Code

If none of the above work, I can help you:

1. Create smaller chunks of code
2. Provide direct file contents you can copy-paste
3. Guide you through creating each file manually

---

## 🆘 Tell Me What You Can Do

What options do you have in Figma Make?
- Can you see a file browser?
- Can you select and copy code?
- Can you connect to GitHub?
- Can you access a terminal/console?

Let me know and I'll guide you with the best method! 📞
