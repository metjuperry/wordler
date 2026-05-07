import type { Constraints } from './types';

export function normalizeAbsent(absent: string, greens: (string | null)[], yellows: (string | null)[]): Set<string> {
  const keep = new Set<string>();
  for (const g of greens) if (g) keep.add(g.toLowerCase());
  for (const y of yellows) if (y) keep.add(y.toLowerCase());
  const out = new Set<string>();
  for (const ch of absent.toLowerCase()) {
    if (ch >= 'a' && ch <= 'z' && !keep.has(ch)) out.add(ch);
  }
  return out;
}

export function filterWords(c: Constraints, list: readonly string[]): string[] {
  const greens = c.greens.map((g) => (g ? g.toLowerCase() : null));
  const yellows = c.yellows.map((y) => (y ? y.toLowerCase() : null));
  const absent = normalizeAbsent(c.absent, greens, yellows);

  const yellowList: { letter: string; pos: number }[] = [];
  for (let i = 0; i < 5; i++) {
    const y = yellows[i];
    if (y) yellowList.push({ letter: y, pos: i });
  }

  return list.filter((w) => {
    for (let i = 0; i < 5; i++) {
      const g = greens[i];
      if (g && w[i] !== g) return false;
    }
    for (const { letter, pos } of yellowList) {
      if (w[pos] === letter) return false;
      if (!w.includes(letter)) return false;
    }
    for (const ch of absent) {
      if (w.includes(ch)) return false;
    }
    return true;
  });
}
