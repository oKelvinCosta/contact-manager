import React, { Component } from "react";

const Context = React.createContext();

// Isso é um state global

export class Provider extends Component {
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
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
