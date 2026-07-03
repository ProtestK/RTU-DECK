# RTU DECK — phone install (one time, ~10 min)

## 1. Host it (free, GitHub Pages)
1. On your phone browser: github.com → sign up (free) if needed
2. Tap + → **New repository** → name it `rtu-deck` → Public → Create
3. In the repo: **Add file → Upload files** → select all 5 files from this zip
   (index.html, manifest.json, sw.js, icon-192.png, icon-512.png) → Commit
4. Repo **Settings → Pages** → Source: Deploy from branch → Branch: `main`, folder `/ (root)` → Save
5. Wait ~1 min. Your app URL: `https://YOURNAME.github.io/rtu-deck/`

## 2. Install it
- Open that URL in **Safari** → Share → **Add to Home Screen**
- (Android: Chrome shows an Install prompt, or ⋮ → Add to Home screen)
- Launches fullscreen, own icon, no browser bars. After the first load it works **offline** (trees, calcs, codes, log, job sites — data lives on the phone).

## 3. AI features (optional)
PM filler, Ask Claude, and photo decode need your own API key out here:
1. console.anthropic.com → sign in → **API keys** → Create key → copy it
2. In the app: **Settings** tile → paste → Save → Test
- Pay-per-use: a plate read is roughly a cent or two.
- The key stays on your phone and is only sent to api.anthropic.com.
- Never commit the key to GitHub or share it.

## Notes
- Log + job sites here are stored on the phone (separate from the claude.ai artifact's saves — they don't sync).
- Update later: I hand you a new index.html → upload over the old one in GitHub → app updates on next launch (may need a force-close once).
