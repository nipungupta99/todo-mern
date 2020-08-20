import React from "react";
import "./element.styles.scss";
import axios from "axios";
function Element(props) {
  function deleteItem(id) {
    axios
      .delete(`http://localhost:8080/todos/${id}`)
      .then((res) => props.refreshState(props.status))
      .catch((err) => console.log(err));
  }

  function updateStatus(id) {
    axios
      .patch(`http://localhost:8080/todos/${id}`, { status: !props.status })
      .then((res) => props.refreshState(props.status))
      .catch((err) => console.log(err));
  }

  return (
    <div className=" element px-2 d-flex flex-row align-items-center">
      <div
        className={props.status ? "checkbox checkbox-ticked " : "checkbox"}
        style={{ cursor: "pointer" }}
        onClick={() => updateStatus(props.id)}
      ></div>
      <div className="task flex-grow-1">{props.task}</div>
      <div
        className="px-2"
        style={{ cursor: "pointer" }}
        onClick={() => deleteItem(props.id)}
      >
        &#x2716;
      </div>
    </div>
  );
}
export default Element;
