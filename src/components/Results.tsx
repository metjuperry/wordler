type Props = {
  words: string[] | null;
};

const PAGE = 500;

export function Results({ words }: Props) {
  if (words === null) {
    return (
      <div className="results results-idle">
        Fill in what you know and hit <strong>Find</strong>.
      </div>
    );
  }
  if (words.length === 0) {
    return <div className="results results-empty">No words match those constraints.</div>;
  }
  const shown = words.slice(0, PAGE);
  return (
    <div className="results">
      <div className="results-meta">
        {words.length.toLocaleString()} match{words.length === 1 ? '' : 'es'}
        {words.length > PAGE && <> — showing first {PAGE.toLocaleString()}</>}
      </div>
      <ul className="word-grid">
        {shown.map((w) => (
          <li key={w} className="word">
            {w.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
}
