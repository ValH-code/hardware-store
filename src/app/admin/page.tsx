"use client";

import { useState } from "react";
import { Product } from "@/types/product";

export default function AdminPage() {
  const [product, setProduct] = useState<Partial<Product>>({
    name: "",
    brand: "",
    category: "",
    price: 0,
    stock: 0,
    image: "",
    description: "",
  });

  const [message, setMessage] = useState<string | null>(null); // Ajout d'un message de confirmation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        setMessage("Produit ajouté avec succès !");
        setProduct({ // Réinitialisation du formulaire après soumission
          name: "",
          brand: "",
          category: "",
          price: 0,
          stock: 0,
          image: "",
          description: "",
        });
      } else {
        throw new Error("Erreur lors de l'ajout du produit.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Une erreur est survenue.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Ajouter un produit</h1>

      {message && (
        <p className="mb-4 p-2 text-white bg-green-500 rounded">{message}</p>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
        <label className="block mb-2">
          Nom du produit :
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>

        <label className="block mb-2">
          Marque :
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>

        <label className="block mb-2">
          Catégorie :
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>

        <label className="block mb-2">
          Prix (€) :
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>

        <label className="block mb-2">
          Stock :
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>

        <label className="block mb-2">
          Image URL :
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>

        <label className="block mb-2">
          Description :
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          ></textarea>
        </label>

        <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
          Ajouter le produit
        </button>
      </form>
    </div>
  );
}