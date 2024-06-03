"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { authorizationHeaders } from "@/utils/authorizationHeaders";

import { Form } from "@/types/form";

import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";

export default function FormDetails({ params }: { params: { id: string } }) {
  const { id } = params;

  const [form, setForm] = useState<Form>();

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get(
          `https://localhost:8000/api/forms/${id}`,
          { headers: { ...authorizationHeaders } }
        );
        setForm(response.data);
      } catch (error) {
        console.error("Error fetching form:", error);
      }
    };
    fetchForms();
  }, [id]);

  return (
    <>
      <Title title={form?.lastname} />
      <div className="flex">
        <Card>
          <div className="grid gap-5">
            <p>id: {form?.id}</p>
            <p>Prénom: {form?.firstname}</p>
            <p>Nom: {form?.lastname}</p>
            <p>Date de naissance: {form?.birthDate}</p>
            <p>Téléphone: {form?.phone}</p>
            <p>Adresse: {form?.address}</p>
            <p>Accord parental: {form?.parentalAgreement}</p>
            <p>Droit d&apos;image: {form?.imageRightAgreement}</p>
            <p>Nom de l&apos;élève: {form?.lastnameStudent}</p>
            <p>Prénom de l&apos;élève: {form?.firstnameStudent}</p>
          </div>
        </Card>
      </div>
    </>
  );
}
