import { useRef, type KeyboardEvent, type ChangeEvent } from 'react';

type Props = {
  values: (string | null)[];
  onChange: (next: (string | null)[]) => void;
  variant: 'green' | 'yellow';
  label: string;
};

export function LetterRow({ values, onChange, variant, label }: Props) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const setAt = (i: number, ch: string | null) => {
    const next = values.slice();
    next[i] = ch;
    onChange(next);
  };

  const handleChange = (i: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^a-zA-Z]/g, '').slice(-1).toLowerCase();
    setAt(i, raw || null);
    if (raw && i < 4) refs.current[i + 1]?.focus();
  };

  const handleKey = (i: number) => (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !values[i] && i > 0) {
      refs.current[i - 1]?.focus();
    } else if (e.key === 'ArrowLeft' && i > 0) {
      refs.current[i - 1]?.focus();
    } else if (e.key === 'ArrowRight' && i < 4) {
      refs.current[i + 1]?.focus();
    }
  };

  return (
    <div className="row">
      <div className="row-label">{label}</div>
      <div className={`tiles tiles-${variant}`}>
        {values.map((v, i) => (
          <input
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className="tile"
            type="text"
            inputMode="text"
            autoComplete="off"
            autoCapitalize="characters"
            spellCheck={false}
            maxLength={1}
            value={v ? v.toUpperCase() : ''}
            onChange={handleChange(i)}
            onKeyDown={handleKey(i)}
            aria-label={`${label} position ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
