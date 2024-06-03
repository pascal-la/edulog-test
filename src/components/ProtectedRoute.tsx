import { useRouter } from "next/navigation";

import useAuthStore from "@/app/store";

export default function ProtectedRoute(Component: any) {
  return function ProtectedComponent(props: any) {
    const { isLoggedIn } = useAuthStore();

    const router = useRouter();

    if (!isLoggedIn) {
      router.replace("/login");
    }

    return <Component {...props} />;
  };
}
