"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      {/* ===== ICON ===== */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex flex-col gap-1 cursor-pointer"
      >
        <div
          className={`w-[23px] h-1 bg-blue-500 rounded-sm ${isOpen ? "rotate-45" : ""} origin-left ease-in-out duration-200`}
        />
        <div
          className={`w-[23px] h-1 bg-blue-500 rounded-sm ${isOpen ? "opacity-0" : ""} ease-in-out duration-500`}
        />
        <div
          className={`w-[23px] h-1 bg-blue-500 rounded-sm ${isOpen ? "-rotate-45" : ""} origin-left ease-in-out duration-200`}
        />
      </div>
      {/* ===== MENU ITEMS ===== */}
      {isOpen && (
        <div className="bg-white absolute left-0 w-full h-[calc(100vh-96px)] top-24 flex flex-col items-center justify-center gap-4 font-medium border">
          <Link href="/">Home</Link>
          <Link href="/">Friends</Link>
          <Link href="/">Groups</Link>
          <Link href="/">Stories</Link>
          <Link href="/">Login</Link>
        </div>
      )}
    </div>
  );
}
