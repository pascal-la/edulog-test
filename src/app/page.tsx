"use client";

import Link from "next/link";

import ProtectedRoute from "@/components/ProtectedRoute";
import Title from "@/components/ui/Title";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-full text-center">
      <Title title="Bienvenue sur le portail de sortie scolaire" />

      <button
        type="submit"
        className="block mt-8 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <Link href="/front-office">Déposer un fichier</Link>
      </button>
    </div>
  );
};

export default ProtectedRoute(HomePage);
