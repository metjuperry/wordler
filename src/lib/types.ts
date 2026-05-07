export type Slot = string | null;

export type Constraints = {
  greens: Slot[];
  yellows: Slot[];
  absent: string;
};

export type Mode = 'answers' | 'all';
