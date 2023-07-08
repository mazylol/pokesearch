"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { BsArrowUpRight } from "react-icons/bs";

export default function Search(props: any) {
  const [name, setName] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  });

  const detectKeyDown = (e: any) => {
    if (e.key === "/") {
      e.preventDefault();
      document.querySelector("input")?.focus();
    } else if (e.key === "Escape") {
      e.preventDefault();
      document.querySelector("input")?.blur();
    }
  }

  return (
    <div className="pt-16 justify-center mx-16">
      <input
        type="text"
        placeholder="Pokemon..."
        className="h-12 w-full rounded-md px-2 focus:border-blue-500 border-2"
        onChange={(e) => setName(e.target.value)}
      />
      <ul className="mt-8 flex flex-col w-full bg-white rounded-md max-h-[80vh] overflow-scroll">
        {props.pokemon.map((species: any, key: number) => {
          if (species.name.includes(name) && name !== "") {
            return (
              <li
                key={key}
                className="mx-auto text-xl first-letter:uppercase group flex flex-row"
              >
                <Link href={species.name}>{species.name}</Link>
                <BsArrowUpRight className="text-xs group-hover:text-blue-500 group-hover:translate-y-1 translate-y-2 transition-all duration-100" />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
