"use client";

import useAuthStore from "@/app/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    // to ensure that the state update occurs after the component has rendered
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn, router]);

  return <div>{children}</div>;
}
