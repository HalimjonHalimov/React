import React from "react";

import "./index.css";

const Todo = () => {
  return (
    <div className="todo">
      <div className="todo-header">Todo header</div>
      <div className="todo-body">
        <div className="todo-item">
          <div className="todo-items">
            <div className="item">
              1
              <input
                type="text"
                name="name"
                className=""
                placeholder="Name "
                value={"Halimov"}
                required
                disabled
              />
              <button className="todo-button">Liked</button>
              <div className="todo-items-btn">
                <button className="todo-button">edit</button>
                <button className="todo-button">like</button>
                <button className="todo-button">delete</button>
              </div>
            </div>
          </div>
        </div>
        <div className="todo-item">Todo ADD</div>
      </div>
    </div>
  );
};

export default Todo;
