import type { Mode } from '../lib/types';

type Props = {
  mode: Mode;
  onChange: (m: Mode) => void;
  answersCount: number;
  allowedCount: number;
};

export function ListToggle({ mode, onChange, answersCount, allowedCount }: Props) {
  return (
    <div className="toggle" role="radiogroup" aria-label="Word list">
      <button
        type="button"
        role="radio"
        aria-checked={mode === 'answers'}
        className={`toggle-btn ${mode === 'answers' ? 'is-on' : ''}`}
        onClick={() => onChange('answers')}
      >
        Possible answers <span className="count">({answersCount.toLocaleString()})</span>
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={mode === 'all'}
        className={`toggle-btn ${mode === 'all' ? 'is-on' : ''}`}
        onClick={() => onChange('all')}
      >
        All allowed guesses <span className="count">({allowedCount.toLocaleString()})</span>
      </button>
    </div>
  );
}
