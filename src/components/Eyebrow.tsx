import type { ReactNode } from "react";

export default function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
      {children}
    </p>
  );
}

export const SECTION_TITLE_CLASS =
  "mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl";