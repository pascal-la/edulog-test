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
  return (
    <form>
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
