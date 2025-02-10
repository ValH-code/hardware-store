import Head from "next/head";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commerce Hardware</title>
        <meta name="description" content="Achetez et configurez votre PC facilement" />
      </Head>

      <main className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-center">Bienvenue sur notre boutique Hardware</h1>
        <Button text="Voir les produits" onClick={() => alert("Redirection vers les produits")} />
      </main>
    </>
  );
}
