import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";
import Colors from "../Colors";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          //console.log("O que entra de props no value do <Consumer>:");
          //console.log(value);
          //console.log("---------------------");

          const { contacts } = value;

          return (
            <React.Fragment>
              <h1 className="display-4 mb-5 mt-5">
                <span style={{ color: Colors.primary }}>Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
