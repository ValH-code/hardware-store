"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          🛒 Hardware Store
        </Link>

        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul
          className={`lg:flex gap-6 ${
            isOpen ? "block" : "hidden"
          } absolute lg:static top-12 left-0 bg-white w-full lg:w-auto p-4 lg:p-0 shadow-lg lg:shadow-none`}
        >
          <li>
            <Link href="/products" className="block px-4 py-2 hover:text-blue-600">
              Produits
            </Link>
          </li>
          <li>
            <Link href="/admin" className="block px-4 py-2 hover:text-blue-600">
              Admin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}