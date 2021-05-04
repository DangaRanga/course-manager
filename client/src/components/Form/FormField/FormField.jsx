import React from "react";

import "./FormField.css";

function FormField({ onChange, value, type, name }) {
  return (
    <article className="form-field">
      <input
        value={value}
        required
        onChange={onChange}
        type={type}
        placeholder=" "
        className="input-field"
      />
      <span className="floating-label">{name}</span>
    </article>
  );
}

export default FormField;
