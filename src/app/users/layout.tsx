"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ProtectedRoute(UsersLayout);
