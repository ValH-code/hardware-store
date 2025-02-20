import { Product } from "@/types/product";
import { notFound } from "next/navigation";
import Image from "next/image";

const products: Product[] = [
  {
    id: "1",
    name: "Carte Graphique RTX 4090",
    brand: "NVIDIA",
    category: "Carte Graphique",
    price: 1799,
    stock: 5,
    image: "",
    description: "Puissance extrême pour le gaming et la création.",
    specifications: { VRAM: "24 Go GDDR6X", "Fréquence": "2.52 GHz" },
  },
  {
    id: "2",
    name: "Processeur Intel i9-13900K",
    brand: "Intel",
    category: "Processeur",
    price: 649,
    stock: 10,
    image: "",
    description: "Performances exceptionnelles pour les jeux et le multitâche.",
    specifications: { "Cœurs": "24", "Threads": "32", "Fréquence": "5.8 GHz" },
  },
];

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.brand}</p>
          <p className="text-lg text-blue-600 font-bold mt-2">{product.price}€</p>
          <p className="mt-4">{product.description}</p>
          <ul className="mt-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <li key={key} className="text-sm text-gray-500">
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}