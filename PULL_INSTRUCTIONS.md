# How to Update Your Local Website

Your website code has been updated in the repository, but you need to pull the changes to your local machine.

## Steps to Fix:

1. **Stop your dev server** (press Ctrl+C in the terminal where it's running)

2. **Pull the latest changes:**
   ```bash
   cd /Users/carolinefarr/Documents/small-town-boutique
   git pull origin claude/new-portfolio-website-019dCBEFujnFuUdyyyayzJhu
   ```

3. **Restart your dev server:**
   ```bash
   npm run dev
   ```

4. **Hard refresh your browser:**
   - Mac: Cmd + Shift + R
   - PC: Ctrl + Shift + R
   - Or open in incognito/private window

Your local images should now display correctly!

## What was the problem?

The repository has the updated code using your local images (`/images/products/wildflower-romper.jpg`), but your local machine was still running the old code with Unsplash URLs. Pulling the changes syncs your local code with the repository.
