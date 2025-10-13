import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router";
import Input from "../components/Input";
import Button from "../components/Button";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aqui você chamaria a rota de login do backend, se existir
    // Por enquanto, vamos só simular login bem simples
    if (username && password) {
      navigate("/home"); // redireciona para home após login
    } else {
      alert("Preencha usuário e senha!");
    }
  };

  return (
    <main className="mx-auto max-w-4/5 w-150 h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input             
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
            required />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Entrar</Button>
      </form>
    </main>
  );
}
