"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { clearCart } from "@/store/cartSlice";
import { useState } from "react";

export default function CheckoutPage() {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const orderData = {
      customerName,
      address,
      paymentMethod,
      items: cart.map((item) => ({
        name: item.name,
        brand: item.brand,
        price: item.price,
        quantity: item.quantity,
      })),
      totalAmount: cart.reduce((total, item) => total + item.price * item.quantity, 0),
    };
  
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });
  
      const data = await response.json();
      console.log("Réponse API:", data);

      if (response.ok) {
        setIsSubmitted(true);
        dispatch(clearCart());
      } else {
        console.error("Erreur lors de la commande");
      }
    } catch (error) {
      console.error("Erreur serveur", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      {isSubmitted ? (
        <div className="text-center py-8">
          <h2 className="text-2xl text-green-600 font-bold">
            🎉 Commande confirmée !
          </h2>
          <p className="mt-4">
            Merci {customerName} pour votre commande.
          </p>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-6">🛒 Validation de la commande</h1>

          {cart.length === 0 ? (
            <p>Votre panier est vide.</p>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded">
              <div className="mb-4">
                <label className="block font-bold">Nom complet :</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded mt-1"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block font-bold">Adresse de livraison :</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded mt-1"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block font-bold">Méthode de paiement :</label>
                <select
                  className="w-full p-2 border rounded mt-1"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="credit_card">Carte bancaire</option>
                  <option value="paypal">PayPal</option>
                  <option value="bank_transfer">Virement bancaire</option>
                </select>
              </div>

              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
                Confirmer la commande
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
}