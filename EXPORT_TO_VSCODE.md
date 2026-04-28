# 📥 How to Export & Build in VS Code

## Step-by-Step Guide

### Method 1: Download from Figma Make (Easiest)

1. **In Figma Make Interface**:
   - Look for the **Download** or **Export** button
   - Select "Download Project"
   - Save the ZIP file to your computer

2. **Extract the Files**:
   ```bash
   # Navigate to where you saved the ZIP
   cd ~/Downloads
   
   # Extract (or right-click and extract)
   unzip union-international-website.zip
   ```

3. **Open in VS Code**:
   ```bash
   cd union-international-website
   code .
   ```

### Method 2: Manual File Copy

If download isn't available, copy these files manually:

#### Essential Files to Copy

```
📁 Your-New-Folder/
├── 📄 package.json              ← Dependencies
├── 📄 vite.config.ts            ← Build config
├── 📄 tsconfig.json             ← TypeScript config
├── 📄 tailwind.config.js        ← Tailwind config (create if missing)
├── 📄 index.html                ← Entry HTML
├── 📄 README.md                 ← Documentation
├── 📄 SETUP_GUIDE.md            ← Setup instructions
│
├── 📁 src/
│   ├── 📄 main.tsx              ← App entry point
│   │
│   ├── 📁 app/
│   │   ├── 📄 App.tsx           ← Main app component
│   │   │
│   │   ├── 📁 components/
│   │   │   ├── 📄 Header.tsx
│   │   │   ├── 📄 Footer.tsx
│   │   │   ├── 📄 Analytics.tsx
│   │   │   ├── 📄 ScrollToTop.tsx
│   │   │   ├── 📄 InfinitePageScroll.tsx
│   │   │   ├── 📄 HeroCarousel.tsx
│   │   │   ├── 📄 BoardPaper.tsx
│   │   │   ├── 📄 BoardPaperExtensive.tsx
│   │   │   ├── 📄 PrintButton.tsx
│   │   │   │
│   │   │   ├── 📁 figma/
│   │   │   │   └── 📄 ImageWithFallback.tsx
│   │   │   │
│   │   │   └── 📁 ui/           ← All UI components
│   │   │       └── (50+ component files)
│   │   │
│   │   └── 📁 pages/
│   │       ├── 📄 HomePage.tsx
│   │       ├── 📄 AboutPage.tsx
│   │       ├── 📄 ServicesPage.tsx
│   │       ├── 📄 ProductsPage.tsx
│   │       ├── 📄 ProjectsPage.tsx
│   │       ├── 📄 BlogPage.tsx
│   │       ├── 📄 BlogTypeApprovalPage.tsx
│   │       └── 📄 ContactPage.tsx
│   │
│   ├── 📁 imports/              ← Copy all images
│   │   ├── image-23.png
│   │   ├── image-24.png
│   │   ├── image-25.png
│   │   ├── image-26.png
│   │   └── image-27.png
│   │
│   └── 📁 styles/
│       ├── 📄 theme.css
│       ├── 📄 fonts.css
│       ├── 📄 globals.css
│       ├── 📄 index.css
│       └── 📄 tailwind.css
│
└── 📁 public/                   ← Static files (if any)
```

---

## 🛠️ Setup in VS Code

### 1. Create New Folder

```bash
# Create project folder
mkdir union-international-website
cd union-international-website
```

### 2. Initialize Package

If you don't have `package.json`, create it:

```bash
npm init -y
```

Then replace the content with the package.json from this project.

### 3. Install pnpm (if not installed)

```bash
npm install -g pnpm
```

### 4. Install Dependencies

```bash
pnpm install
```

This will install:
- react
- react-dom
- react-router-dom
- motion
- lucide-react
- tailwindcss
- typescript
- vite
- And 50+ other packages

### 5. Create Missing Config Files

#### `tailwind.config.js` (if missing)

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### `index.html` (if missing)

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

#### `src/main.tsx` (if missing)

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

#### `vite.config.ts` (if missing)

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

#### `tsconfig.json` (if missing)

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

---

## ▶️ Run the Project

```bash
# Start development server
pnpm dev
```

Open browser to: **http://localhost:5173**

---

## 🔍 Verify Everything Works

### Checklist:

- [ ] Website loads at localhost:5173
- [ ] All pages accessible (Home, About, Services, Products, Projects, Blog, Contact)
- [ ] Images load correctly
- [ ] Navigation works
- [ ] Blog Type Approval page loads
- [ ] Contact form visible
- [ ] Google Analytics tracking active
- [ ] Mobile responsive design working
- [ ] No console errors

---

## 🐛 Common Issues & Fixes

### Issue: "Cannot find module '@/app/...'"

**Fix**: Check `tsconfig.json` has correct path aliases:
```json
"paths": {
  "@/*": ["./src/*"]
}
```

### Issue: Images not loading

**Fix**: 
1. Ensure images are in `src/imports/` folder
2. Check import paths in components
3. For Figma assets, verify `figma:asset` imports

### Issue: Tailwind styles not working

**Fix**:
1. Check `tailwind.config.js` exists
2. Verify `src/styles/index.css` imports Tailwind:
```css
@import "tailwindcss";
```

### Issue: Port 5173 already in use

**Fix**: Use different port
```bash
pnpm dev --port 3000
```

### Issue: Dependencies not installing

**Fix**:
```bash
# Clear cache
rm -rf node_modules pnpm-lock.yaml

# Reinstall
pnpm install
```

---

## 📦 Build for Production

```bash
# Create production build
pnpm build

# Preview production build
pnpm preview
```

Production files will be in `dist/` folder.

---

## 🚀 Deploy Options

### Vercel (Free, Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify (Free)
1. Go to https://app.netlify.com
2. Drag & drop `dist` folder
3. Done!

### GitHub Pages (Free)
1. Push to GitHub
2. Settings → Pages
3. Select branch and folder

---

## 📞 Need Help?

1. Check console for errors (F12)
2. Review SETUP_GUIDE.md
3. Check official documentation:
   - [React Docs](https://react.dev)
   - [Vite Docs](https://vitejs.dev)
   - [Tailwind Docs](https://tailwindcss.com)

---

## ✅ You're Ready!

Once you see the website running at localhost:5173, you're all set! 

**Next Steps**:
1. Customize content
2. Update contact info
3. Add your own images
4. Test all features
5. Deploy to production

Good luck! 🎉
