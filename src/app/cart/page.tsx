"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { removeFromCart, clearCart } from "@/store/cartSlice";
import Link from "next/link";

export default function CartPage() {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">🛒 Mon Panier</h1>

      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={item.id || `cart-item-${index}`} className="flex justify-between p-4 border rounded">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.brand}</p>
                  <p>Quantité : {item.quantity}</p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-sm bg-red-600 text-white px-3 py-1 rounded"
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => dispatch(clearCart())}
            className="mt-6 bg-gray-800 text-white px-4 py-2 rounded"
          >
            Vider le panier
          </button>
          {cart.length > 0 && (
            <Link
              href="/checkout"
              className="mt-6 bg-green-600 text-white px-4 py-2 rounded block text-center"
            >
              Passer la commande
            </Link>
          )}
        </>
      )}
    </div>
  );
}