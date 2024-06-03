"use client";

import { useRef } from "react";
import Link from "next/link";
import axios from "axios";

import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";

const inputs = [
  {
    label: "Autorisation",
    name: "parentalAgreement",
    type: "file",
    accept: "application/pdf",
  },
  {
    label: "Prénom",
    name: "firstname",
    type: "text",
  },
  {
    label: "Nom de famille",
    name: "lastname",
    type: "text",
  },
  {
    label: "Date de naissance",
    name: "birthDate",
    type: "text",
  },
  {
    label: "Téléphone",
    name: "phone",
    type: "text",
  },
  {
    label: "Ville",
    name: "city",
    type: "text",
  },
  {
    label: "Rue/Voie",
    name: "street",
    type: "text",
  },
  {
    label: "Code postal",
    name: "zipcode",
    type: "text",
  },
  {
    label: "Droit à l'image",
    name: "imageRightAgreement",
    type: "file",
    accept: "application/pdf",
  },
  {
    label: "Nom de famille de l'élève",
    name: "lastnameStudent",
    type: "text",
  },
  {
    label: "Prénom de l'élève",
    name: "firstnameStudent",
    type: "text",
  },
];

export default function FrontOfficePage() {
  const ref = useRef<HTMLFormElement>(null);

  async function uploadForm(formData: FormData) {
    const parentalAgreement = formData.get("parentalAgreement");
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const birthDate = formData.get("birthDate");
    const phone = formData.get("phone");
    const city = formData.get("city");
    const street = formData.get("street");
    const zipcode = formData.get("zipcode");
    const imageRightAgreement = formData.get("imageRightAgreement");
    const lastnameStudent = formData.get("lastnameStudent");
    const firstnameStudent = formData.get("firstnameStudent");

    try {
      const response = await axios.post(
        "https://localhost:8000/api/forms",
        {
          parentalAgreement,
          firstname,
          lastname,
          birthDate,
          phone,
          address: {
            city,
            street,
            zipcode,
          },
          imageRightAgreement,
          lastnameStudent,
          firstnameStudent,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        ref.current?.reset();
      }
    } catch (err: any) {
      alert("Upload failed: " + (err.response?.data?.message || err.message));
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col items-center gap-20 pr-64">
      <div className="grid w-full max-w-2xl gap-12">
        <div className="flex w-full">
          <Button text="Retour" href="/" />
        </div>
        <div className="text-center">
          <Title title="Autorisation de sortie" />
        </div>
        <form ref={ref} className="grid gap-8 w-full" action={uploadForm}>
          {inputs.map((input) => (
            <div key={input.type}>
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                {input.label}
              </label>
              <div className="mt-2.5">
                <input
                  id={input.type}
                  type={input.type}
                  name={input.name}
                  accept={input.accept}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
          ))}
          <Button text="Envoyer" />
        </form>
      </div>
    </div>
  );
}
