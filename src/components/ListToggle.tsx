import type { Mode } from '../lib/types';

type Props = {
  mode: Mode;
  onChange: (m: Mode) => void;
  commonCount: number;
  allCount: number;
};

export function ListToggle({ mode, onChange, commonCount, allCount }: Props) {
  return (
    <div className="toggle" role="radiogroup" aria-label="Word list">
      <button
        type="button"
        role="radio"
        aria-checked={mode === 'common'}
        className={`toggle-btn ${mode === 'common' ? 'is-on' : ''}`}
        onClick={() => onChange('common')}
      >
        Common answers <span className="count">({commonCount.toLocaleString()})</span>
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={mode === 'all'}
        className={`toggle-btn ${mode === 'all' ? 'is-on' : ''}`}
        onClick={() => onChange('all')}
      >
        All valid guesses <span className="count">({allCount.toLocaleString()})</span>
      </button>
    </div>
  );
}
