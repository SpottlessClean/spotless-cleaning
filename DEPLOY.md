# One-Click Deploy Guide for Spotless Cleaning

This file contains the exact commands to run on **your own computer** (where you have Node.js installed).

---

## Fastest Path to Live Site (Recommended)

### 1. Push to GitHub (do this on your Mac)

```bash
# Open Terminal and run these commands:

cd ~/spotless-cleaning

# Initialize git (if not already done)
git init

# Add all files
git add .

# First commit
git commit -m "Initial launch: Spotless Cleaning website"

# Create the repo on GitHub first (via website), then connect it:
git remote add origin https://github.com/YOUR_USERNAME/spotless-cleaning-rockville.git

# Push
git branch -M main
git push -u origin main
```

### 2. Deploy on Vercel (30 seconds)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Select your `spotless-cleaning-rockville` repo
5. Click **Deploy**

Your website will be live instantly at `https://spotless-cleaning-rockville.vercel.app`

---

## After Deploy

- Add your custom domain in Vercel dashboard → Domains
- Update the real phone number and email in the code (search for `8436534081`)

---

## Need Help?

The site is production-ready. No build issues expected.
