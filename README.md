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

## Word list

Sourced from [dracos/valid-wordle-words.txt](https://gist.github.com/dracos/dd0668f281e685bad51479e5acaadb93)
— the community-maintained list of valid Wordle words (~14,855) — and
bundled at build time into `src/data/words.ts`.

## Deployment

Pushes to `main` are deployed to GitHub Pages by `.github/workflows/deploy.yml`.
Enable Pages in repo settings (Source = GitHub Actions) once.
