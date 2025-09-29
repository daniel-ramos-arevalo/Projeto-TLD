import React from "react";
import logo from "./logotld-removebg-preview.png";
import sub from "./sub.png"; // Importa a imagem do sub
import './app.css';



export default function App() {
  const event = {
    title: "TLD Palestra Cybersecurity 2025",
    subtitle: "Explorando o futuro dos domínios de topo",
    date: "10 de Outubro de 2025", // Data preenchida
    location: "CajuHub / Presencial", // Local preenchido
    description: "Uma conferência focada em Cybersecurity. O evento irá explorar os desafios e as inovações no mundo da cibersegurança, com foco em soluções para governos digitais e o papel da inteligência artificial na proteção de dados e comunicação." // Descrição mais detalhada
  };

  const palestrantes = [
    {
      name: "Nome do palestrante",
      title: "O que ele falará (TLD)",
      photo: sub 
    },
    {
      name: "Caso tenha mais colocar o nome",
      title: "O que ele falará",
      photo: sub
    },
  
  ];

  const agenda = [
    { time: "00:00 - 00:00", description: "O que será debatido" },
    { time: "00:00 - 00:00", description: "O que será debatido" },
  ];

  return (
    <div>
      <header>
        <div className="base">
          <img src={logo} alt="Logo TLD" />
          <h1>{event.title}</h1>
          <p>{event.subtitle}</p>
          <p>
            <strong>{event.date}</strong> — <em>{event.location}</em>
          </p>
        </div>
      </header>

      <main>
        <div>
          <section>
            <h2>Sobre o evento</h2>
            <p>{event.description}</p>
          </section>

           <section className="detalhes">
             <p className="text-center mt-4">
              <a href="#inscreva.js" className="botões cor-botão">Inscreva-se agora</a>
            </p>
            <p className="text-center mt-4">
              <a href="#jogos.js" className="botões cor-botão">Jogue com a gente</a>
            </p>
          </section>


          

          {/* Contexto da Parceria */}
          <section className="quadrado">
            <h2>Contexto da Parceria</h2>
            <p>
              A TLD, como hub de cibersegurança e conectividade, une forças com o
              Caju Hub, ecossistema de inovação sergipano, para desenvolver ações
              educativas com impacto direto na transformação digital da sociedade.
              A colaboração tem como foco a criação e lançamento de cartilhas
              educacionais voltadas a públicos estratégicos.
            </p>
          </section>

          {/* Objetivo da Iniciativa */}
          <section className="quadrado">
            <h2>Objetivo da Iniciativa</h2>
            <ul>
              <li>Educar e sensibilizar diferentes esferas da sociedade sobre temas estratégicos de tecnologia.</li>
              <li>Fortalecer o posicionamento da TLD e do Caju Hub como agentes de inovação e transformação digital.</li>
              <li>Promover a integração entre o setor público, privado e acadêmico através de conteúdo acessível e aplicado.</li>
            </ul>
          </section>

          {/* Temas das Cartilhas */}
          <section className="quadrado">
            <h2>Temas das Cartilhas</h2>
            <ol>
              <li>
                <strong>Governos Digitais</strong>
                <ul>
                  <li>Como a transformação digital pode tornar os serviços públicos mais eficientes, transparentes e conectados com os cidadãos.</li>
                  <li>Impactos diretos na gestão pública, mobilidade urbana, saúde, educação e segurança.</li>
                </ul>
              </li>
              <li>
                <strong>Inteligência Artificial na Comunicação Integrada</strong>
                <ul>
                  <li>A revolução da IA na forma como marcas, instituições e governos se comunicam.</li>
                  <li>Abordagem de experiências conversacionais, automação, personalização e o papel da IA em ambientes omnichannel.</li>
                </ul>
              </li>
            </ol>
          </section>

          {/* Contribuições */}
          <section className="quadrado">
            <h2>Contribuições de Marcos (Caju Hub)</h2>
            <ul>
              <li>Co-criação e curadoria do conteúdo das cartilhas, com foco técnico, estratégico e educativo.</li>
              <li>Suporte à validação com especialistas e parceiros do ecossistema.</li>
            </ul>
          </section>

          {/* Plano de Lançamento */}
          <section className="quadrado">
            <h2>Plano de Lançamento</h2>
            <ul>
              <li>Os lançamentos das cartilhas acontecerão em eventos no Caju Hub:</li>
              <ul>
                <li>Mesas de debate ou painéis com especialistas.</li>
                <li>Dinâmicas de engajamento com os temas abordados.</li>
                <li>Distribuição física ou digital da cartilha aos participantes.</li>
                <li>Participação de representantes de governos, empresas, universidades e startups.</li>
                <li>Temas já aprovados pela direção do Caju Hub.</li>
              </ul>
            </ul>
          </section>

          {/* Palestrantes */}
          <section>
            <h2>Palestrantes</h2>
            <div className="foto">
              {palestrantes.map((pessoa, index) => (
                <div key={index} className="pessoa">
                  <img src={pessoa.photo} alt={`Foto de ${pessoa.name}`} />
                  <div className="meta">
                    <strong>{pessoa.name}</strong>
                    <small>{pessoa.title}</small>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Programação */}
          <section>
            <h2>Programação</h2>
            {agenda.map((item, index) => (
              <div key={index} className="cores">
                <time>{item.time}</time>
                <span>{item.description}</span>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Rodapé */}
      <footer>
        <div className="base">
          <p>
            © {new Date().getFullYear()} TLD Conference — Todos os direitos reservados.
            {/* Se necessário fazer um rodapé separado. */}
          </p>
        </div>
      </footer>
    </div>
  );
}