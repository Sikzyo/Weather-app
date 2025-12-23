import { CloudOff } from "lucide-react";

export default function noWeather() {
  return (
    <section className="flex flex-col place-items-center gap-4">
      <CloudOff color="var(--color-gray-7)" size={100} />
      <span className="text-gray-7 font-manrope text-center text-2xl font-semibold">
        Agrega una ciudad para empezar.
      </span>
    </section>
  );
}
