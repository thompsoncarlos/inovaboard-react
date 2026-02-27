import { useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { CardEvento } from "./components/CardEvento";
import { FormularioDeEvento } from "./components/FormularioDeEvento";
import { Tema } from "./components/Tema";

function App() {
  const temas = [
    {
      id: 1,
      nome: "front-end",
    },
    {
      id: 2,
      nome: "back-end",
    },
    {
      id: 3,
      nome: "devops",
    },
    {
      id: 4,
      nome: "inteligência artificial`",
    },
    {
      id: 5,
      nome: "data science",
    },
    {
      id: 6,
      nome: "cloud",
    },
  ];

  const [eventos, setEventos] = useState([
    {
      capa: "https://github.com/thompsoncarlos/static-files/blob/main/img_3.png?raw=true",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
    },
  ]);

  function adicionarEvento(evento) {
    setEventos([...eventos, evento]);
  }
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />
      <section className="container">
        {temas.map(function (tema) {
          if (
            !eventos.some(function (evento) {
              return evento.tema.id == tema.id;
            })
          ) {
            return null;
          }

          return (
            <section key={tema.id}>
              <Tema tema={tema} />
              <div className="eventos">
                {eventos
                  .filter(function (evento) {
                    return evento.tema.id == tema.id;
                  })
                  .map(function (evento, indice) {
                    return <CardEvento evento={evento} key={indice} />;
                  })}
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
}

export default App;
