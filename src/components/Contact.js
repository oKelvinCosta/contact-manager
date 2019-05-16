import React, { Component } from "react";
import "./contact.css";

// RCC cria um component

export default class Contact extends Component {
  render() {
    const { name, email } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Email:</b> {email}
          </li>
          <li className="list-group-item">
            <b>Instagram:</b> {this.props.instagram}
          </li>
        </ul>
      </div>
    );
  }
}
