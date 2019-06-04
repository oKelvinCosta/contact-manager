import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css"; // By npm bootstrap

function App() {
  const name = "Kelvin";
  const showHello = true;
  let math = 10;

  // Não é preciso colocar aspas("") para mostrar string
  math = <h4>Valor: {math * 2}</h4>;

  return (
    <Provider>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          {
            // Lista de Contatos
          }
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
