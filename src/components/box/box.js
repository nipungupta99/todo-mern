import React, { useState, useEffect } from "react";
import "./box.styles.scss";
import Date from "../date/date";
import Element from "../element/element";
import Input from "../input/input";
import axios from "axios";
function Box() {
  const [ticker, setTicker] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:8080/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => alert(err));
  }, [ticker]);

  const [todos, setTodos] = useState([]);

  const resFromChild = (res) => setTicker(!ticker);

  return (
    <div className=" box text-white ">
      <div className="top-bar d-flex flex-row justify-content-between ">
        <div>
          <Date />
        </div>
        <div className="p-4 heading">My To-Do List</div>
      </div>

      {todos.map((todo) => (
        <Element
          task={todo.task}
          status={todo.status}
          id={todo._id}
          refreshState={resFromChild}
        />
      ))}
      <Input refreshState={resFromChild} />
    </div>
  );
}

export default Box;
