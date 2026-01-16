# Deploying to Vercel

## Quick Deploy (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up or log in with your GitHub account

2. **Import Your Repository**
   - Click "Add New Project"
   - Select your GitHub repository: `aaliyah-momodu-portfolio-v1`
   - Vercel will auto-detect it's a Next.js project

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (if needed)
   - Add any environment variables here if you have any
   - For this portfolio, you likely don't need any

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 2-3 minutes)
   - Your site will be live at: `https://your-project-name.vercel.app`

6. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain if you have one

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Choose your scope (personal/team)
   - Link to existing project or create new
   - Confirm settings

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- ✅ Deploy every push to `main` branch
- ✅ Create preview deployments for pull requests
- ✅ Rebuild on every commit

## Build Settings

Your project is already configured with:
- ✅ Next.js framework (auto-detected)
- ✅ Build command: `npm run build`
- ✅ Node.js version: Auto (Vercel uses Node 18+ by default)

## Troubleshooting

### Build Fails
1. Check the build logs in Vercel dashboard
2. Make sure all dependencies are in `package.json`
3. Ensure `npm run build` works locally first

### Images Not Loading
- Make sure all images are in `public/images/` folder
- Check image paths in your code

### Environment Variables
- Add any needed env vars in Vercel Dashboard → Settings → Environment Variables

## Post-Deployment

After deployment:
1. ✅ Test your live site
2. ✅ Check all pages load correctly
3. ✅ Verify images display properly
4. ✅ Test dark mode toggle
5. ✅ Test navigation and links
6. ✅ Check mobile responsiveness

## Custom Domain Setup

1. Go to Project Settings → Domains
2. Add your domain (e.g., `aaliyahmomodu.com`)
3. Follow DNS configuration instructions
4. Wait for DNS propagation (usually 24-48 hours)

---

**Need Help?** Check [Vercel Documentation](https://vercel.com/docs)
