import CardLinha from "../components/CardLinha";
import linhas from "../data/linhas.json";
import { useState } from "react";

// Deixa o texto em minúsculas e sem acentos: "São Luís" -> "sao luis"
function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function Home() {
  const [busca, setBusca] = useState("");

  const termo = normalizar(busca.trim());

  const linhasFiltradas = linhas.filter((linha) => {
    const nome = normalizar(linha.nome);
    const numero = normalizar(linha.numero);
    return nome.includes(termo) || numero.includes(termo);
  });

  return (
    <div>
      <h1>OnibusSlz</h1>
      <input
        type="search"
        placeholder="Buscar linha ou bairro"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      {linhasFiltradas.map((linha) => (
        <CardLinha key={linha.id} numero={linha.numero} nome={linha.nome} />
      ))}

      {linhasFiltradas.length === 0 && <p>Nenhuma linha encontrada.</p>}
    </div>
  );
}

export default Home;
