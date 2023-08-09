"use client";
import { MENU_OTIONS } from "@/contains";
import Link from "next/link";

export const Menu = () => {
  const onURL = (e) => {
    e.preventDefault();
    const target = e.currentTarget;
    const value = target.getAttribute("href");
    const offsetTop = document.querySelector(value).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <nav>
      <ul>
        {MENU_OTIONS.map((itme) => (
          <li key={itme.id}>
            <Link href={itme.url} onClick={() => onURL}>
              {itme.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
