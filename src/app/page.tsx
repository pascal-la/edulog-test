"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import Title from "@/components/ui/Title";

const HomePage = () => {
  return (
    <div className="w-full text-center">
      <Title title="Bienvenue sur le portail de sortie scolaire" />
    </div>
  );
};

export default ProtectedRoute(HomePage);
