import NoWeather from "../components/noWeather.jsx";

export default function App() {
  return (
    <>
      <header className="flex">
        <h1 className="font-manrope font-bold text-3xl">Climas</h1>
      </header>
      <main className="grid grow place-items-center">
        <NoWeather />
      </main>
      <footer className="flex">
        <p>Barra de búsqueda</p>
      </footer>
    </>
  );
}
