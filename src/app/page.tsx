"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

const HomePage = () => {
  return (
    <div className="w-full text-center">
      <h1>Bienvenue sur le portail de sortie scolaire</h1>
    </div>
  );
};

export default ProtectedRoute(HomePage);
