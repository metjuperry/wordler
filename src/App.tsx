import { useMemo, useState, type FormEvent } from 'react';
import { LetterRow } from './components/LetterRow';
import { AbsentInput } from './components/AbsentInput';
import { ListToggle } from './components/ListToggle';
import { Results } from './components/Results';
import { GitHubRibbon } from './components/GitHubRibbon';
import { filterWords, normalizeAbsent } from './lib/filter';
import type { Mode } from './lib/types';
import { ANSWERS } from './data/answers';
import { ALLOWED } from './data/allowed';

const EMPTY: (string | null)[] = [null, null, null, null, null];

export default function App() {
  const [greens, setGreens] = useState<(string | null)[]>(EMPTY);
  const [yellows, setYellows] = useState<(string | null)[]>(EMPTY);
  const [absent, setAbsent] = useState('');
  const [mode, setMode] = useState<Mode>('answers');
  const [results, setResults] = useState<string[] | null>(null);

  const effectiveAbsent = useMemo(
    () => Array.from(normalizeAbsent(absent, greens, yellows)).sort(),
    [absent, greens, yellows],
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const list = mode === 'answers' ? ANSWERS : ALLOWED;
    setResults(filterWords({ greens, yellows, absent }, list));
  };

  const handleClear = () => {
    setGreens(EMPTY);
    setYellows(EMPTY);
    setAbsent('');
    setResults(null);
  };

  return (
    <div className="app">
      <GitHubRibbon href="https://github.com/metjuperry/wordler" />
      <header className="header">
        <h1>Metju.Wordler</h1>
        <p className="tagline">Cheat at Wordle, responsibly.</p>
      </header>

      <form onSubmit={handleSubmit} className="form">
        <LetterRow values={greens} onChange={setGreens} variant="green" label="Green" />
        <LetterRow values={yellows} onChange={setYellows} variant="yellow" label="Yellow" />
        <AbsentInput value={absent} onChange={setAbsent} effectiveLetters={effectiveAbsent} />

        <ListToggle
          mode={mode}
          onChange={setMode}
          answersCount={ANSWERS.length}
          allowedCount={ALLOWED.length}
        />

        <div className="actions">
          <button type="submit" className="btn btn-primary">Find</button>
          <button type="button" className="btn btn-ghost" onClick={handleClear}>Clear</button>
        </div>
      </form>

      <Results words={results} />

      <footer className="footer">
        <span>Yellow tiles mean the letter is in the word but not at that position.</span>
      </footer>
    </div>
  );
}
