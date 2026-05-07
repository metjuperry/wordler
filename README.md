# wordler

Lightweight tool to cheat at Wordle.

A static React + Vite single-page app. Tell it which letters you know are green
(right letter, right spot), yellow (in the word, wrong spot), and gray (not in
the word at all). It returns every 5-letter word that still fits — drawn either
from the ~2,300-word Wordle answer list or the full ~12,950-word allowed-guess
list.

## Develop

```sh
npm install
npm run dev      # http://localhost:5173/wordler/
npm run build    # production bundle in ./dist
```

## Word lists

Sourced from [3b1b/videos/_2022/wordle/data](https://github.com/3b1b/videos/tree/master/_2022/wordle/data)
and bundled at build time into `src/data/answers.ts` and `src/data/allowed.ts`.

## Deployment

Pushes to `main` are deployed to GitHub Pages by `.github/workflows/deploy.yml`.
Enable Pages in repo settings (Source = GitHub Actions) once.
