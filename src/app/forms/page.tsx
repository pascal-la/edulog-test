"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import { Form } from "@/types/form";

import { authorizationHeaders } from "@/utils/authorizationHeaders";

import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";

export default function FormsPage() {
  async function fetchForms() {
    const response = await axios.get("https://localhost:8000/api/forms", {
      headers: { ...authorizationHeaders },
    });
    setForms(response.data["hydra:member"]);
  }

  const [forms, setForms] = useState<Form[]>([]);

  useEffect(() => {
    fetchForms();
  }, []);

  return (
    <>
      <Title title="Fichiers" />
      <div className="flex gap-6">
        {forms.map((form) => (
          <Link key={form.id} href={`/forms/${form.id}`} className="flex">
            <Card clickable>
              <p>id: {form.id}</p>
              <p>Prénom: {form.firstname}</p>
              <p>Nom: {form.lastname}</p>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
