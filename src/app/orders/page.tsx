"use client"; // ✅ Force le rendu côté client

import { useEffect, useState } from "react";

interface Order {
  _id: string;
  customerName: string;
  address: string;
  paymentMethod: string;
  totalAmount: number;
  status: string;
  createdAt: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isClient, setIsClient] = useState(false); // ✅ Ajout d'une vérification

  useEffect(() => {
    setIsClient(true); // ✅ Empêche le SSR
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  if (!isClient) {
    return <p>Chargement...</p>; // ✅ Évite le mismatch entre SSR et Client
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">📦 Mes Commandes</h1>

      {orders.length === 0 ? (
        <p>Aucune commande pour le moment.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order._id} className="p-4 border rounded">
              <p><strong>Commande #{order._id}</strong></p>
              <p>Client : {order.customerName}</p>
              <p>Adresse : {order.address}</p>
              <p>Total : {order.totalAmount}€</p>
              <p>Statut : {order.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}