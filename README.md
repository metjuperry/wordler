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

Sourced from [steve-kasica/wordle-words](https://github.com/steve-kasica/wordle-words)
and bundled at build time into `src/data/answers.ts` and `src/data/allowed.ts`.
The `answers` list is the original ~2,315-word Wordle answer pool; `allowed`
is the full ~12,970-word valid-guess list. Note: NYT has tweaked the answer
pool over time, so the answers list is a snapshot — for full coverage of
edge cases, use the "All allowed guesses" toggle (which is the default).

## Deployment

Pushes to `main` are deployed to GitHub Pages by `.github/workflows/deploy.yml`.
Enable Pages in repo settings (Source = GitHub Actions) once.
