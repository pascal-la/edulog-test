"use client";

import axios from "axios";

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

      const { message } = response.data;

      if (response.status === 200) {
        console.log("login ok", response);
      } else {
        throw new Error(message || "Login failed");
      }
    } catch (err: any) {
      console.error(err);
    }
  }

  return (
    <form action={signIn}>
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
