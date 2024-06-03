"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

import { User } from "@/types/user";

import { logout } from "@/app/store";
import { authorizationHeaders } from "@/utils/authorizationHeaders";

export default function UsersPage() {
  const router = useRouter();

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("https://localhost:8000/api/users", {
          headers: { ...authorizationHeaders },
        });
        setUsers(response.data["hydra:member"]);
      } catch (error) {
        router.replace("/login");
        logout();
      }
    }
    fetchUsers();
  }, [router]);

  return (
    <>
      <div className="flex gap-6">
        {users.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`} className="flex">
            <span>{user.email}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
