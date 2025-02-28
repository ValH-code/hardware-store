"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="w-full h-auto object-cover rounded-md"
      />
      <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.brand}</p>
      <p className="font-bold text-blue-600 mt-2">{product.price}€</p>

      <div className="flex gap-2 mt-3">
        <Link
          href={`/products/${product.id}`}
          className="text-sm text-white bg-blue-600 px-3 py-1 rounded"
        >
          Voir détails
        </Link>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="text-sm text-white bg-green-600 px-3 py-1 rounded"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}