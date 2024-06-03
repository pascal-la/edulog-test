"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

const AttachmentsLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ProtectedRoute(AttachmentsLayout);
