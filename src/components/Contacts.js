import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

class Contacts extends Component {
  constructor() {
    super();
  }

  deleteContact = id => {
    const { contactsx } = this.state;

    // Delete de mentirinha, pois é hard coded
    const newContacts = contactsx.filter(contact => contact.id !== id);

    // contacts é o objeto dentro de state recebendo os novos contatos
    this.setState({ contacts: newContacts });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;

          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
