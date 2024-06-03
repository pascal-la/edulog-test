"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { User } from "@/types/user";

import { authorizationHeaders } from "@/utils/authorizationHeaders";

import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";

export default function UserDetails({ params }: { params: { id: string } }) {
  const { id } = params;

  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(
        `https://localhost:8000/api/users/${id}`,
        { headers: { ...authorizationHeaders } }
      );
      setUser(response.data);
    }
    fetchUser();
  }, [id]);

  return (
    <>
      <Title title={user?.email} />
      <div className="flex">
        <Card>
          <p>id: {user?.id}</p>
          <p>email: {user?.email}</p>
          <p>Roles: {user?.roles}</p>
        </Card>
      </div>
    </>
  );
}
