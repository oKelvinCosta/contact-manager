import React, { Component } from "react";
import axios from "axios";
import Storage from "./Storage";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      const del = {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

      Storage.setStorage("contacts", JSON.stringify(del.contacts));
      return del;

    case "ADD_CONTACT":
      const add = {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

      Storage.setStorage("contacts", JSON.stringify(add.contacts));

      return add;

    case "UPDATE_CONTACT":
      const update = {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
      Storage.setStorage("contacts", JSON.stringify(update.contacts));
      return update;

    default:
      return state;
  }
};

export class Provider extends Component {
  // Isso é um state global da classe
  state = {
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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  async componentDidMount() {
    if (!Storage.existStorage("contacts")) {
      // Pega do site
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      // seta local
      this.setState({ contacts: res.data });
      // seta storage
      const json = JSON.stringify(res.data);
      Storage.setStorage("contacts", json);
      // debug
      // console.log("storage NÃO existe");
    } else {
      const contactsStorage = Storage.getStorage("contacts");

      this.setState({ contacts: contactsStorage });
      // console.log(contactsStorage);
      // console.log("storage Existe");
    }

    // console.log("componentDidMount");
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
