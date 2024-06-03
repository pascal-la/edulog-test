"use client";

import { useRef } from "react";
import axios from "axios";

import useAuthStore from "@/app/store";

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
    <form ref={ref} action={signIn}>
      {inputs.map((input) => (
        <div key={input.type}>
          <label>{input.label}</label>
          <div className="mt-2.5">
            <input
              id={input.type}
              type={input.type}
              name={input.type}
              required
            />
          </div>
        </div>
      ))}
      <button type="submit">Se connecter</button>
    </form>
  );
}
