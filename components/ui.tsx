export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[var(--panel)] p-4">
      {children}
    </div>
  );
}

export function AdSlot() {
  return (
    <div className="rounded-xl border border-white/10 p-3 text-sm text-[var(--muted)]">
      Ad — YourZyra Premium hides this
    </div>
  );
}