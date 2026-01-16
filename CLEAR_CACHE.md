# Quick Fix for Hot Reload Issues

If changes aren't showing up in real-time, try these steps in order:

## Quick Fixes (Try First)

1. **Hard Refresh Browser**
   - Windows/Linux: `Ctrl + Shift + R` or `Ctrl + F5`
   - Mac: `Cmd + Shift + R`

2. **Clear Browser Cache**
   - Open DevTools (F12)
   - Right-click the refresh button
   - Select "Empty Cache and Hard Reload"

## If That Doesn't Work

3. **Clear Next.js Cache**
   ```bash
   npm run clean
   npm run dev
   ```

4. **Or manually delete .next folder**
   ```bash
   # Windows PowerShell
   Remove-Item -Recurse -Force .next
   
   # Windows CMD
   rmdir /s /q .next
   
   # Mac/Linux
   rm -rf .next
   ```

## Nuclear Option (Full Reset)

5. **Clear everything and restart**
   ```bash
   # Stop the dev server (Ctrl+C)
   npm run clean
   rm -rf node_modules/.cache
   npm run dev
   ```

## Tips for Better Development Experience

- Always use `npm run dev` (now uses Turbopack by default for faster HMR)
- Keep browser DevTools open to see HMR updates
- If a file change doesn't trigger reload, save the file again
- Check the terminal for compilation errors

## Browser Settings

For best results during development:
- Disable browser extensions that might cache content
- Use Chrome/Edge in incognito mode for testing
- Disable "Disable cache" in DevTools Network tab (only when DevTools is open)
