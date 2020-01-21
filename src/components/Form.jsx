import React from "react";
import "./Form.scss";
const Form = props => {
  const { onSubmit, onChange, value } = props;
  return (
    <form onSubmit={onSubmit} className="container">
      <input
        placeholder="Enter a task"
        name="inputForm"
        type="text"
        value={value}
        onChange={onChange}
      />
      <button className="btn waves-effect waves-light" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
