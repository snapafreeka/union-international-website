# 📋 Complete File List for VS Code

## Essential Files You Need

### Root Directory Files

```
✅ package.json          - Dependencies and scripts
✅ vite.config.ts        - Build configuration
✅ tsconfig.json         - TypeScript settings
✅ tsconfig.node.json    - Node TypeScript settings
✅ index.html            - Main HTML file
✅ README.md             - Project documentation
✅ SETUP_GUIDE.md        - Setup instructions
✅ EXPORT_TO_VSCODE.md   - This export guide
✅ .gitignore            - Git ignore rules (optional)
```

### Source Files (src/)

#### Main Entry
```
src/
├── main.tsx            - Application entry point
└── vite-env.d.ts       - Vite type definitions
```

#### Application Core (src/app/)
```
src/app/
└── App.tsx             - Main app component with routing
```

#### Components (src/app/components/)
```
src/app/components/
├── Header.tsx                    - Navigation header
├── Footer.tsx                    - Footer component
├── Analytics.tsx                 - Google Analytics
├── ScrollToTop.tsx               - Auto scroll component
├── InfinitePageScroll.tsx        - Page navigation
├── HeroCarousel.tsx              - Homepage carousel
├── BoardPaper.tsx                - Content component
├── BoardPaperExtensive.tsx       - Extended content
├── PrintButton.tsx               - Print functionality
│
└── figma/
    └── ImageWithFallback.tsx     - Image component
```

#### UI Components (src/app/components/ui/)
```
src/app/components/ui/
├── accordion.tsx         ├── navigation-menu.tsx
├── alert-dialog.tsx      ├── pagination.tsx
├── alert.tsx             ├── popover.tsx
├── aspect-ratio.tsx      ├── progress.tsx
├── avatar.tsx            ├── radio-group.tsx
├── badge.tsx             ├── resizable.tsx
├── breadcrumb.tsx        ├── scroll-area.tsx
├── button.tsx            ├── select.tsx
├── calendar.tsx          ├── separator.tsx
├── card.tsx              ├── sheet.tsx
├── carousel.tsx          ├── sidebar.tsx
├── chart.tsx             ├── skeleton.tsx
├── checkbox.tsx          ├── slider.tsx
├── collapsible.tsx       ├── sonner.tsx
├── command.tsx           ├── switch.tsx
├── context-menu.tsx      ├── table.tsx
├── dialog.tsx            ├── tabs.tsx
├── drawer.tsx            ├── textarea.tsx
├── dropdown-menu.tsx     ├── toggle-group.tsx
├── form.tsx              ├── toggle.tsx
├── hover-card.tsx        ├── tooltip.tsx
├── input-otp.tsx         ├── use-mobile.ts
├── input.tsx             └── utils.ts
├── label.tsx
└── menubar.tsx
```

#### Pages (src/app/pages/)
```
src/app/pages/
├── HomePage.tsx                  - Main homepage
├── AboutPage.tsx                 - About us page
├── ServicesPage.tsx              - Services listing
├── ProductsPage.tsx              - Products catalog
├── ProjectsPage.tsx              - Projects showcase
├── BlogPage.tsx                  - Blog main page
├── BlogTypeApprovalPage.tsx      - Type Approval article
└── ContactPage.tsx               - Contact form
```

#### Images (src/imports/)
```
src/imports/
├── image-23.png          - Service image 1
├── image-24.png          - Service image 2
├── image-25.png          - Partnership image (BSMART)
├── image-26.png          - Partnership image (Kunlun)
└── image-27.png          - Service image 3
```

#### Styles (src/styles/)
```
src/styles/
├── theme.css             - Tailwind theme variables
├── fonts.css             - Font imports
├── globals.css           - Global styles
├── index.css             - Main CSS entry
└── tailwind.css          - Tailwind imports
```

---

## File Sizes (Approximate)

| File/Folder | Size | Files |
|-------------|------|-------|
| src/app/pages/ | ~150KB | 8 files |
| src/app/components/ | ~100KB | 10 files |
| src/app/components/ui/ | ~300KB | 60 files |
| src/imports/ | ~5MB | 5 images |
| src/styles/ | ~20KB | 5 files |
| **Total Source** | **~5.5MB** | **~90 files** |

---

## Dependencies Count

- **Total Dependencies**: 45
- **Dev Dependencies**: 3
- **Peer Dependencies**: 2

### Key Dependencies:
- React 18.3.1
- React Router DOM 7.13.0
- Motion 12.23.24
- Lucide React 0.487.0
- Tailwind CSS 4.1.12
- Vite 6.3.5
- TypeScript (via Vite)

---

## Download Checklist

When exporting to VS Code, make sure you have:

### ✅ Core Files
- [ ] package.json
- [ ] vite.config.ts
- [ ] tsconfig.json
- [ ] index.html
- [ ] README.md
- [ ] SETUP_GUIDE.md

### ✅ Source Code
- [ ] src/main.tsx
- [ ] src/app/App.tsx
- [ ] src/app/components/ (all 11 files)
- [ ] src/app/components/ui/ (all 60+ files)
- [ ] src/app/pages/ (all 8 files)

### ✅ Assets
- [ ] src/imports/ (all 5 images)
- [ ] src/styles/ (all 5 CSS files)

### ✅ Optional
- [ ] .gitignore
- [ ] .env (for environment variables)
- [ ] public/ (if you have any static files)

---

## Installation Size

After running `pnpm install`:

- **node_modules/**: ~500MB (normal for React projects)
- **Total Project Size**: ~510MB

Don't worry - this is normal! Most of it is development tools.

---

## Quick Command Reference

```bash
# Install dependencies
pnpm install          # ~2-5 minutes first time

# Development
pnpm dev              # Start dev server (fast)

# Production
pnpm build            # Create dist/ folder (~2-3MB)
pnpm preview          # Test production build

# Troubleshooting
rm -rf node_modules pnpm-lock.yaml && pnpm install
```

---

## What You DON'T Need to Copy

❌ node_modules/ (will be installed via pnpm install)
❌ dist/ (generated by build)
❌ .vite/ (cache folder)
❌ *.md files (except README.md and SETUP_GUIDE.md)
❌ __figma__entrypoint__.ts (Figma Make specific)

---

## File Permissions

All files should have standard read/write permissions:
- **.tsx, .ts, .css, .json**: 644 (rw-r--r--)
- **.png, images**: 644 (rw-r--r--)
- **No executable permissions needed**

---

## Ready to Export?

Follow the instructions in **EXPORT_TO_VSCODE.md** to:
1. Download all files
2. Set up VS Code
3. Install dependencies
4. Run the development server

Good luck! 🚀
