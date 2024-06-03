"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

const FormsLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ProtectedRoute(FormsLayout);
