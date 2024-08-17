import { useRouter } from "next/router";
import { useState } from "react";

const SearchInput: React.FC = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>(
    (router.query.name as string) || ""
  );

  const handleSearch = () => {
    router.push(`/?name=${search}`, undefined, { shallow: true });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex item-center justify-center mt-8">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search Pokemon"
        aria-label="Search Pokemon"
        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none  focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
