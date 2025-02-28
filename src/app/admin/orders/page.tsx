"use client";

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

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const updateStatus = async (id: string, newStatus: string) => {
    await fetch(`/api/orders/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });

    // Mettre à jour l'état local après la modification
    setOrders(orders.map(order => 
      order._id === id ? { ...order, status: newStatus } : order
    ));
  };

  const deleteOrder = async (id: string) => {
    await fetch(`/api/orders/${id}`, { method: "DELETE" });

    // Supprimer la commande de l'affichage
    setOrders(orders.filter(order => order._id !== id));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">📋 Gestion des Commandes</h1>

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
              <p>Statut : 
                <select
                  value={order.status}
                  onChange={(e) => updateStatus(order._id, e.target.value)}
                  className="ml-2 border p-1"
                >
                  <option value="En attente">En attente</option>
                  <option value="En cours">En cours</option>
                  <option value="Livrée">Livrée</option>
                </select>
              </p>

              <button
                onClick={() => deleteOrder(order._id)}
                className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}