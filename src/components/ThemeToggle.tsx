"use client";

import { useTheme } from "next-themes";
import { SlCup, SlGhost } from "react-icons/sl";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col justify-center items-center ml-3 relative">
      <input
        type="checkbox"
        name="light-switch"
        className="absolute z-10 cursor-pointer size-6 opacity-0"
        checked={theme === "light"}
        onChange={() => {
          if (theme === "dark") {
            return setTheme("light");
          }
          return setTheme("dark");
        }}
      />
      <label className="relative cursor-pointer p-2">
        <div className="flex items-center border border-zinc-800 p-2 rounded-md">
          <span className="block dark:hidden text-zinc-800">
            <SlCup size={30} />
          </span>
          <span className="hidden dark:block text-purple">
            <SlGhost size={30} />
          </span>
        </div>
        <span className="sr-only">Switch to light / dark version</span>
      </label>
    </div>
  );
}
