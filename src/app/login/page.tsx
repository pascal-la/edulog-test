"use client";

import { useRef } from "react";
import axios from "axios";

import useAuthStore from "@/app/store";

import Title from "@/components/ui/Title";

const inputs = [
  {
    label: "E-mail",
    type: "email",
  },
  {
    label: "Mot de passe",
    type: "password",
  },
];

export default function LoginPage() {
  const ref = useRef<HTMLFormElement>(null);

  const { login } = useAuthStore();

  async function signIn(formData: FormData) {
    const username = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await axios.post(
        "https://localhost:8000/api/login",
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { message, token } = response.data;

      if (response.status === 200) {
        login(token);
      } else {
        throw new Error(message || "Login failed");
      }
    } catch (err: any) {
      alert("Login failed: " + (err.response?.data?.message || err.message));
      console.error(err);
    } finally {
      ref.current?.reset();
    }
  }

  return (
    <div className="flex flex-col items-center gap-20 pr-64">
      <Title title="Portail de sortie scolaire" />
      <form ref={ref} action={signIn} className="grid gap-8 w-full max-w-2xl">
        {inputs.map((input) => (
          <div key={input.type}>
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              {input.label}
            </label>
            <div className="mt-2.5">
              <input
                id={input.type}
                type={input.type}
                name={input.type}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}
