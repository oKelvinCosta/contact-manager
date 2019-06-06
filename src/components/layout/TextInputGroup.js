import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames"; // npm i classnames

const TextInputGroup = ({
  //props
  // pode ser usado props aqui, e lá no return props.name
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error,
  // Recebe todos os props extras
  ...rest
  // preciso setar o prop q vou receber?
}) => {
  console.log(rest);

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

// Obrigatoriedades de props a serem recebidos
TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
