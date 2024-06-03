"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import { Address } from "@/types/address";
import { Form } from "@/types/form";

import { authorizationHeaders } from "@/utils/authorizationHeaders";

import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";

export default function FormDetails({ params }: { params: { id: string } }) {
  const { id } = params;

  const [form, setForm] = useState<Form>();
  const [address, setAddress] = useState<Address>();

  useEffect(() => {
    const fetchForms = async () => {
      const response = await axios.get(
        `https://localhost:8000/api/forms/${id}`,
        { headers: { ...authorizationHeaders } }
      );
      setForm(response.data);
    };
    fetchForms();
  }, [id]);

  useEffect(() => {
    const fetchAddress = async () => {
      if (form?.address) {
        const response = await axios.get(
          `https://localhost:8000${form.address}`,
          { headers: { ...authorizationHeaders } }
        );
        setAddress(response.data);
      }
    };

    fetchAddress();
  }, [form, form?.address]);

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
            <div>
              Adresse:
              <p>{address?.id}</p>
              <p>{address?.street}</p>
              <p>{address?.city}</p>
              <p>{address?.zipcode}</p>
            </div>
            {!!form?.parentalAgreement ? (
              <Link
                href={form?.parentalAgreement?.split("/api")[1]}
                className="hover:text-indigo-500"
              >
                Accord parental: {form?.parentalAgreement}
              </Link>
            ) : (
              <p>Accord parental: {form?.parentalAgreement}</p>
            )}
            {!!form?.imageRightAgreement ? (
              <Link
                href={form?.imageRightAgreement?.split("/api")[1]}
                className="hover:text-indigo-500"
              >
                Droit d&apos;image: {form?.imageRightAgreement}
              </Link>
            ) : (
              <p>Droit d&apos;image: {form?.imageRightAgreement}</p>
            )}
            <p>Nom de l&apos;élève: {form?.lastnameStudent}</p>
            <p>Prénom de l&apos;élève: {form?.firstnameStudent}</p>
          </div>
        </Card>
      </div>
    </>
  );
}
