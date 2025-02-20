import ProductList from "@/components/ProductList";
import { Product } from "@/types/product";

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

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Nos Produits</h1>
      <ProductList products={products} />
    </div>
  );
}