# Union International Website - VS Code Setup Guide

## 📋 Prerequisites

Before you begin, make sure you have these installed on your computer:

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **VS Code**
   - Download from: https://code.visualstudio.com/

3. **Git** (optional, but recommended)
   - Download from: https://git-scm.com/

## 🚀 Quick Start Guide

### Step 1: Get the Code

**Option A: Download as ZIP**
1. Download all files from this project
2. Extract the ZIP to your desired location
3. Open the folder in VS Code

**Option B: Clone from GitHub** (if you've pushed it)
```bash
git clone <your-repo-url>
cd union-international-website
```

### Step 2: Open in VS Code

```bash
# Navigate to your project folder
cd path/to/union-international-website

# Open in VS Code
code .
```

### Step 3: Install Dependencies

Open the integrated terminal in VS Code (View → Terminal or Ctrl+`) and run:

```bash
# Install pnpm globally (if not installed)
npm install -g pnpm

# Install project dependencies
pnpm install
```

This will install all required packages:
- React
- React Router
- Tailwind CSS
- Motion (Framer Motion)
- Lucide Icons
- TypeScript
- Vite
- And all other dependencies

### Step 4: Run the Development Server

```bash
pnpm dev
```

The website will open at: **http://localhost:5173**

## 📁 Project Structure

```
union-international-website/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx              # Navigation header
│   │   │   ├── Footer.tsx              # Footer with links
│   │   │   ├── Analytics.tsx           # Google Analytics (GA4)
│   │   │   ├── ScrollToTop.tsx         # Auto-scroll to top
│   │   │   ├── InfinitePageScroll.tsx  # Page navigation
│   │   │   ├── HeroCarousel.tsx        # Homepage carousel
│   │   │   ├── BoardPaper.tsx          # Content component
│   │   │   └── ui/                     # UI components library
│   │   │
│   │   ├── pages/
│   │   │   ├── HomePage.tsx            # Main homepage
│   │   │   ├── AboutPage.tsx           # About us page
│   │   │   ├── ServicesPage.tsx        # Services overview
│   │   │   ├── ProductsPage.tsx        # Products catalog
│   │   │   ├── ProjectsPage.tsx        # Projects showcase
│   │   │   ├── BlogPage.tsx            # Blog listing
│   │   │   ├── BlogTypeApprovalPage.tsx # Type Approval blog
│   │   │   └── ContactPage.tsx         # Contact form
│   │   │
│   │   └── App.tsx                     # Main app with routing
│   │
│   ├── imports/                        # Images and assets
│   │   ├── image-23.png
│   │   ├── image-24.png
│   │   ├── image-25.png
│   │   ├── image-26.png
│   │   └── image-27.png
│   │
│   ├── styles/
│   │   ├── theme.css                   # Tailwind theme
│   │   └── fonts.css                   # Font imports
│   │
│   └── main.tsx                        # App entry point
│
├── public/                             # Static files
├── package.json                        # Dependencies
├── tsconfig.json                       # TypeScript config
├── vite.config.ts                      # Vite config
├── tailwind.config.js                  # Tailwind config
└── index.html                          # HTML entry point
```

## 🛠️ Available Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm type-check

# Lint code
pnpm lint
```

## 🎨 Key Technologies

- **React 18.3** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **React Router** - Navigation
- **Motion** - Animations
- **Lucide React** - Icons

## 📱 Important Features

### Google Analytics (Already Configured)
- Tracking ID: `G-VKHNWHZPXN`
- Located in: `src/app/components/Analytics.tsx`
- Tracks: Page views, button clicks, form submissions

### Contact Information
- Phone/WhatsApp: `0769021111`
- Email: `info@unioninternational.co.ke`

### Pages & Routes
- `/` - Homepage
- `/about` - About Us
- `/services` - Services
- `/products` - Products
- `/projects` - Projects
- `/blog` - Blog
- `/blog/type-approval-compliance` - Type Approval Article
- `/contact` - Contact

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

This creates a `dist` folder with optimized files.

### Deploy Options

**1. Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**2. Netlify**
- Drag & drop the `dist` folder to https://app.netlify.com/drop

**3. GitHub Pages**
- Push code to GitHub
- Enable GitHub Pages in repository settings
- Point to `dist` folder

**4. Your Own Server**
- Upload `dist` folder contents
- Point web server to `index.html`

## 🔧 Customization

### Update Contact Info
Edit these files:
- `src/app/components/Footer.tsx`
- `src/app/pages/ContactPage.tsx`
- `src/app/pages/HomePage.tsx`

### Update Google Analytics
- File: `src/app/components/Analytics.tsx`
- Change: `GA4_MEASUREMENT_ID`

### Add New Pages
1. Create file in `src/app/pages/`
2. Add route in `src/app/App.tsx`
3. Add navigation link in `src/app/components/Header.tsx`

### Modify Styles
- Theme colors: `src/styles/theme.css`
- Tailwind config: `tailwind.config.js`

## 📝 Meta Description (SEO)

Add this to your HTML `<head>`:

```html
<meta name="description" content="Union International Limited: Licensed Customs Agent #1 in Kenya. Expert cargo tracking, eSeal solutions, imports/exports, ICT services & fleet management across East Africa.">
```

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Use different port
pnpm dev --port 3000
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Errors
```bash
# Check TypeScript errors
pnpm type-check
```

## 📞 Support

If you need help:
1. Check console for errors (F12 in browser)
2. Review this guide
3. Check official docs:
   - React: https://react.dev/
   - Vite: https://vitejs.dev/
   - Tailwind: https://tailwindcss.com/

## ✅ Checklist Before Going Live

- [ ] Update all contact information
- [ ] Test all pages and links
- [ ] Test contact form
- [ ] Verify Google Analytics is working
- [ ] Test on mobile devices
- [ ] Optimize images
- [ ] Set up SSL certificate (HTTPS)
- [ ] Add favicon
- [ ] Test all interactive features
- [ ] Review SEO meta tags

---

**Built with ❤️ for Union International Limited**

Last Updated: April 28, 2026
