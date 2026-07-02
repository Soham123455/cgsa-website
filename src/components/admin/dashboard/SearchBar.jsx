import { Search } from "lucide-react";

function SearchBar({
  search,
  setSearch,
  filter,
  setFilter,
}) {

  const filters = [
    "All",
    "Pending",
    "Approved",
    "Rejected",
  ];

  return (
    <div className="mb-8">

      <div className="relative mb-5">

        <Search
          size={18}
          className="absolute left-4 top-4 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-5 py-3 rounded-xl border focus:ring-2 focus:ring-green-600 outline-none"
        />

      </div>

      <div className="flex gap-3 flex-wrap">

        {filters.map((item) => (

          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-5 py-2 rounded-full transition ${
              filter === item
                ? "bg-green-700 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {item}
          </button>

        ))}

      </div>

    </div>
  );
}

export default SearchBar;