import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
    // Lista de Contatos
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Kelvin Costa",
          email: "okelvincosta@gmail.com",
          phone: "31 8647-0050"
        },
        {
          id: 2,
          name: "John Doe",
          email: "jdoe@gmail.com",
          phone: "3228-2000"
        },
        {
          id: 3,
          name: "John Doe",
          email: "jdoe@gmail.com",
          phone: "3228-2000"
        }
      ]
    };
  }

  deleteContact = id => {
    const { contactsx } = this.state;

    // Delete de mentirinha, pois é hard coded
    const newContacts = contactsx.filter(contact => contact.id !== id);

    // contacts é o objeto dentro de state recebendo os novos contatos
    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts } = this.state;
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
  }
}

export default Contacts;
