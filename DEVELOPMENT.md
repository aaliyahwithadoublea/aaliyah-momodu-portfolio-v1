# Development Mode - See Changes in Real-Time

## Quick Start

**Always use the development server for coding:**

```bash
npm run dev
```

This will:
- ✅ Show changes instantly (Hot Module Replacement)
- ✅ Auto-reload when you save files
- ✅ Show helpful error messages
- ✅ Use Turbopack for faster compilation

## Stop Production Server

If you're currently running `npm start` (production mode):

1. **Stop the server**: Press `Ctrl + C` in your terminal
2. **Start development server**: Run `npm run dev`
3. **Open browser**: Go to `http://localhost:3000`

## Development vs Production

| Mode | Command | Hot Reload | Speed | Use For |
|------|---------|------------|-------|---------|
| **Development** | `npm run dev` | ✅ Yes | Fast | Coding & Testing |
| **Production** | `npm start` | ❌ No | Slower | Final Testing Only |

## Troubleshooting

### Changes Still Not Showing?

1. **Hard refresh browser**: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. **Clear Next.js cache**:
   ```bash
   npm run clean
   npm run dev
   ```
3. **Check terminal** for compilation errors

### Development Server Not Starting?

```bash
# Clean everything and restart
npm run clean
npm run dev
```

## Tips

- Keep the terminal open to see compilation status
- Browser console will show HMR updates
- Save files to trigger auto-reload
- Use `npm run dev:clean` if you encounter cache issues
