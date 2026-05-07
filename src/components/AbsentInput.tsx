import type { ChangeEvent } from 'react';

type Props = {
  value: string;
  onChange: (next: string) => void;
  effectiveLetters: string[];
};

export function AbsentInput({ value, onChange, effectiveLetters }: Props) {
  const handle = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

  return (
    <div className="row">
      <div className="row-label">Not in word</div>
      <div className="absent">
        <input
          className="absent-input"
          type="text"
          inputMode="text"
          autoComplete="off"
          spellCheck={false}
          placeholder="e.g. slpcr"
          value={value}
          onChange={handle}
          aria-label="Letters not in the word"
        />
        <div className="chips" aria-live="polite">
          {effectiveLetters.length === 0 ? (
            <span className="chips-empty">no letters yet</span>
          ) : (
            effectiveLetters.map((ch) => (
              <span className="chip" key={ch}>
                {ch.toUpperCase()}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
