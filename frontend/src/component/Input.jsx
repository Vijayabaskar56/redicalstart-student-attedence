import React from "react";
import { Form } from "react-bootstrap";

const Input = ({ student, setterfunction, lable }) => {
  return (
    <>
      <Form.Label className="form-label">{lable}</Form.Label>
      <Form.Control
        height="50px"
        type="text"
        defaultValue={student ? student.lastName : null}
        className="form-input"
        placeholder="Last Name"
        onChange={(e) => setterfunction(e.target.value)}
      />
    </>
  );
};

export default Input;
