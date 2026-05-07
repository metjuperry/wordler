type Props = {
  href: string;
};

export function GitHubRibbon({ href }: Props) {
  return (
    <a
      className="gh-ribbon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View source on GitHub"
    >
      <span className="gh-ribbon-text">Fork me on GitHub</span>
    </a>
  );
}
