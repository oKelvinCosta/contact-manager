import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Colors from "../Colors";

// função recebe props pelo parâmetro
const Header = props => {
  const { branding } = props;
  return (
    <nav
      style={{ backgroundColor: Colors.primary }}
      className="navbar navbar-expand-sm navbar-dark mb-3 py-0"
    >
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>

        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/add" className="nav-link">
                <i className="fas fa-plus" />
                Add
              </Link>
            </li>

            <li>
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

//Seta um prop padrão caso não for setado no componente
Header.defaultProps = {
  branding: "My App"
};

// Obrigatprio setar prop ao usar componente
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
