import { CloudOff } from "lucide-react";

export default function noWeather() {
  return (
    <section className="flex flex-col place-items-center gap-4">
      <CloudOff color="var(--color-gray-7)" size={100} />
      <span className="text-2xl text-gray-7 text-center font-manrope font-semibold">
        Agrega una ciudad para empezar.
      </span>
    </section>
  );
}
