import React, { Component } from "react";
import "./contact.css";
import PropTypes from "prop-types";

// RCC cria um component

export default class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };

  // Quado a função ou variável é setado fora de uma função, é possível chamar ela com this.funcao

  // Para mudar state precisa do setState()

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <div className="header">
          <div style={{ cursor: "pointer" }}>
            <h4
              onClick={() =>
                // Muda o objeto dentro do state que é showContactInfo
                this.setState({ showContactInfo: !this.state.showContactInfo })
              }
            >
              {name}
            </h4>
            <i className="fas fa-sort-down" />
          </div>

          <div>
            <i
              onClick={this.onDeleteClick}
              className="fas fa-times"
              style={{ cursor: "pointer", color: "red" }}
            />
          </div>
        </div>

        {// Novo modo de Ternário com JS e HTML
        showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">
              <b>Email:</b> {email}
            </li>
            <li className="list-group-item">
              <b>Phone:</b> {phone}
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};
