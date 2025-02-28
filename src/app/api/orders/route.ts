import { connectDB } from "@/utils/db";
import { Order } from "@/models/Order";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const orders = await Order.find().sort({ createdAt: -1 }); // Trier par date
    return NextResponse.json(orders);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    console.log("Requête reçue:", body); // Debug

    if (!body.customerName || !body.address || !body.items || !body.totalAmount) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    const newOrder = await Order.create(body);
    console.log("Commande enregistrée:", newOrder);

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.error("Erreur serveur:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}