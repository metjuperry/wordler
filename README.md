# Metju.Wordler

Lightweight tool to cheat at Wordle.

A static React + Vite single-page app. Tell it which letters you know are green
(right letter, right spot), yellow (in the word, wrong spot), and gray (not in
the word at all). It returns every 5-letter word that still fits — drawn either
from the ~2,300-word Wordle answer list or the full ~12,950-word allowed-guess
list.

## Develop

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in ./dist
```

## Word lists

Both bundled into `src/data/words.ts` at build time:

- **All valid guesses** (~14,855) — [dracos/valid-wordle-words](https://gist.github.com/dracos/dd0668f281e685bad51479e5acaadb93).
  The full pool of words Wordle will accept as a guess.
- **Common answers** (~4,512) — the dracos list filtered to words with
  Google-n-gram occurrence ≥ 1e-7 (from
  [steve-kasica/wordle-words](https://github.com/steve-kasica/wordle-words)),
  unioned with the historical NYT answer pool. Approximates the
  wordlebot's narrower answer pool — drops obscurities like `awmry`,
  `dooky`, `doody` while keeping things like `hydra` and `agora`.

The UI defaults to "Common answers"; toggle to "All valid guesses" to
catch edge cases.

## Deployment

Pushes to `main` are deployed to GitHub Pages by `.github/workflows/deploy.yml`.
Enable Pages in repo settings (Source = GitHub Actions) once.
