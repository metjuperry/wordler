export type ListMode = 'solution' | 'accepted';

type Props = {
  value: ListMode;
  onChange: (next: ListMode) => void;
};

export function ListModeToggle({ value, onChange }: Props) {
  return (
    <div className="row">
      <div className="row-label">Word list</div>
      <div className="list-toggle" role="radiogroup" aria-label="Word list">
        <button
          type="button"
          role="radio"
          aria-checked={value === 'solution'}
          className={`list-toggle-btn${value === 'solution' ? ' active' : ''}`}
          onClick={() => onChange('solution')}
        >
          Could be solution
        </button>
        <button
          type="button"
          role="radio"
          aria-checked={value === 'accepted'}
          className={`list-toggle-btn${value === 'accepted' ? ' active' : ''}`}
          onClick={() => onChange('accepted')}
        >
          Accepted solutions
        </button>
      </div>
    </div>
  );
}
