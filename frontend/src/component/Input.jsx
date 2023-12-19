import { Form } from "react-bootstrap";
import PropsTYpes from "prop-types";

const Input = ({ defaultValue, setterfunction, lable }) => {
  return (
    <>
      <Form.Group className="mb-3" id="name-inputs" controlId="formBasicEmail">
        <div className="input-cointainer">
          <Form.Label className="form-label">{lable}</Form.Label>
          <Form.Control
            height="50px"
            type="text"
            defaultValue={defaultValue}
            className="form-input"
            placeholder={`${lable}`}
            onChange={(e) => setterfunction(e.target.value)}
          />
        </div>
      </Form.Group>
    </>
  );
};

export default Input;

Input.propTypes = {
  defaultValue: PropsTYpes.string,
  setterfunction: PropsTYpes.func,
  lable: PropsTYpes.string,
};
