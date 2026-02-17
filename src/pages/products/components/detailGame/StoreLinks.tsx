interface StoreLinksProps {
  stores: { store: { id: number; name: string; domain: string } }[];
}

export function StoreLinks({ stores }: StoreLinksProps) {
  if (stores.length === 0) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-base font-semibold text-white mb-4">Available On</h2>
      <div className="flex flex-wrap gap-2">
        {stores.map(({ store }) => (
          <a
            key={store.id}
            href={`https://${store.domain}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4 py-2 rounded-xl text-sm bg-slate-800 text-slate-300
              border border-slate-700 hover:border-indigo-500/60 hover:text-white
              transition flex items-center gap-2
            "
          >
            🛒 {store.name}
          </a>
        ))}
      </div>
    </div>
  );
}
