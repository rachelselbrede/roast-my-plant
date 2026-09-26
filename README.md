# Roast My Plant 🌱🔥

Upload a photo of your houseplant and a sarcastic cartoon plant roasts it, then gives you one real care tip.

- No backend, no API calls, no API key. All 20 roast + tip pairs live in `src/roasts.js`.
- Your photo is only previewed locally in the browser and never uploaded anywhere.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/, deploy anywhere (Netlify, Vercel, GitHub Pages)
```

## Where things live

- `src/roasts.js`: roast/tip content, loading messages, and the random picker
- `src/App.jsx`: page layout and the upload → loading → roast flow
- `src/components/PhotoUpload.jsx`: drag-and-drop / tap-to-upload (opens the camera on mobile)
- `src/components/RoastResult.jsx`: speech bubble and care tip card
- `src/components/Mascot.jsx`: SVG plant mascot with idle / thinking / smug faces
