# 🚀 Push to GitHub - Step by Step Guide

## ✅ Status: Code is Ready!

Your code is committed and ready to push to GitHub!

**What's included:**
- ✅ 129 files committed
- ✅ 18,145 lines of code
- ✅ All pages, components, and assets
- ✅ Ready to push!

---

## 📋 Step-by-Step: Push to GitHub

### Step 1: Create a GitHub Repository

1. **Go to GitHub**: https://github.com
2. **Sign in** to your account (or create one if you don't have it)
3. **Click the "+" icon** in the top right
4. **Select "New repository"**

### Step 2: Configure Your Repository

Fill in these details:

**Repository name**: `union-international-website`

**Description** (optional):
```
Professional website for Union International Limited - Licensed Customs Agent #1 in Kenya
```

**Visibility**: 
- Choose **Private** (recommended for business website)
- Or **Public** if you want it visible to everyone

**DO NOT initialize with**:
- ❌ Don't add README
- ❌ Don't add .gitignore
- ❌ Don't add license

(We already have these!)

**Click**: "Create repository"

### Step 3: Copy Your Repository URL

After creating, GitHub will show you a page with commands.

**Copy the HTTPS URL**, it looks like:
```
https://github.com/YOUR-USERNAME/union-international-website.git
```

### Step 4: Connect Your Code to GitHub

**In Figma Make** (or wherever you can run commands), run these:

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/union-international-website.git

# Push your code to GitHub
git push -u origin main
```

**Replace** `YOUR-USERNAME` with your actual GitHub username!

### Step 5: Enter Your Credentials

When prompted:
- **Username**: Your GitHub username
- **Password**: Your GitHub personal access token (NOT your GitHub password!)

#### How to Get Personal Access Token:

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: `Union International Website`
4. Select scopes: Check **repo** (all sub-items)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)
7. Use this token as your password when pushing

---

## 🎉 Success!

Once you see:
```
To https://github.com/YOUR-USERNAME/union-international-website.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

**Your code is on GitHub!** 🎊

---

## 💻 Clone to Your Computer (VS Code)

Now that it's on GitHub, here's how to get it on your computer:

### Step 1: Open Terminal/Command Prompt

**Windows**: 
- Press `Win + R`
- Type `cmd` and press Enter

**Mac**: 
- Press `Cmd + Space`
- Type `terminal` and press Enter

### Step 2: Navigate to Where You Want the Project

```bash
# Go to your desired folder
cd Documents
# or
cd Desktop
# or wherever you want the project
```

### Step 3: Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/union-international-website.git
```

Replace `YOUR-USERNAME` with your actual GitHub username!

### Step 4: Open in VS Code

```bash
# Navigate into the project
cd union-international-website

# Open in VS Code
code .
```

If `code .` doesn't work:
1. Open VS Code manually
2. File → Open Folder
3. Select `union-international-website` folder

### Step 5: Install Dependencies

In VS Code, open the terminal (View → Terminal) and run:

```bash
# Install pnpm if not installed
npm install -g pnpm

# Install project dependencies
pnpm install
```

Wait 2-5 minutes for installation.

### Step 6: Run the Website

```bash
pnpm dev
```

**Open browser**: http://localhost:5173

✅ **Your website is running!**

---

## 🔄 Making Updates Later

When you make changes and want to update GitHub:

```bash
# Check what changed
git status

# Add changes
git add .

# Commit changes
git commit -m "Description of what you changed"

# Push to GitHub
git push
```

---

## 📦 Complete Command Reference

```bash
# Initial Push (first time only)
git remote add origin https://github.com/YOUR-USERNAME/union-international-website.git
git push -u origin main

# Clone to Computer (first time only)
git clone https://github.com/YOUR-USERNAME/union-international-website.git
cd union-international-website

# Setup Project (first time only)
npm install -g pnpm
pnpm install

# Run Development Server (every time)
pnpm dev

# Update GitHub (when you make changes)
git add .
git commit -m "Your message"
git push
```

---

## 🆘 Troubleshooting

### Problem: "Permission denied" when pushing

**Solution**: 
- Make sure you're using a Personal Access Token, not your password
- Token needs `repo` permissions
- Create new token: https://github.com/settings/tokens

### Problem: "Repository not found"

**Solution**:
- Check the repository URL is correct
- Make sure the repository exists on GitHub
- Verify you're logged into the correct GitHub account

### Problem: "Authentication failed"

**Solution**:
```bash
# Update your credentials
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"

# Try pushing again
git push -u origin main
```

### Problem: Can't run git commands in Figma Make

**Solution**:
- Look for terminal/console in Figma Make interface
- Or copy the repository URL and I'll help you push another way
- Or use Figma Make's built-in GitHub integration if available

---

## ✅ Quick Checklist

Setup on GitHub:
- [ ] GitHub account created/logged in
- [ ] New repository created
- [ ] Repository URL copied
- [ ] Code pushed to GitHub
- [ ] Verify code appears on GitHub website

Setup on Your Computer:
- [ ] Git installed
- [ ] Repository cloned
- [ ] VS Code opened with project
- [ ] Node.js installed
- [ ] pnpm installed
- [ ] Dependencies installed (pnpm install)
- [ ] Development server running (pnpm dev)
- [ ] Website opens at localhost:5173

---

## 🎯 What's Next?

After everything is set up:

1. ✅ Test all pages
2. ✅ Customize content
3. ✅ Update contact information
4. ✅ Replace images
5. ✅ Test on mobile
6. ✅ Build for production
7. ✅ Deploy online!

---

## 📞 Need More Help?

If you get stuck:
1. Check the error message
2. Search GitHub for the error
3. Review the troubleshooting section
4. Check if git/node/pnpm are installed correctly

---

**You're almost there! Just a few commands and your website will be on GitHub and your computer! 🚀**

Last Updated: April 28, 2026
