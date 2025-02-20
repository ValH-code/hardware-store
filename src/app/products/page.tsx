"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/productsSlice";
import { RootState, AppDispatch } from "@/store";
import ProductList from "@/components/ProductList";

export default function ProductsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { items: products, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Nos Produits</h1>

      {loading && <p>Chargement des produits...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {!loading && !error && <ProductList products={products} />}
    </div>
  );
}