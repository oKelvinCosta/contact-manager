import React, { Component } from "react";
import "./contact.css";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import Axios from "axios";
import Colors from "../Colors";
import { Link } from "react-router-dom";

// RCC cria um component

export default class Contact extends Component {
  state = {
    showContactInfo: false
  };

  // Método asyncrono
  onDeleteClick = async (id, dispatch) => {
    // Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => dispatch({ type: "DELETE_CONTACT", payload: id })

    try {
      await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  // Quado a função ou variável é setado fora de uma função, é possível chamar ela com this.funcao

  // Para mudar state precisa do setState()

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <div className="header">
                <div style={{ cursor: "pointer" }}>
                  <h4
                    onClick={() =>
                      // Muda o objeto dentro do state que é showContactInfo
                      this.setState({
                        showContactInfo: !this.state.showContactInfo
                      })
                    }
                  >
                    {name}
                  </h4>
                  <i className="fas fa-sort-down" />
                </div>

                <div>
                  <Link to={`contact/edit/${id}`}>
                    <i
                      className="fas fa-pencil-alt"
                      style={{
                        cursos: "pointer",
                        marginRight: "20px"
                      }}
                    />
                  </Link>
                  <i
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                    className="fas fa-times"
                    style={{ cursor: "pointer", color: Colors.secondary }}
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
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
