import React from "react";
import Contact from "./components/Contact";

import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css"; // By npm bootstrap
import Contacts from "./components/Contacts";

function App() {
  const name = "Kelvin";
  const showHello = true;
  let math = 10;

  // Não é preciso colocar aspas("") para mostrar string
  math = <h4>Valor: {math * 2}</h4>;

  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <div className="container">
        {
          // Lista de Contatos
        }
        <Contacts />
      </div>
    </div>
  );
}

export default App;
