import { useState } from "react";
import "../App.css";
import { Form } from "react-bootstrap";
import { getStudents } from "../utils";
import PropsTypes from "prop-types";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    const res = await getStudents();
    const results = res.filter((user) => {
      return (
        value && user && user.name && user.name.toLowerCase().includes(value)
      );
    });
    setResults(results);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <Form.Control
        placeholder="Search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        className="search-input"
        aria-describedby="passwordHelpBlock"
      />
    </div>
  );
};

SearchBar.propTypes = {
  setResults: PropsTypes.func.isRequired,
};
