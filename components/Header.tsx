"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const nav = [
  { name: "Hjem", href: "/" },
  { name: "Handlinger", href: "/actions" },
  { name: "Utslippskilder", href: "/emitters" },
  { name: "Kalkulator", href: "/calculator" },
  { name: "Resultat", href: "/result" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  // aktiv lenke
  const isActive = (href: string) =>
    path === href || path.startsWith(href + "/");

  return (
    <header className="border-b-2 border-red-500 bg-background text-foreground">
      <nav className="container mx-auto px-4 py-3" aria-label="Hovedmeny">
        <div className="flex items-center justify-between gap-3">
          {/* logo */}
          <Link href="/" className="flex flex-col items-center md:pl-20">
            <div className="relative w-20 h-10 md:w-[200px] md:h-[80px] rounded-2xl overflow-hidden border border-green-200 shadow-sm">
              <Image
                src="/actions/logo.jpg"
                alt="Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="mt-1 text-xl md:text-2xl text-green-300 font-bold text-center">
              ØKO VERDEN
            </span>
          </Link>

          {/* mobil-knapp */}
          <button
            aria-label="Åpne meny"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <div className="hidden md:flex items-center gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-2xl px-8 py-1 rounded leading-none font-semibold inline-flex items-center h-10 hover:bg-red-500 transition ${
                  isActive(item.href) ? "bg-gray-600" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* mobil-meny */}
        <div className={`md:hidden ${open ? "block" : "hidden"} mt-3`}>
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-2xl px-4 py-3 rounded leading-none font-semibold hover:bg-gray-100 transition ${
                  isActive(item.href) ? "bg-gray-300" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
