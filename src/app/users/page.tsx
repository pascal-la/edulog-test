"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import useAuthStore from "@/app/store";

export default function UsersPage() {
  const { tokenName } = useAuthStore();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get("https://localhost:8000/api/users", {
        headers: { Authorization: `Bearer ${localStorage.getItem(tokenName)}` },
      });
      setUsers(response.data["hydra:member"]);
    }
    fetchUsers();
  }, [tokenName]);

  return (
    <>
      <div className="flex gap-6">
        {users.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`} className="flex">
            <p>{user.email}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
