type Props = {
  words: string[] | null;
};

const PAGE = 500;

export function Results({ words }: Props) {
  if (words === null) {
    return null;
  }
  if (words.length === 0) {
    return <div className="results results-empty">No words match those constraints.</div>;
  }
  const shown = words.slice(0, PAGE);
  return (
    <div className="results">
      {words.length > PAGE && (
        <div className="results-meta">Showing first {PAGE.toLocaleString()}.</div>
      )}
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
