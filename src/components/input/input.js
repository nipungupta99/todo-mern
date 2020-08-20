import React from "react";
import "./input.styles.scss";
import axios from "axios";
function Input(props) {
  const [input, setInput] = React.useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/todos", { task: input, status: false })
      .then((res) => {
        props.refreshState(res);
        setInput("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex flex-row">
      <input
        className="input-field"
        type="text"
        placeholder="Enter your task Here"
        value={input}
        onChange={handleChange}
        required
      />
      <button className="add-icon" type="submit">
        +
      </button>
    </form>
  );
}

export default Input;
