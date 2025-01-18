import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="px-4 mt-2">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full h-10 pl-10 pr-4 rounded-xl bg-black/10 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-telegram-primary placeholder-gray-500"
        />
      </div>
    </div>
  );
}