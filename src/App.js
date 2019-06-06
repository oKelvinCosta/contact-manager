import React from "react";
import { Provider } from "./context";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // By npm bootstrap
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";

function App() {
  //const name = "Kelvin";
  //const showHello = true;
  //let math = 10;

  // Não é preciso colocar aspas("") para mostrar string
  //math = <h4>Valor: {math * 2}</h4>;

  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/add" component={AddContact} />
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
