// src/app/profile/page.tsx

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-white/10 bg-gray-900 p-4">{children}</div>;
}

export default function ProfilePage() {
  const user = {
    name: "Jason",
    handle: "jaydoo",
    bio: "YourZyra — Your World, Your Way.",
    bannerUrl: "",
    musicUrl: "",
    theme: "neon-purple",
  };

  return (
    <div className="space-y-4">
      <Card>
        <div
          className="h-40 w-full rounded-xl bg-gradient-to-r from-fuchsia-500/30 to-sky-500/30"
          style={user.bannerUrl ? { backgroundImage: `url(${user.bannerUrl})`, backgroundSize: "cover" } : {}}
        />
        <div className="px-2">
          <div className="-mt-10 mb-2">
            <div className="size-20 rounded-2xl border-4 border-gray-900 bg-white/10" />
          </div>
          <h1 className="text-2xl font-semibold">{user.name}</h1>
          <div className="text-zyra-muted">@{user.handle}</div>
          <p className="mt-3">{user.bio}</p>

          <div className="mt-4">
            <label className="text-sm text-zyra-muted">Theme</label>
            <select className="ml-2 rounded-lg bg-white/5 px-2 py-1">
              <option>neon-purple</option>
              <option>electric-blue</option>
              <option>sunset-orange</option>
            </select>
          </div>

          {user.musicUrl && (
            <audio controls className="mt-3 w-full">
              <source src={user.musicUrl} />
            </audio>
          )}
        </div>
      </Card>

      <section>
        <h2 className="mb-2 text-lg font-semibold">Posts</h2>
        <p className="text-zyra-muted">No posts yet.</p>
      </section>
    </div>
  );
}