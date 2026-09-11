# Metju.Wordler

Lightweight tool to cheat at Wordle.

A static React + Vite single-page app. Tell it which letters you know are green
(right letter, right spot), yellow (in the word, wrong spot), and gray (not in
the word at all). It returns every 5-letter word that still fits — drawn either
from the curated ~2,352-word "Could be solution" answer list (the default) or
the full ~14,855-word "Accepted solutions" dictionary, toggled from the UI.

## Develop

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in ./dist
```

## Word lists

Two lists are bundled at build time:

- **Could be solution** (`src/data/answers.ts`, ~2,352 words) — the curated
  list of words that are plausible/actual Wordle answers, sourced from
  [wordsrated.com](https://wordsrated.com/solvers/wordle-words/). This is
  the default, since it excludes obscure words Wordle would accept as a
  guess but would never pick as the solution.
- **Accepted solutions** (`src/data/words.ts`, ~14,855 words) — the full
  accepted-guess dictionary, sourced from
  [dracos/valid-wordle-words.txt](https://gist.github.com/dracos/dd0668f281e685bad51479e5acaadb93).

Wordle's answer pool isn't fixed — NYT keeps adding new answer words over
time — so the curated list may lag behind the newest additions until it's
refreshed from the source above.

## Deployment

Pushes to `main` are deployed to GitHub Pages by `.github/workflows/deploy.yml`.
Enable Pages in repo settings (Source = GitHub Actions) once.
