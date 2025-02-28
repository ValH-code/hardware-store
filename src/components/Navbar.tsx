"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Navbar() {
  const cartCount = useSelector((state: RootState) => state.cart.items.length);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          🛒 Hardware Store
        </Link>

        <ul className="flex gap-6">
          <li>
            <Link href="/products" className="hover:text-blue-600">
              Produits
            </Link>
          </li>
          <li>
            <Link href="/admin" className="hover:text-blue-600">
              Admin
            </Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-blue-600">
              Panier ({cartCount})
            </Link>
          </li>
          <li>
            <Link href="/orders" className="hover:text-blue-600">
              Mes Commandes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}