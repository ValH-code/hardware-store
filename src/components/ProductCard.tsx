import Link from "next/link";
import { Product } from "@/types/product";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <Image
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.brand}</p>
      <p className="font-bold text-blue-600 mt-2">{product.price}€</p>
      <Link
        href={`/products/${product.id}`}
        className="mt-3 inline-block text-sm text-white bg-blue-600 px-3 py-1 rounded"
      >
        Voir détails
      </Link>
    </div>
  );
}