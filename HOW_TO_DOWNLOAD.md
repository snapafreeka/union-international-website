# 💾 How to Download & Use in VS Code

## 🎯 Quick Overview

You have a **fully functional React website** ready to download and run in VS Code!

**Current Status:**
- ✅ All code written and working
- ✅ 8 pages built (Home, About, Services, Products, Projects, Blog, Contact)
- ✅ Interactive Type Approval blog post
- ✅ Google Analytics configured
- ✅ Fully responsive design
- ✅ 90+ files ready to export

---

## 📥 Download Methods

### Method 1: Figma Make Export (Recommended)

1. Look for the **Download** or **Export** button in Figma Make interface
2. Click it and save the ZIP file
3. Extract the ZIP to your desired folder
4. Open in VS Code

### Method 2: GitHub (If Available)

```bash
git clone <repository-url>
cd union-international-website
```

### Method 3: Manual Copy

If you can access the files directly, copy the entire project folder to your local machine.

---

## 🚀 Step-by-Step Setup in VS Code

### Step 1: Extract/Open Project

```bash
# Navigate to your project folder
cd /path/to/union-international-website

# Open in VS Code
code .
```

### Step 2: Install Node.js

If you don't have Node.js:
1. Go to https://nodejs.org/
2. Download the LTS version
3. Install it
4. Verify: `node --version`

### Step 3: Install pnpm

```bash
# Install pnpm globally
npm install -g pnpm

# Verify installation
pnpm --version
```

### Step 4: Install Project Dependencies

In VS Code terminal (View → Terminal):

```bash
pnpm install
```

**Wait 2-5 minutes** - this installs ~45 packages

### Step 5: Start Development Server

```bash
pnpm dev
```

**Expected output:**
```
  VITE v6.3.5  ready in 1234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Step 6: Open in Browser

Open: **http://localhost:5173**

✅ Your website is now running!

---

## 📋 Complete Checklist

### Before Starting
- [ ] Node.js installed (v18+)
- [ ] VS Code installed
- [ ] Project files downloaded/extracted
- [ ] Terminal access

### Initial Setup
- [ ] Open project in VS Code
- [ ] Open integrated terminal
- [ ] Run `npm install -g pnpm`
- [ ] Run `pnpm install`
- [ ] Wait for installation to complete

### First Run
- [ ] Run `pnpm dev`
- [ ] Open http://localhost:5173
- [ ] Verify homepage loads
- [ ] Test navigation (all 7+ pages)
- [ ] Check images load
- [ ] Test mobile responsive view (F12 → Device toolbar)

### Verify Features
- [ ] Header navigation works
- [ ] Footer displays correctly
- [ ] Homepage carousel animates
- [ ] Services page displays all services
- [ ] Blog page loads
- [ ] Type Approval blog post accessible
- [ ] Contact page form visible
- [ ] Google Analytics tracking (check console)

---

## 📁 What You Should See in VS Code

```
EXPLORER (Left Sidebar)
└── UNION-INTERNATIONAL-WEBSITE
    ├── 📁 node_modules       (appears after pnpm install)
    ├── 📁 src
    │   ├── 📁 app
    │   │   ├── 📁 components
    │   │   ├── 📁 pages
    │   │   └── App.tsx
    │   ├── 📁 imports        (images)
    │   ├── 📁 styles
    │   └── main.tsx
    ├── 📄 package.json
    ├── 📄 vite.config.ts
    ├── 📄 tsconfig.json
    ├── 📄 index.html
    ├── 📄 README.md
    └── 📄 SETUP_GUIDE.md
```

---

## 🎨 Recommended VS Code Extensions

Install these for better development experience:

### Essential
1. **ES7+ React/Redux/React-Native snippets**
   - Search: `dsznajder.es7-react-js-snippets`
   - Autocompletes React code

2. **Tailwind CSS IntelliSense**
   - Search: `bradlc.vscode-tailwindcss`
   - Autocompletes Tailwind classes

3. **TypeScript and JavaScript**
   - Usually pre-installed
   - Provides IntelliSense

### Helpful
4. **Prettier - Code Formatter**
   - Search: `esbenp.prettier-vscode`
   - Auto-formats code

5. **Auto Rename Tag**
   - Search: `formulahendry.auto-rename-tag`
   - Renames paired HTML/JSX tags

---

## 🔧 Common Terminal Commands

```bash
# Start development (most common)
pnpm dev

# Stop development server
Ctrl + C

# Install new package
pnpm add package-name

# Build for production
pnpm build

# Preview production build
pnpm preview

# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

---

## 🌐 Testing the Website

### Desktop Testing
1. Open http://localhost:5173
2. Click through all pages
3. Test all buttons and links
4. Verify images load

### Mobile Testing
1. Press **F12** in browser
2. Click **Device Toolbar** icon (or Ctrl+Shift+M)
3. Select phone size (iPhone, Samsung, etc.)
4. Test navigation and responsiveness

### Pages to Test
- ✅ Home: http://localhost:5173/
- ✅ About: http://localhost:5173/about
- ✅ Services: http://localhost:5173/services
- ✅ Products: http://localhost:5173/products
- ✅ Projects: http://localhost:5173/projects
- ✅ Blog: http://localhost:5173/blog
- ✅ Type Approval: http://localhost:5173/blog/type-approval-compliance
- ✅ Contact: http://localhost:5173/contact

---

## 🐛 Troubleshooting

### Problem: "command not found: pnpm"
**Solution:**
```bash
npm install -g pnpm
```

### Problem: "Port 5173 already in use"
**Solution:**
```bash
pnpm dev --port 3000
```

### Problem: Images not loading
**Solution:**
- Check `src/imports/` folder exists
- Verify image files are present
- Check browser console for errors

### Problem: "Cannot find module '@/app/...'"
**Solution:**
- Check `tsconfig.json` exists
- Verify it has path aliases configured
- Restart VS Code

### Problem: Styles not working
**Solution:**
- Verify `src/styles/index.css` exists
- Check it imports Tailwind
- Clear browser cache (Ctrl+Shift+R)

### Problem: Build errors
**Solution:**
```bash
# Clean install
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

---

## 📦 Building for Production

When you're ready to deploy:

```bash
# Create production build
pnpm build
```

This creates a `dist/` folder with optimized files:
- Compressed JavaScript
- Optimized images
- Minified CSS
- Ready to upload!

---

## 🚀 Deployment Options

### Option 1: Vercel (Free, Easiest)
```bash
npm i -g vercel
vercel
```

### Option 2: Netlify (Free)
1. Go to https://app.netlify.com
2. Drag & drop `dist` folder
3. Get your URL!

### Option 3: GitHub Pages (Free)
1. Push code to GitHub
2. Enable Pages in Settings
3. Deploy!

### Option 4: Your Server
Upload `dist/` folder contents via FTP/SFTP

---

## ✅ Success Indicators

You'll know everything works when:

1. ✅ Terminal shows "VITE ready" message
2. ✅ Browser opens to homepage
3. ✅ All images display
4. ✅ Navigation menu works
5. ✅ Pages load without errors
6. ✅ Console shows no red errors
7. ✅ Mobile view looks good
8. ✅ Google Analytics logs appear in console

---

## 📞 Next Steps

Once running successfully:

1. **Customize Content**
   - Update text in page files
   - Replace placeholder images
   - Modify contact information

2. **Test Everything**
   - Click all links
   - Test all forms
   - Verify analytics
   - Check mobile view

3. **Prepare for Launch**
   - Build production version
   - Test production build
   - Choose hosting platform
   - Deploy!

---

## 💡 Pro Tips

1. **Keep Terminal Open**: Leave `pnpm dev` running while coding
2. **Hot Reload**: Changes appear instantly in browser
3. **Use Console**: Check browser console (F12) for errors
4. **Git Version Control**: Use Git to track changes
5. **Backup Often**: Keep copies of working code

---

## 📚 Learning Resources

- **React**: https://react.dev/learn
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vite**: https://vitejs.dev/guide/
- **React Router**: https://reactrouter.com/

---

## 🎉 You're Ready!

Follow these steps and you'll have your website running in VS Code in about 10 minutes!

**Questions?**
- Check SETUP_GUIDE.md
- Review browser console
- Check terminal for errors

**Good luck with your website! 🚀**

---

*Last Updated: April 28, 2026*
