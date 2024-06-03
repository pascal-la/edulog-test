"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

import { User } from "@/types/user";

import { logout } from "@/app/store";
import { authorizationHeaders } from "@/utils/authorizationHeaders";

import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";

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
      <Title title="Utilisateurs" />
      <div className="flex gap-6">
        {users.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`} className="flex">
            <Card clickable>
              <p>{user.email}</p>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
