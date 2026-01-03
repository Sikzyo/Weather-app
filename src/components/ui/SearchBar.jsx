import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(false);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleActive = () => {
    setActive(!active);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`flex h-[46px] w-full max-w-3xl items-center gap-4 rounded-full border p-2 transition-all ${active ? "border-indigo-8 border-3" : "border-mauve-7"}`}
      >
        <Search color="var(--color-mauve-12)" />
        <input
          type="text"
          name="city"
          value={search}
          onChange={handleSearch}
          placeholder="Busca una ubicación..."
          className="w-full focus:outline-none"
          onFocus={handleActive}
          onBlur={handleActive}
        />
      </form>
    </>
  );
}
