import { connectDB } from "@/utils/db";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const newProduct = await Product.create(body);
  const formattedProduct = {
    id: newProduct._id.toString(), // 🔥 Assure que l’ID est un string
    ...newProduct.toObject(),
  };
  return NextResponse.json(formattedProduct, { status: 201 });
}