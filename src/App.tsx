import { useMemo, useState } from 'react';
import { LetterRow } from './components/LetterRow';
import { AbsentInput } from './components/AbsentInput';
import { ListToggle } from './components/ListToggle';
import { Results } from './components/Results';
import { GitHubRibbon } from './components/GitHubRibbon';
import { filterWords, normalizeAbsent } from './lib/filter';
import type { Mode } from './lib/types';
import { WORDS_ALL, WORDS_COMMON } from './data/words';

const EMPTY: (string | null)[] = [null, null, null, null, null];

export default function App() {
  const [greens, setGreens] = useState<(string | null)[]>(EMPTY);
  const [yellows, setYellows] = useState<(string | null)[]>(EMPTY);
  const [absent, setAbsent] = useState('');
  const [mode, setMode] = useState<Mode>('common');

  const effectiveAbsent = useMemo(
    () => Array.from(normalizeAbsent(absent, greens, yellows)).sort(),
    [absent, greens, yellows],
  );

  const hasConstraints =
    greens.some(Boolean) || yellows.some(Boolean) || effectiveAbsent.length > 0;

  const list = mode === 'common' ? WORDS_COMMON : WORDS_ALL;
  const matches = useMemo(
    () => (hasConstraints ? filterWords({ greens, yellows, absent }, list) : []),
    [greens, yellows, absent, hasConstraints, list],
  );

  const handleClear = () => {
    setGreens(EMPTY);
    setYellows(EMPTY);
    setAbsent('');
  };

  return (
    <div className="app">
      <GitHubRibbon href="https://github.com/metjuperry/wordler" />
      <header className="header">
        <h1>Wordler</h1>
        <p className="tagline">Cheat at Wordle, responsibly.</p>
      </header>

      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <LetterRow values={greens} onChange={setGreens} variant="green" label="Green" />
        <LetterRow values={yellows} onChange={setYellows} variant="yellow" label="Yellow" />
        <AbsentInput value={absent} onChange={setAbsent} effectiveLetters={effectiveAbsent} />

        <ListToggle
          mode={mode}
          onChange={setMode}
          commonCount={WORDS_COMMON.length}
          allCount={WORDS_ALL.length}
        />

        <div className="wordcount" aria-live="polite">
          {hasConstraints ? (
            <>
              <strong>{matches.length.toLocaleString()}</strong> match
              {matches.length === 1 ? '' : 'es'} in {list.length.toLocaleString()} words
            </>
          ) : (
            <>Searching {list.length.toLocaleString()} words</>
          )}
        </div>

        <div className="actions">
          <button type="button" className="btn btn-ghost" onClick={handleClear}>Clear</button>
        </div>
      </form>

      <Results words={hasConstraints ? matches : null} />

      <footer className="footer">
        <span>Yellow tiles mean the letter is in the word but not at that position.</span>
      </footer>
    </div>
  );
}
