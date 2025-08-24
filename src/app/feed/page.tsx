// src/app/feed/page.tsx

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-white/10 bg-gray-900 p-4">{children}</div>;
}

function AdSlot() {
  return (
    <div className="rounded-xl border border-white/10 p-3 text-sm text-zyra-muted">
      Ad — YourZyra Premium hides this
    </div>
  );
}

const mockPosts = [
  { id: "1", author: { name: "Nova", handle: "nova" }, body: "Hello, YourZyra! 🚀", mediaUrl: "", createdAt: "2m" },
  { id: "2", author: { name: "Kai", handle: "kai" }, body: "New track dropping tonight.", mediaUrl: "", createdAt: "12m" },
];

const mockTrending = [
  { id: "t1", tag: "First Friday", city: "Phoenix" },
  { id: "t2", tag: "Indie gigs", city: "Tempe" },
];

const mockCreators = [
  { id: "c1", name: "DJ Prism", handle: "prism" },
  { id: "c2", name: "Violet Ink", handle: "violet" },
];

export default function FeedPage() {
  return (
    <div className="grid gap-6 md:grid-cols-[1fr_320px]">
      <section className="space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <span className="px-2 py-1 rounded-lg bg-white/5">Chronological</span>
          <button className="px-2 py-1 rounded-lg hover:bg-white/5">Smart</button>
        </div>

        <AdSlot />

        {mockPosts.map((p) => (
          <Card key={p.id}>
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-white/10" />
              <div>
                <div className="font-medium">
                  {p.author.name} <span className="text-zyra-muted">@{p.author.handle}</span>
                </div>
                <div className="text-xs text-zyra-muted">{p.createdAt}</div>
              </div>
            </div>
            <p className="mt-3 whitespace-pre-wrap">{p.body}</p>
          </Card>
        ))}
      </section>

      <aside className="space-y-4">
        <Card>
          <h3 className="font-semibold">Trending Near You</h3>
          <ul className="mt-2 space-y-1 text-sm text-zyra-muted">
            {mockTrending.map((t) => (
              <li key={t.id}>#{t.tag} · {t.city}</li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="font-semibold">Spotlight Creators</h3>
          <ul className="mt-2 grid grid-cols-2 gap-3">
            {mockCreators.map((c) => (
              <li key={c.id} className="rounded-xl border border-white/10 p-3">
                <div className="size-10 rounded-full bg-white/10 mb-2" />
                <div className="text-sm font-medium">{c.name}</div>
                <div className="text-xs text-zyra-muted">@{c.handle}</div>
                <button className="mt-2 w-full rounded-lg bg-fuchsia-500/20 py-1.5 text-sm hover:bg-fuchsia-500/30">
                  Follow
                </button>
              </li>
            ))}
          </ul>
        </Card>

        <AdSlot />
      </aside>
    </div>
  );
}