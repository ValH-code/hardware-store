import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema(
  {
    customerName: { type: String, required: true },
    address: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    items: [
      {
        name: String,
        brand: String,
        price: Number,
        quantity: Number,
      },
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: "En attente" }, // Statut de la commande
  },
  { timestamps: true }
);

export const Order = models.Order || model("Order", OrderSchema);