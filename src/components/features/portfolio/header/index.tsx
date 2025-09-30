interface IPortfolioHeader {
    allTags: string[];
    sort: string;
    setSort: (val: string) => void;
    query: string;
    setQuery: (val: string) => void;
    activeTags: string[];
    setActiveTags: () => void;
    toggleTag: (val: string) => void;
}

export default function Portfolioheader({ activeTags, allTags, query, setActiveTags, setQuery, setSort, sort, toggleTag } : IPortfolioHeader) {
  return (
    <header className="max-w-6xl mx-auto mb-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">My Projects</h1>
            <p className="mt-2 text-gray-600">Selected projects — case studies, prototypes, and experiments.</p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <label className="text-sm text-gray-600 mr-2">Sort</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as "newest" | "oldest" | "name")}
              className="border rounded px-2 py-1 bg-white text-sm"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="md:col-span-2">
            <label htmlFor="search" className="sr-only">
              Search projects
            </label>
            <div className="relative">
              <input
                id="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title or description..."
                className="w-full rounded-md border border-gray-200 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-sm opacity-60"
                  aria-label="Clear search"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 md:justify-end">
            <div className="md:hidden">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as "newest" | "oldest" | "name")}
                className="border rounded px-2 py-1 bg-white text-sm"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="name">Name</option>
              </select>
            </div>
            <button
              onClick={() => {
                setQuery("");
                setActiveTags();
                setSort("newest");
              }}
              className="text-sm px-3 py-1 border rounded bg-white"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {allTags.map((t) => {
            const active = activeTags.includes(t);
            return (
              <button
                key={t}
                onClick={() => toggleTag(t)}
                className={`text-sm px-3 py-1 rounded-full border ${
                  active ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-gray-700"
                }`}
                aria-pressed={active}
              >
                {t}
              </button>
            );
          })}
        </div>
      </header>
  )
}
