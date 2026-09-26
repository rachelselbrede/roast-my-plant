# Roast My Plant — Project Brief for Claude Code (No Cost Version)

## Concept
A web app where a user uploads a photo of their houseplant and gets a sarcastic, funny "roast" of the plant's condition, plus one genuinely useful care tip. This version uses pre-written canned roasts instead of a live API call, so it costs nothing to run no matter how many people try it.

## Why this fits the tracks
Delight track. The mascot, UI polish, and comedic writing carry the fun, not a live model call. This keeps the demo completely free to run for any number of visitors.

## MVP feature list
1. Upload or drag a plant photo, or take one on mobile.
2. Randomly pick one roast from a pre-written list of 15 to 25 funny roasts (no API call, no network request needed).
3. Display the roast in a speech bubble from a cute cartoon plant mascot.
4. Show a real care tip paired with each roast, visually separated from the joke.
5. "Roast again" button that picks a different one from the list.

## Content to write ahead of time
Write 15 to 25 roast and tip pairs covering common plant problems, so any photo gets something plausible. Cover things like yellow leaves, drooping, leggy growth, brown crispy tips, overwatering, underwatering, sunburn, dust buildup, root bound pots, and pest spots. Each entry needs a funny roast line and one clearly labeled real care tip.

## Suggested stack
- Frontend, single React app, Vite, Tailwind for styling.
- No backend, no API calls, no API key needed anywhere in the code.
- All roast and tip content lives in a local JSON or JS array bundled with the app.

## What to hand Claude Code
Paste this whole brief plus the line below to kick off the build:

"Build the MVP described above as a single page React app with Vite and Tailwind. Set up image upload with a preview, then on submit randomly select a roast and tip pair from a local array (no API calls at all). Show it in a speech bubble next to a simple plant mascot illustration (SVG is fine). Add a short loading delay with a funny message before showing the roast so it feels alive, and a roast again button that picks a different entry. Write 20 funny roast and tip pairs covering common plant problems as the starter content. Keep the code simple and readable since this is a hackathon project."

## Time allocation suggestion
- First chunk of time, get image upload plus random roast selection plus display working end to end, no styling.
- Middle chunk, build the cute UI, mascot, speech bubble, colors, fonts.
- Last chunk, polish the roast and tip writing, add the roast again button, test on mobile.
