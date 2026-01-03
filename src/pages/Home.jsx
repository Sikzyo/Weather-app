import NoWeather from "../components/ui/NoWeather.jsx";
import SearchBar from "../components/ui/SearchBar.jsx";

export default function App() {
  return (
    <>
      <header className="flex">
        <h1 className="font-manrope text-3xl font-bold md:text-4xl">Climas</h1>
      </header>
      <main className="grid grow place-items-center">
        <NoWeather />
      </main>
      <footer className="flex justify-center">
        <SearchBar />
      </footer>
    </>
  );
}
